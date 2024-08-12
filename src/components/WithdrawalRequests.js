import "./Requests.css";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useToast,
  position,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { format, subWeeks, differenceInDays, addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { calcLength } from "framer-motion";

const WithdrawalRequests = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const {
    register: login,
    handleSubmit: loginSubmit,
    formState: { errors2 },
    reset: resetLogin,
  } = useForm();
  const {
    isOpen: allowModalIsOpen,
    onOpen: allowModalOnOpen,
    onClose: allowModalOnClose,
  } = useDisclosure();
  const {
    isOpen: rejectModalIsOpen,
    onOpen: rejectModalOnOpen,
    onClose: rejectModalOnClose,
  } = useDisclosure();
  const getRandomDateInLastWeek = () => {
    const now = new Date(); // Current date and time
    const oneWeekAgo = subWeeks(now, 1); // Date 1 week before now

    // Calculate the number of days between now and one week ago
    const daysDifference = differenceInDays(now, oneWeekAgo);

    // Generate a random number of days to add to the oneWeekAgo date
    const randomDays = Math.floor(Math.random() * (daysDifference + 1));

    // Add the random number of days to the oneWeekAgo date
    const randomDate = addDays(oneWeekAgo, randomDays);

    return format(randomDate, "yyyy-MM-dd");
  };
  const tempArray = [
    { id: 1, name: "John Doe", amount: 100, date: getRandomDateInLastWeek() },
    { id: 2, name: "Jane Doe", amount: 200, date: getRandomDateInLastWeek() },
    { id: 3, name: "John Smith", amount: 300, date: getRandomDateInLastWeek() },
  ];

  const submitPassword = (data) => {
    setIsLoading(true);

    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      allowModalOnClose();
      resetLogin();
      toast({
        title: "Withdrawal Approved.",
        status: "success",
        duration: 6000,
        position: "top",
      });
    }, 3000);
  };

  const handleReject = () => {
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "Withdrawal Rejected.",
        status: "error",
        duration: 6000,
        position: "top",
      });
      setIsLoading(false);
      rejectModalOnClose();
    }, 1000);
  };
  return (
    <>
      <Box px="12px" h="100vh" className="container">
        <Flex p="24px 12px" gap="2" className="mainContent">
          {/* navigation */}
          <Box flex=".75">
            {/* title logo */}
            <Flex m="12px 24px" w="100%">
              <Box>
                <Heading size="lg">Aquarizz Admin</Heading>
              </Box>
            </Flex>
            <Flex
              className="navLinkContainer_req"
              my="16px"
              mx="12px"
              flexDirection="column"
              textAlign="center"
            >
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active_dash" : "inactive_dash"
                }
                to="/requests"
              >
                Withdrawal Requests
              </NavLink>
            </Flex>
            <Box>
              <Button w="100%" colorScheme="red" variant="ghost">
                Logout
              </Button>
            </Box>
          </Box>
          {/* content */}
          <Box flex="4">
            <Box m="12px 24px">
              <Heading size="md"> Withdrawal Requests</Heading>
            </Box>
            <Box className="withdrawalContainer">
              {tempArray &&
                tempArray.map((data) => {
                  return (
                    <>
                      <Card p="24px 0" my="16px" key={data.id}>
                        <Flex>
                          <CardBody>
                            <Flex flexDirection="column">
                              <Box flex="1" className="withdrawalName">
                                <Text as="b"> {data.name}</Text>
                              </Box>
                              <Flex gap="2">
                                <Text fontWeight="600">Amount: </Text>
                                <Text>&#8369;{data.amount}</Text>
                              </Flex>
                              <Flex gap="2">
                                <Text fontWeight="600">Date: </Text>
                                <Text>{data.date}</Text>
                              </Flex>
                            </Flex>
                          </CardBody>
                          <Flex
                            gap="5"
                            m="2px 4px"
                            justify="center"
                            align="center"
                          >
                            <Button
                              colorScheme="green"
                              onClick={allowModalOnOpen}
                            >
                              Allow
                            </Button>
                            <Modal
                              isOpen={allowModalIsOpen}
                              onClose={allowModalOnClose}
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>
                                  Enter admin password to continue
                                </ModalHeader>
                                <ModalCloseButton />
                                <form onSubmit={loginSubmit(submitPassword)}>
                                  <ModalBody>
                                    <Input
                                      type="password"
                                      {...login("password", {
                                        required: true,
                                      })}
                                      aria-invalid={
                                        errors2?.password ? "true" : "false"
                                      }
                                    />
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button type="submit" isLoading={isLoading}>
                                      Submit
                                    </Button>
                                    {/* <Button
                                colorScheme="red"
                                mr={3}
                                onClick={allowModalOnClose}
                              >
                                Close
                              </Button> */}
                                  </ModalFooter>
                                </form>
                              </ModalContent>
                            </Modal>
                            <Button
                              colorScheme="red"
                              onClick={rejectModalOnOpen}
                            >
                              Reject
                            </Button>
                            <Modal
                              isOpen={rejectModalIsOpen}
                              onClose={rejectModalOnClose}
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>
                                  Are you sure you want to reject request?
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody></ModalBody>
                                <ModalFooter>
                                  <Flex gap="2">
                                    <Button
                                      colorScheme="green"
                                      onClick={handleReject}
                                      isLoading={isLoading}
                                    >
                                      Yes
                                    </Button>
                                    <Button
                                      colorScheme="red"
                                      mr={3}
                                      onClick={rejectModalOnClose}
                                    >
                                      No
                                    </Button>
                                  </Flex>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Flex>
                        </Flex>
                      </Card>
                    </>
                  );
                })}
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WithdrawalRequests;
