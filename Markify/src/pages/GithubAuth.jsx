import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Input,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";

const GithubAuth = () => {
  const [accessToken, setAccessToken] = useState("");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get("code");


  console.log("codeParam ==>", codeParam);

  async function getAccessToken() {
    try {
      const response = await fetch(
        `https://mrk.elenta.co/api/generate-access-token/?code=${codeParam}`,
        // `http://38.242.151.158:8000/api/generate-access-token/?code=${codeParam}`,
        {
          method: "POST",
        }
      );

      console.log("github Response ", response);

      if (response.ok) {
        const data = await response.json();
        console.log("Access Response", data?.token);
        if (data.token) {
          localStorage.setItem("access_token", data?.token);
          setAccessToken(data?.token);
        } else {
          console.error("Access token not found in the response data:", data);
        }
      } else {
        console.error(
          "Failed to fetch access token:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.log("github Errror");
      console.error("Error while fetching access token:", error);
    }
  }
  useEffect(() => {
    getAccessToken();
  });
  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Card width="300px">
          <CardBody>
            <Text fontSize="xl" fontWeight="bold">
              Markify – Sign in with GitHub
            </Text>
            <Text>
              Your encoded GitHub auth token is ready. Please copy it from here,
              and paste it back into the code editor window.
            </Text>
            <Input
              value={accessToken}
              placeholder="Enter your GitHub auth token"
              readOnly
            />
          </CardBody>
        </Card>
      </VStack>
    </Center>
  );
};

export default GithubAuth;
