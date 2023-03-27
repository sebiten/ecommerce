import {Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowRigth } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link as ReactLink, useNavigate } from 'react-router-dom'



const CartOrderSummer = () => {
  const [buttonLoading, setButtonLoading] = useState()
  const standardShipping = Number(5.99).toFixed(2);
  const cartItems = useSelector((state) => state.cart.cart);
  const {subtotal} = cartItems;
  const navigate = useNavigate()

  return (
    <div>CartOrderSummer</div>
  )
}

export default CartOrderSummer