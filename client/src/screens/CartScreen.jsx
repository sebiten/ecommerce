import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
  HStack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartOrderSummery from "../components/CartOrderSummery";

function CartScreen() {
  const cardInfo = useSelector((state) => state.cart);
  const { cart, loading, error } = cardInfo;

  const getHeadingContent = () => (cart.length > 0 ? "Shopping Cart" : "Cart");

  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {loading ? (
        <Stack direction="row" spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Your cart is empty.</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to="/products">
              Go to products
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading
                fontSize="2xl"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={mode("gray.900", "white")}
              >
                Shopping Cart
                {cart.length > 0 && (
                  <span
                    style={{ fontSize: "1rem", fontWeight: "normal", marginLeft: "5px"}}
                  >{` (${cart.length} items)`}</span>
                )}
              </Heading>
              <Stack spacing="6">
                {cart.map((item) => (
                  <CartItem key={item.product} cartItem={item} />
                ))}
              </Stack>
              <Flex direction="column" align="center" flex="1">
                <CartOrderSummery />
                <HStack mt={10} fontWeight="semibold">
                  <p>or</p>
                  <Link
                    as={ReactLink}
                    to="/products"
                    color={mode("orange.500", "orange.300")}
                  >
                    Continue Shopping
                  </Link>
                </HStack>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
}

export default CartScreen;
