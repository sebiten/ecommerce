import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // eslint-disable-line
import NavBar from "./components/NavBar";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <main>{/* <Routes></Routes> */}</main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
