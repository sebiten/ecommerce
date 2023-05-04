import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Wrap,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const PaymentSuccesModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({
      description: "You have been logued out.",
      status: "success",
      isClosable: true,
    });
    navigate("/products");
  };

  return (
    <>
      <Modal size='full' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Wrap
                justify='center'
                direction='column'
                align='center'
                mt='20px'
            >
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="auto"
              >
                <AlertIcon boxSize="55px" />
                <AlertTitle pt="8px" fontSize="xl">
                  Payment Succesfull!
                </AlertTitle>
                <AlertDescription>From here, you can go to:</AlertDescription>
                <Stack
                  mt='20px'
                  minW='200px'
                >
                  <Button colorScheme="teal" variant='outline' as={ReactLink} to='/your-orders'>Your order</Button>
                  <Button colorScheme="teal" variant='outline' as={ReactLink} to='/products'>Prodcuts</Button>
                  <Button colorScheme="teal" variant='outline' onClick={logoutHandler}>Logout</Button>
                </Stack>
              </Alert>
            </Wrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentSuccesModal;
