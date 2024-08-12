import "./Home.css";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const Home = () => {
  const primaryColor = "#FFC947";
  const data = {
    labels: ["Total Customer Users", "Total Shop Users"],
    datasets: [
      {
        data: [3202, 1903],
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(255, 205, 86, 0.7)"],
        hoverOffset: 2,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false, // This allows the chart to resize properly
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
              className="navLinkContainer"
              my="16px"
              mx="12px"
              flexDirection="column"
              textAlign="center"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active_dash" : "inactive_dash"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
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
              <Heading size="md">Statistics</Heading>
            </Box>

            <Box className="contents">
              <Flex flexWrap="wrap" justify="center" gap={6} m="12px 24px">
                <Card h="35em" w="35em">
                  <CardBody>
                    <Box textAlign="center" h="100%">
                      <Flex h="400px" justify="center">
                        {/* <Flex
                          align="center"
                          justify="center"
                          h="150px"
                          w="150px"
                          borderRadius="50%"
                        >
                        
                        </Flex> */}
                        <Doughnut data={data} />
                      </Flex>
                      <Flex justify="space-around" align="center">
                        <Box mt="24px">
                          <Flex justify="center" align="center" gap="2">
                            <Box
                              borderRadius="50%"
                              h="10px"
                              w="10px"
                              bg="rgba(255, 205, 86, 0.7)"
                            ></Box>
                            <Text>1903</Text>
                          </Flex>
                          <Flex justify="center" align="center" gap="2">
                            <Box
                              borderRadius="50%"
                              h="10px"
                              w="10px"
                              bg="rgba(255, 99, 132, 0.7)"
                            ></Box>
                            <Text>3202</Text>
                          </Flex>
                        </Box>

                        <Box mt="24px">
                          <Text fontWeight="600" fontSize={32}>
                            5105
                          </Text>
                          <Text as="b">Total Current Users</Text>
                        </Box>
                      </Flex>
                    </Box>
                  </CardBody>
                </Card>
                {/* 
                <Card h="20em" w="20em">
                  <CardBody>
                    <Box textAlign="center" h="100%">
                      <Flex justify="center" align="center">
                        <Flex
                          align="center"
                          justify="center"
                          h="150px"
                          w="150px"
                          borderRadius="50%"
                        >
                          <Text fontWeight="600" fontSize={32}>
                            1230
                          </Text>
                        </Flex>
                      </Flex>
                      <Box mt="24px">
                        <Text as="b">Current Shop Users</Text>
                      </Box>
                    </Box>
                  </CardBody>
                </Card>
                <Card h="20em" w="20em">
                  <CardBody>
                    <Box textAlign="center" h="100%">
                      <Flex justify="center" align="center">
                        <Flex
                          align="center"
                          justify="center"
                          h="150px"
                          w="150px"
                          borderRadius="50%"
                        >
                          <Text fontWeight="600" fontSize={32}>
                            1972
                          </Text>
                        </Flex>
                      </Flex>
                      <Box mt="24px">
                        <Text as="b">Current Customer Users</Text>
                      </Box>
                    </Box>
                  </CardBody>
                </Card> */}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
