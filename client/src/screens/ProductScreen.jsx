import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Wrap,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Flex,
  Badge,
  Heading,
  HStack,
  Button,
  SimpleGrid,
  useToast,
  Tooltip,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { MinusIcon, StarIcon, SmallAddIcon } from "@chakra-ui/icons";
import { BiPackage, BiCheckShield, BiSupport } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/productActions";
import { addCartItem } from "../redux/actions/cartActions";
import { useEffect, useState } from "react";


const ProductScreen = () => {
  let { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.products);
  const { product, loading, error } = productsInfo;
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id, cart]);

  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
     <Text>Prodcyu</Text>
    </Wrap>
  );
};

export default ProductScreen;
