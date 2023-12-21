import React from "react";
import { useEffect } from "react";
import { Text, Button } from "@chakra-ui/react";

const TestApi = () => {
  async function fetchData() {
    try {
      const response = await fetch(
        `http://192.168.100.138:8002/visual/graphviz/`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const rawData = await response.text(); // Extract raw data
        console.log("Raw Response Data ==> ", rawData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <Button onClick={() => fetchData()}>
        <Text>GET APi</Text>
      </Button>
    </div>
  );
};

export default TestApi;
