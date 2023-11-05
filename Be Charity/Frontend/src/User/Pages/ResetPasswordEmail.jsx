
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Image, Input, InputRightElement, Select, Stack, useToast } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import { Box, Button, Flex, Heading, Link, Text,  InputGroup, InputLeftElement  } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import DonationSkeleton from './DonationSkeleton';
import OfflineData from '../Components/SingleCard';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../Redux/Donation/action';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { ForgetPassword } from '../Utilis/api';
const ResetPasswordEmail= () => {
    const toast=useToast()
  const dispatch = useDispatch();
  
  const [email,setEmai] = React.useState("");
 
function HandleSubmit(e){
    e.preventDefault();
    ForgetPassword({email}).then(res=>{
console.log(res.data)
if(res.data.msg=="User Account is not exist."){
    toast({
        title: "User Account is not exist.",
        position: 'top',
        description: "Kindly check your email again",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
}else{
    toast({
        title: res.data.msg,
        position: 'top',
        description: "Reset password with the help of that",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
}
    });
}
 

  return (
    <>
   <Box fontFamily={"Poppins"}  color={"black"}      style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
          height: "720px",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}>
      <Navbar />
      <Box  m={"auto"} mt={"120px"} >
        <Box>
        <Text fontWeight={'500'} fontSize={["30","45"]} lineHeight={"60px"} textAlign={"center"}  fontFamily={'DM Serif Display'}>Reset Your Password</Text>
        </Box>
        <Stack direction="column" m="auto" textAlign="center" placeItems="center">
                <form onSubmit={HandleSubmit}>
                
                <InputGroup  w={"350px"}     mt={10}>
    <InputLeftElement pointerEvents='none'   alignItems={"center"} textAlign={"center"} fontSize={"28px"} justifyContent={"center"}>
     <MdEmail />

    </InputLeftElement>
    <Input  
    size={"xl"}
                    type="email"
                    variant="flushed"
                    borderBottom="2px solid black"
              value={email}
              onChange={e=> setEmai(e.target.value)}
                    required
                    placeholder="Enter Registered Email"  />
  </InputGroup>
                  <Button
                    h="50px"
                    type="submit"
                    w={{ base: 130, md: 250 }}
                    mt={12}
                    letterSpacing="2px"
                    borderRadius="0"
                    fontWeight="300"
                    bg="#79ab2f"
                    _hover={{ bgColor: "#f7b70d" }}
                    color="white"
                    colorScheme="black"
                  >
                    SUBMIT
                  </Button>
                </form>
              </Stack>

      </Box>

     



      </Box>
    </>
  )
}

export default ResetPasswordEmail