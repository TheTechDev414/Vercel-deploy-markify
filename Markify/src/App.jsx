import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./navigation/Navigation";
import GithubAuth from "./pages/GithubAuth";
import OneDriveAuth from "./pages/OneDriveAuth";
import TestApi from "./TestAPi/TestApi";

function App() {
  return (
    <ChakraProvider>
      <Navigation/>
    </ChakraProvider>
  );
}
export default App;