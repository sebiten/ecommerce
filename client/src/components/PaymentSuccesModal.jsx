import React from 'react'
import {
  Modal,
  ModalOveray,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Wrap,
  useToast,
  Stack
} from '@chakra-ui/react'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'



const PaymentSuccesModal = ({isOpen, onClose}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logued out.', status: 'success', isClosable: true});
    navigate('/products')
  }



  return (
   <>
    
   
   </>
  )
}

export default PaymentSuccesModal