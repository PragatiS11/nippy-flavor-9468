import { AspectRatio, Box, Button, Flex, Icon, Image, Text, Tooltip, VStack, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Import the RootState type

import axios from "axios";

import {  useNavigate } from "react-router-dom";
import { DeleteDonationRequest, DonationRequest } from "../../User/Utilis/api";

// import { ProductURL } from "../../UserPage/Utilis/api";
import { AiOutlineStar } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaDonate } from 'react-icons/fa';
import { BiSelectMultiple, BiSolidDonateHeart } from 'react-icons/bi';
import { MdMergeType } from 'react-icons/md';

import { BsFillBox2HeartFill } from "react-icons/bs";
const AdminProductCard=({data,deleteProduct,handleEdit})=>{


  let Navigate = useNavigate();


  
 

  

  return (
    <Box
      // bg={"#f5f5f5"}
      // borderRadius={"0px"}
      // m={"auto"}
      // p={"10px"}
      // textAlign={"center"}
      //   h={"650px"}
      cursor="pointer" w={"100%"} size="xl" mt={"15px"}
    >
      <VStack
        borderWidth="1px"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{
          shadow: 'lg',
          textDecoration: 'none'
        }}
        overflow="hidden"
        align="start"
        spacing={0}>
        {/* <Box h={"320px"}> */}
        {/* <Image
        m={"40px auto"}
        w={"100%"}
      
        // boxSize="320px" // Set a fixed size for the image (adjust as needed)
        // objectFit={"cover"}
        src={data?.image}
      />
        </Box> */}
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={1.85 / 1}
            w="100%"
            borderBottomWidth="1px"
            // borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
             <Image
      src={data?.image}
      objectFit="cover"
      alt="cover image"
    //   width={width}
    //   height={height}
    //   size={size}
    //   layout={layout}
    //   rounded={rounded}
    />
         
          </AspectRatio>
        </Box>
        <VStack   py={2} px={[2, 4]} spacing={1} align="start" w="100%">
          <Flex    justifyContent="space-between" >
         
            <Box>
            <Text   fontFamily={"DM Serif Display"}
                  fontSize="25"
                  m={"10px 0"}
               noOfLines={1}
                  fontWeight="600"
                 
                >
                  {data?.title}
                </Text>
                <Flex  mt={"15px"} mb={"10px"}  alignItems={"center"} justifyContent={"space-between"}> 
                <Tooltip label={"Goal Amount"}>
                <Box>
                <Icon as={FaDonate} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="2" fontSize="sm">
                ${data?.goal}
              </Box>
            
                </Box>  
                </Tooltip>
                <Tooltip label={"Category"}>
                <Box>
                <Icon as={BsFillBox2HeartFill} boxSize="0.9em" mt="1px" />
             
              <Box as="span" ml="2" fontSize="sm">
              {data?.category}
              </Box>
                </Box>
                </Tooltip>
                <Tooltip label={"Fund Raised"}>
                <Box>
                <Icon as={BiSolidDonateHeart} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="2" fontSize="sm">
              ${data?.current_funds} Raised
              </Box>
                </Box>
                </Tooltip>
            
           
            
            </Flex>
            </Box>
             
           
        
         
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Box>
                <Text h={"100px"} >
                {data?.description}
                </Text>
            
            </Box>
          </Flex>
          {/* <Button
          mt={"10px"}
          w={"100%"}
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
              //  onClick={()=>Navigate(`/donate-us/${id}`)}
                _hover={{ bgColor: "#f7b70d" }}
                color={"white"}
                colorScheme="black"
              >
                MORE DETAILS
              </Button> */}
              <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
              <Button
                fontSize="16"
                w="45%"
       
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
          w="45%"
 
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
        </Flex>
        </VStack>
      {/* <Text noOfLines={1}>{data?.title}</Text>
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
      </Box> */}
      </VStack>
    </Box>
  );
};

export default AdminProductCard;