import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Import the RootState type

import axios from "axios";

import {  useNavigate } from "react-router-dom";
import { DeleteDonationRequest, DonationRequest } from "../../User/Utilis/api";
// import { ProductURL } from "../../UserPage/Utilis/api";

const AdminProductCard=({data,deleteProduct,handleEdit})=>{


  let Navigate = useNavigate();


  
 

  

  return (
    <Box
      bg={"#f5f5f5"}
      borderRadius={"0px"}
      m={"auto"}
      p={"10px"}
      textAlign={"center"}
      //   h={"650px"}
    >
        <Box h={"320px"}>
        <Image
        m={"40px auto"}
        w={"100%"}
      
        // boxSize="320px" // Set a fixed size for the image (adjust as needed)
        // objectFit={"cover"}
        src={data?.image}
      />
        </Box>
   
      <Text noOfLines={1}>{data?.title}</Text>
      <Text fontWeight={"500"}>GOAL : ${data?.goal}</Text>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Button
                fontSize="16"
                w="40%"
       
                bg="#df8c09"
                _hover={{ bgColor: "#79ab2f" }}
                letterSpacing={"1px"}
              //   onClick={handleSignup}
              m={"10px auto"}
          
      
              borderRadius={"0"}
              fontWeight={"300"}
            
              color={"white"}
              colorScheme="black"
          onClick={() => {
            deleteProduct(data?._id);
          }}
        
        >
          DELETE
        </Button>
        <Button
          fontSize="16"
          w="40%"
 
          bg="#79ab2f"
          _hover={{ bgColor: "#df8c09" }}
          letterSpacing={"1px"}
        //   onClick={handleSignup}
        m={"10px auto"}
    

        borderRadius={"0"}
        fontWeight={"300"}
      
        color={"white"}
        colorScheme="black"
          onClick={() => {
            handleEdit(data?._id);
          }}
        
        >
          EDIT
        </Button>
      </Box>
    </Box>
  );
};

export default AdminProductCard;