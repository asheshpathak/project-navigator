// server/models/Goal.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Sub-Task Schema
const SubTaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Define Task Schema (which may include sub-tasks)
const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    subTasks: [SubTaskSchema], // Array of sub-tasks
  },
  { timestamps: true }
);

// Define Checkpoint Schema (which contains tasks)
const CheckPointSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    order: { type: Number, default: 0 },
    tasks: [TaskSchema], // Array of tasks
  },
  { timestamps: true }
);

// Define Goal Schema (top-level entity)
const GoalSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    // An array of topics/sub-goals
    checkpoints: [CheckPointSchema],
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

// Create and export the Goal model
const Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;
