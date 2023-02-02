import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import CarDataSearch from "./components/CarDataSearch";

function App() {
  return (
    <Box h={"100vh"}>
      <Box
        h={"8vh"}
        bg={"gray.700"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading>Car Service&Data</Heading>
      </Box>
      <CarDataSearch />
    </Box>
  );
}

export default App;
