
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
import Cookies from 'js-cookie';
import { ResetPasswordRequest } from '../Utilis/api';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const dispatch = useDispatch();
const toast=useToast();
const Navigate=useNavigate()
const [show,setShow]=useState(false)
  const [password,setPassword] = React.useState("");
  const [cp,setCp] = React.useState("");
 let     email=Cookies.get("forget-password-email") || false;
function HandleSubmit(e){
e.preventDefault();
if(email){
    if(password.length==0 || cp.length==0){
        toast({
            title: "Your credentials should not be empty",
            position: 'top',
            description: "Enter your new password.",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
    }else if(password!==cp){
        toast({
            title: "Check your credentials",
            position: 'top',
            description: "Your credentials are not matching !",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
    }else{
        let obj={
            email,password
        }
        // console.log(obj)
        ResetPasswordRequest(obj).then(res=>{
            toast({
                title: res.data.msg,
                position: 'top',
                description: "You can now login.",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              Navigate("/")
        })
    }

 
}else{
    toast({
        title: "Your Link Has Been Expired!",
        position: 'top',
        description: "Generate another link",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      Navigate("/")
}

}

const handleClick = () => {
    setShow(!show);
  };

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
                <InputGroup mt={10} variant="flushed" borderBottom="1px solid black" size="lg" type="text"  required placeholder="UPI ID">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)}
              />
                    <InputRightElement width="4.5rem"  onClick={handleClick} >
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup mt={7} variant="flushed" borderBottom="1px solid black" size="lg"  type="text" required placeholder="UPI ID">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Confirm Password" required value={cp} onChange={(e)=>setCp(e.target.value)}
                 
                />
                    <InputRightElement width="4.5rem"  onClick={handleClick}>
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
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

export default ResetPassword