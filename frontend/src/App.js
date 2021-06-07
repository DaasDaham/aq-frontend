import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  Image,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import Body from "./components/body";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Body></Body>
    </ThemeProvider>
  );
}

export default App;
