import React from "react";
import {
  CloseButton,
  Flex,
  Select,
  useColorMode as mode,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { addCartItem, removeCartItem } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id } = cartItem;
  const dispatch = useDispatch();

  return (
    <Flex
      justify="space-between"
      align="center"
      direction={{ base: "column", md: "row" }}
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          src={image}
          alt={name}
          width={{ base: "100%", md: "200px" }}
          height={{ base: "100%", md: "200px" }}
          objectFit="cover"
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontSize="medium" fontWeight="bold">
              {name}
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        w="full"
        mt={{ base: "4", md: "0" }}
        align={{ base: "center", md: "baseline" }}
        justify={{ base: "space-between", md: "flex" }}
      >
        <Select
          maxW="100px"
          focusBorderColor={mode("orange.500", "orange.300")}
          value={qty}
          onChange={(e) => dispatch(addCartItem(id, e.target.value))}
        >
          {[...Array(stock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Select>
        <Text fontSize="lg" fontWeight="bold">
          ${price}
        </Text>
        <CloseButton
          onClick={() => dispatch(removeCartItem(id))}
          colorScheme="red"
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;
