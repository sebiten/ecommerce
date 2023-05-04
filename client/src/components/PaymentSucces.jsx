import { Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
function PagoExitoso() {
  const logoutHandler = () => {
    const navigate = useNavigate();
    dispatch(logout());
    toast({
      description: "You have been logued out.",
      status: "success",
      isClosable: true,
    });
    navigate("/products");
  };
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box bg="green.200" p={4} borderRadius="md" mb={4}>
        <Text color="green.900" fontWeight="bold">
          ¡Pago realizado correctamente!
        </Text>
      </Box>
      <Flex>
        <Button
          colorScheme="teal"
          variant="outline"
          as={ReactLink}
          to="/products"
        >
          Products
        </Button>
      </Flex>
    </Flex>
  );
}

export default PagoExitoso;
