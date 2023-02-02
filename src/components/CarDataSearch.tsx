import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { api } from "../utils/api";

function CarDataSearch() {
  // const { mutateAsync: mutateCar } = api.car.get.useMutation();

  // const handleSearch = async () => {
  //   await mutateCar(
  //     {
  //       license_plate: "7115056", // get from state
  //     },
  //     {
  //       onSuccess(data) {
  //         console.log(data);
  //         // const car = data;
  //       },
  //     }
  //   );
  // };
  return (
    <Box
      boxSize={"sm"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"red.600"}
    >
      <Input w={"30%"} bg={"yellow"} color={"black"}></Input>
      {/* <Button
        onClick={() => {
          handleSearch;
        }}
      ></Button> */}
    </Box>
  );
}

export default CarDataSearch;
