import "./App.css";
import { goals } from "./goal";
import { GoalsListComponent } from "./components/GoalsList/GoalsListComponent";

function App() {
  return (
    <>
      <GoalsListComponent goals={goals} />
    </>
  );
}

export default App;
