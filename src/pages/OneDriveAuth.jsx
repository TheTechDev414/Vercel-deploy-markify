import React, { useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Input,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import { PublicClientApplication } from "@azure/msal-browser";

const OneDriveAuth = () => {
  const [accessToken, setAccessToken] = useState("");

  const msalConfig = {
    auth: {
      clientId: "a1b22480-448b-4f56-a6c5-c395366aaa67",
      authority:
        "https://login.microsoftonline.com/3088b9f7-c167-4d13-95f3-a490bac93af8",
      redirectUri: "https://markify-5b6a5.web.app/onedrive_auth",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    },
    system: {
      asyncPopups: true,
    },
  };
  const msalClient = new PublicClientApplication(msalConfig);

  const handleOneDriveUserData = async () => {
    await msalClient.initialize();

    try {
      // Request OneDrive-specific scopes
      const request = {
        scopes: ["files.read.all"],
      };

      // Sign in using MSAL
      const response = await msalClient.loginPopup();

      console.log("response ==>", response);
      if (response && response.account) {
        console.log("response ==>", response.account);
        setAccessToken(response.accessToken);

        // Display the user's access token in an alert
        // alert("Access Token: " + response.accessToken);

        localStorage.setItem("oneDrive_auth", response.account);
        // The user is authenticated, proceed to OneDrive access
        // Implement your OneDrive logic here
      } else {
        console.error("Authentication failed.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };
  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Card width="300px">
          <CardBody>
            <Text fontSize="xl" fontWeight="bold">
              Markify – Sign in with OneDrive
            </Text>
            <Text>
              Your encoded OneDrive auth token is ready. Please copy it from
              here, and paste it back into the code editor window.
            </Text>
            {accessToken ? (
              <Input
                value={accessToken}
                placeholder="Enter your OneDrive auth token"
                readOnly
              />
            ) : (
              <Button onClick={handleOneDriveUserData}>OneDrive Login</Button>
            )}
          </CardBody>
        </Card>
      </VStack>
    </Center>
  );
};

export default OneDriveAuth;
