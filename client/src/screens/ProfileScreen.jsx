import React from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
  Flex,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  useToast,
} from "@chakra-ui/react";
import TextField from "../components/TextField";
import PasswordTextField from "../components/PasswordTextField";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfile,
  resetUpdateSuccess,
} from "../redux/actions/userActions";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo, error, loading, updateSuccess } = user;
  const location = useLocation();
  const toast = useToast();

  return userInfo ? (
    <p>profile</p>
  ) : (
    <Navigate to="/login" replace={true} state={{ from: location }} />
  );
};

export default ProfileScreen;
