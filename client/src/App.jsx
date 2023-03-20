import React from "react";
import NavBar from "./components/NavBar";
import ProductsScreen from "./screens/ProductsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // eslint-disable-line
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/products/:id" element={<ProductsScreen />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
