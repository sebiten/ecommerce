import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState("14px");
  return (
    <Flex>
      <HStack spacing="2px">
        <StarIcon size={iconSize} color="orange.500" />
        <StarIcon
          color={rating >= 2 ? "orange.500" : "gray.500"}
          size={iconSize}
        />
        <StarIcon
          color={rating >= 3 ? "orange.500" : "gray.500"}
          size={iconSize}
        />
        <StarIcon
          color={rating >= 4 ? "orange.500" : "gray.500"}
          size={iconSize}
        />
        <StarIcon
          color={rating >= 5 ? "orange.500" : "gray.500"}
          size={iconSize}
        />
      </HStack>
      <Text
        fontSize="md"
        color="gray.500"
        ml="2"
        fontWeight={500}
        lineHeight="shorter"
      >
        {`${numReviews} ${numReviews === 1 ? "review" : "reviews"}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      p={2}
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="250px"
      h="450px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position={"relative"}
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.300"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        />
      )}
      <Image src={product.image} alt={product.name} rounded="lg" />
      <Box flex={1} maxH="5" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge borderRadius="full" px="2" colorScheme="red" fontSize="0.8em">
            Sold out
          </Badge>
        )}
        {product.isNew && (
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="green"
            fontSize="0.8em"
          >
            New
          </Badge>
        )}
      </Box>
      <Flex justifyContent="space-between" mt="1" alignContent="center">
        <Link
          as={ReactLink}
          to={`/products/${product._id}`}
          p="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-space-between" alignContent="center" py="2">
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Flex>
      <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "gray.200")}>
          <Box
            as="span"
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize="lg"
          >
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip label="Add to cart" aria-label="Add to cart">
          <Button
            colorScheme="orange"
            display="flex"
            disabled={product.stock <= 0}
            variant="ghost"
            size="sm"
            rightIcon={<FiShoppingCart />}
          >
            Add
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
