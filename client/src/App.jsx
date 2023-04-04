import React from "react";
import NavBar from "./components/NavBar";
import ProductsScreen from "./screens/ProductsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // eslint-disable-line
import { ChakraProvider } from "@chakra-ui/react";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/products/:id" element={<ProductScreen />}></Route>
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
