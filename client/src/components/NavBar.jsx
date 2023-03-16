import {
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
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";
import { color } from "framer-motion";

const links = [
  { linkname: "Products", path: "/products" },
  { linkname: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    fontWeight="normal"
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div></div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack>
            <Link as={ReactLink} to="/">
              <Flex alignItems="center"
              gap={2}
              >
                <Icon as={GiTechnoHeart} w={8} h={8} color="orange.400" />
                <Text fontSize="xl" fontWeight="bold">
                  Tech Lines
                </Text>
              </Flex>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <NavLink key={link.linkname} path={link.path}>
                  {link.linkname}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <NavLink>
              <Icon
                as={colorMode === "light" ? MoonIcon : SunIcon}
                alignSelf="center"
                justifySelf="center"
                onClick={toggleColorMode}
              />
            </NavLink>
            <Button
              p={2}
              to="/login"
           
              as={ReactLink}
              fontSize="sm"
              fontWeight={400}
              variant="link"
            >
              Sign in
            </Button>
            <Button
              to="/registration"
              display={{ base: "none", md: "inline-flex" }}
              as={ReactLink}
              fontSize="sm"
              fontWeight={400}
              variant="link"
              _hover={{
                bg: "orange.400",
              }}
              bg="orange.500"
              color="white"
              p={2}
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.linkname} path={link.path}>
                  {link.linkname}
                </NavLink>
              ))}
              <NavLink
                to="/registration"
                key={"Sign up"}
              >Sign up</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
