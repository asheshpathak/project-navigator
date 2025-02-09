import React from "react";
// import { CheckpointsComponent } from "../Checkpoints/Checkpoints";
import { Card } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Checkpoint {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  checkpoints: Checkpoint[];
}

interface Props {
  goals: Goal[];
}

export const GoalsListComponent: React.FC<Props> = ({ goals }) => {
  return (
    <>
      <h1>Goals</h1>
      <HStack>
        {goals.map((goal) => {
          return (
            <>
              <Card.Root maxW="sm" overflow="hidden">
                <Image
                  maxH="60"
                  maxW="100"
                  src="https://images.unsplash.com/photo-1506784781895-38847b5e50e7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                  <Card.Title>{goal.title}</Card.Title>
                  <Card.Description>{goal.description}</Card.Description>
                  <Text
                    textStyle="2xl"
                    fontWeight="medium"
                    letterSpacing="tight"
                    mt="2"
                  >
                    45%
                  </Text>
                </Card.Body>
                <Card.Footer gap="2">
                  <Button variant="solid">
                    <Link to={`/goals/${goal.id}`}>Go to the Goal</Link>
                  </Button>
                  <Button variant="ghost">
                    <Link to="">Edit Goal</Link>
                  </Button>
                </Card.Footer>
              </Card.Root>
              {/* <CheckpointsComponent checkpoints={goal.checkpoints} /> */}
            </>
          );
        })}
      </HStack>
    </>
  );
};
