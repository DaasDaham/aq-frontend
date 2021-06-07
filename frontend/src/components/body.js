import React, { Component, ReactNode, View, useEffect } from "react";
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
  Spinner,
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
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  startCronJob = async (request) => {
    console.log("starting cron job");
    let res = await axios.get(
      "http://localhost:5001/api/scrape?source=hysplit",
      {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      }
    );
  };

  render() {
    return (
      <SimpleGrid columns={1} p={5} gap={6}>
        <Button
          justifyContent="space-between"
          p={6}
          onClick={() => {
            this.startCronJob("hysplit");
          }}
          border="1px"
          bgGradient="linear(to-r, teal.500,green.400)"
          _hover={{ bgGradient: "linear(to-r, teal.700,green.600)" }}
        >
          Start HYSPLIT Cron Job
        </Button>
        <Button
          justifyContent="space-between"
          p={6}
          onClick={() => {
            this.startCronJob("cpcb");
          }}
          border="1px"
          bgGradient="linear(to-r, teal.500,green.400)"
          _hover={{ bgGradient: "linear(to-r, teal.700,green.600)" }}
        >
          Start CPCB Cron Job
        </Button>
        <Button
          justifyContent="space-between"
          p={6}
          border="1px"
          bgGradient="linear(to-r, teal.500,green.400)"
          _hover={{ bgGradient: "linear(to-r, teal.700,green.600)" }}
        >
          Get System Status
        </Button>
      </SimpleGrid>
    );
  }
}

export default Body;
