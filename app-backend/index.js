const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Goal = require("./models/goals");

const uri =
  "mongodb+srv://asheshcosmid:asheshcosmid@cluster0.sjdpj.mongodb.net/my-first-db?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(uri);

const connectDB = async () => {
  try {
    // Use your MongoDB connection string here. You can store it in an environment variable (MONGO_URI)
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment if needed: useFindAndModify: false, useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 7000 | process.env.PORT;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/goals", async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/goals/:id", async (req, res) => {
  try {
    const goals = await Goal.findById(req.params.id);
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/goals/create", async (req, res) => {
  try {
    const newGoal = new Goal(req.body);
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/goals/checkpoints/create/:id", async (req, res) => {
  const goalId = req.params.id;
  // The checkpoint details (e.g., title, description, order) should be sent in the request body.
  const newCheckpoint = req.body;

  try {
    // Find the Goal by ID and push the new checkpoint into the topics array.
    const updatedGoal = await Goal.findByIdAndUpdate(
      goalId,
      { $push: { checkpoints: newCheckpoint } },
      { new: true } // Returns the updated document
    );

    if (!updatedGoal) {
      return res.status(404).json({ error: "Goal not found" });
    }

    res.status(200).json(updatedGoal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});
