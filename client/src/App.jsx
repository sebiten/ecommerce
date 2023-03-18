import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsScreen from "./screens/ProductsScreen";

function App() {
  return (

        <main>
        <NavBar />
        <ProductsScreen />
          
        </main>
  
  );
}

export default App;
