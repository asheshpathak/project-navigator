import "./App.css";
import { goals } from "./goal";
import { GoalsListComponent } from "./components/GoalsList/GoalsListComponent";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <GoalsListComponent goals={goals} />
    </>
  );
}

export default App;
