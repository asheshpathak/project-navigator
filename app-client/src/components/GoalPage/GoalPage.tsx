import { useParams } from "react-router-dom";
import { Goal } from "../../types";
import { TasksComponent } from "../Tasks/Tasks";
import {
  Box,
  HStack,
  VStack,
  Heading,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const VerticallyCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const createCheckpoint = () => {
    const checkpointObject = {
      title: "A sample goal",
      description: "A sample descrition of the goal",
    };
    axios
      .post(
        `http://localhost:7000/goals/checkpoints/create/${params.id}`,
        checkpointObject
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name of the Goal</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="email" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={createCheckpoint} variant="solid">
              Create Goal
            </Button>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const GoalPage = () => {
  const params = useParams();
  const [goal, setGoal] = useState<Goal>();
  useEffect(() => {
    axios.get(`http://localhost:7000/goals/${params.id}`).then((response) => {
      setGoal(response.data);
    });
  }, [goal]);
  console.log(goal);
  if (!goal)
    return (
      <>
        <div>Looks like there's nothing here! create a checkpoint?</div>
        <VerticallyCenter />
      </>
    );
  return (
    <>
      <Heading size="3xl" letterSpacing="tight">
        {goal?.title}
      </Heading>
      <VerticallyCenter />
      <HStack>
        {goal?.checkpoints?.map((checkpoint) => {
          return (
            <>
              <Box padding={2} style={{ border: "1px solid", width: "500px" }}>
                <VStack border={1} p={2} align="left">
                  <p>{checkpoint?.title}</p>
                  <p>{checkpoint?.description}</p>
                  <TasksComponent tasks={checkpoint?.tasks} />
                </VStack>
              </Box>
            </>
          );
        })}
      </HStack>
    </>
  );
};
