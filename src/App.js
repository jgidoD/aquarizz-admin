import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WithdrawalRequests from "./components/WithdrawalRequests";
import LoginAdmin from "./components/LoginAdmin";
function App() {
  return (
    <>
      <AuthContextProvider>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/requests" element={<WithdrawalRequests />} />
          </Routes>
        </ChakraProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
