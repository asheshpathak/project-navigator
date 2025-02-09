import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GoalsComponent } from "./components/Goals/Goals.tsx";
// import { goals } from "./goal.ts";
import { Provider } from "./components/ui/provider.tsx";
// import { CheckpointsComponent } from "./components/Checkpoints/Checkpoints.tsx";
import { GoalPage } from "./components/GoalPage/GoalPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/goals">
            <Route path=":id" element={<GoalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
