// import React from "react";
import { useParams } from "react-router-dom";
import { goals } from "../../goal";
import { Goal } from "../GoalsList/GoalsListComponent";
import { TasksComponent } from "../Tasks/Tasks";
import { Box, HStack, VStack, Heading } from "@chakra-ui/react";

export const GoalPage = () => {
  const params = useParams();
  const goal: Goal | undefined = goals.find(({ id }) => id === params.id);
  console.log(goal);
  return (
    <>
      <Heading size="3xl" letterSpacing="tight">
        {goal?.title}
      </Heading>
      <HStack>
        {goal?.checkpoints?.map((checkpoint) => {
          return (
            <>
              <Box padding={2} style={{ border: "1px solid", width: "500px" }}>
                <VStack border={1} p={2} align="left">
                  <p>{checkpoint.title}</p>
                  <p>{checkpoint.description}</p>
                  <TasksComponent tasks={checkpoint.tasks} />
                </VStack>
              </Box>
            </>
          );
        })}
      </HStack>
    </>
  );
};
