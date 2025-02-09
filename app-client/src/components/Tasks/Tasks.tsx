import React from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  tasks: Task[];
}

export const TasksComponent: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      <p>Tasks</p>
      {tasks.map((task) => {
        return (
          <>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </>
        );
      })}
    </>
  );
};
