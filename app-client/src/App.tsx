import { useState } from "react";
import "./App.css";
// import { goals } from "./goal";
import { GoalsListComponent } from "./components/GoalsList/GoalsListComponent";
import axios from "axios";

function App() {
  const [fetchedGoals, setFetchedGoals] = useState([]);
  axios.get("http://localhost:7000/goals").then((response) => {
    setFetchedGoals(response?.data);
  });
  return (
    <>
      <GoalsListComponent goals={fetchedGoals} />
    </>
  );
}

export default App;
