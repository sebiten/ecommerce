import React from "react";
import NavBar from "./components/NavBar";
import ProductsScreen from "./screens/ProductsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // eslint-disable-line
import { ChakraProvider } from "@chakra-ui/react";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./components/Footer";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/products/:id" element={<ProductScreen />}></Route>
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
