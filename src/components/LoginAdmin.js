import "./LoginAdmin.css";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  Text,
  useToast,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { ReactComponent as Logo } from "../password.svg";
import { useForm } from "react-hook-form";

const LoginAdmin = () => {
  const toast = useToast();
  const {
    register: login,
    handleSubmit: loginSubmit,
    formState: { errors2 },
    reset: resetLogin,
  } = useForm();
  const handleLogin = async (data) => {
    console.log(data);
    try {
      //   await signIn(data.email, data.password);
      //   // handleSessionStorage();
      //   navigate("/shop");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          toast({
            title: "Invalid Credentials",
            description: "Please check your email and password",
            status: "error",
            duration: 5000,
            position: "top",
          });
      }
    }
    resetLogin();
  };
  return (
    <>
      {/* <Flex  className="backgroundWrapper" h="100vh"></Flex> */}
      <Flex
        className="loginWrapper"
        flexDirection="column"
        align="center"
        justify="center"
        mx="auto"
        h="100vh"
      >
        {/* illustration */}
        <Flex justify="center" my="24px" bg="#">
          {/* <Logo /> */}
          <Heading>Login Admin</Heading>
        </Flex>

        {/* login form */}
        <Box>
          <Flex className="loginContents" justify="center" borderRadius="12px">
            <form onSubmit={loginSubmit(handleLogin)}>
              <Card className="cardContents">
                <CardBody>
                  <Box className="loginFormContainer">
                    <InputGroup>
                      <Flex flexDirection="column">
                        <Text fontWeight="600" fontSize="sm">
                          Enter Username
                        </Text>
                        <Input />
                      </Flex>
                    </InputGroup>
                    <InputGroup>
                      <Flex flexDirection="column">
                        <Text fontWeight="600" fontSize="sm">
                          Enter Password
                        </Text>
                        <Input />
                      </Flex>
                    </InputGroup>
                  </Box>
                  <Box textAlign="center">
                    <Button w="100%" type="submit" bg="#FFC947">
                      Login
                    </Button>
                  </Box>
                </CardBody>
              </Card>
            </form>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default LoginAdmin;
