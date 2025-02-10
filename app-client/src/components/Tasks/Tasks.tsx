import { HStack, Box, Text } from "@chakra-ui/react";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { Task } from "../GoalsList/GoalsListComponent";
interface Props {
  tasks: Task[];
}

export const TasksComponent: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      <Box>
        <Text>Tasks</Text>
        {tasks.map((task) => {
          return (
            <>
              <Box border="sm" p={2} m={2}>
                <HStack>
                  <Checkbox variant="solid" checked={task.completed} />
                  <p>{task.title}</p>
                  <p>{task.description}</p>
                </HStack>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
