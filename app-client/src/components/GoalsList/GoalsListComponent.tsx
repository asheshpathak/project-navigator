import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  StatNumber,
  Stat,
  CircularProgress,
  Image,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Goal } from "../../types";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
interface Props {
  goals?: Goal[];
}
const VerticallyCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createGoal = () => {
    const goalObject = {
      title: "A sample goal",
      description: "A sample descrition of the goal",
    };
    axios
      .post("http://localhost:7000/goals/create", goalObject)
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
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="email" />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={createGoal} variant="solid">
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
export const GoalsListComponent: React.FC<Props> = ({ goals }) => {
  console.log(goals);
  return (
    <>
      <VerticallyCenter />
      <HStack>
        {goals?.map((goal) => {
          return (
            <>
              <Card w="sm">
                <Image
                  w="100%"
                  h="400px"
                  src="https://images.unsplash.com/photo-1506784781895-38847b5e50e7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Green double couch with wooden legs"
                />
                <CardBody gap="2">
                  <Heading size="md">{goal.title}</Heading>
                  <Text>{goal.description}</Text>
                  {/* <Text
                    textStyle="2xl"
                    fontWeight="medium"
                    letterSpacing="tight"
                    mt="2"
                  >
                    45%
                  </Text> */}
                  <HStack>
                    <CircularProgress value={80} />
                    <Stat>
                      <StatNumber>45%</StatNumber>
                    </Stat>
                  </HStack>
                </CardBody>
                <CardFooter gap="2">
                  <HStack>
                    <Button variant="solid">
                      <Link to={`/goals/${goal._id}`}>Go to the Goal</Link>
                    </Button>
                    <Button variant="outline">
                      <Link to="">Edit Goal</Link>
                    </Button>
                  </HStack>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </HStack>
    </>
  );
};
