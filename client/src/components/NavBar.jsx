import {
  // eslint-disable-line
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom"; // eslint-disable-line
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"; // eslint-disable-line
import { GiTechnoHeart } from "react-icons/gi"; // eslint-disable-line

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // eslint-disable-line
  const { colorMode, toggleColorMode } = useColorMode(); // eslint-disable-line
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link as={ReactLink} to="/">
                <Flex alignItems="center">
                  <Icon as={GiTechnoHeart} w={8} h={8} color="orange.400" />
                  <Text
                    fontFamily={"sans-serif"}
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Tech Lines
                  </Text>
                </Flex>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Box></Box>
    </>
  );
};

export default NavBar;
