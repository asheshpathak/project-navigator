import React from "react";
import { TasksComponent } from "../Tasks/Tasks";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Checkpoint {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}

interface Props {
  checkpoints?: Checkpoint[];
}

export const CheckpointsComponent: React.FC<Props> = ({ checkpoints }) => {
  console.log(checkpoints);
  return (
    <>
      <p>Checkpoints</p>
      {checkpoints?.map((checkpoint) => {
        return (
          <>
            <p>{checkpoint.title}</p>
            <p>{checkpoint.description}</p>
            <p>{checkpoint.createdAt}</p>
            <p>{checkpoint.updatedAt}</p>
            <TasksComponent tasks={checkpoint.tasks} />
          </>
        );
      })}
    </>
  );
};
