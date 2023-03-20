import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";


function ProductsScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [  dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
    {products.map((product) => (
      <WrapItem key={product._id}>
        <Center w="250px" h="550px">
          <ProductCard product={product} />
        </Center>
      </WrapItem>
    ))}
  </Wrap>
    
  );
}

export default ProductsScreen;
