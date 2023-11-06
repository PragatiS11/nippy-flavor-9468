import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import {
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  VStack,
  Image,
  Box,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { BiSolidLockAlt } from "react-icons/bi";
import { PiEyeBold, PiEyeClosedBold, } from 'react-icons/pi';
import { useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie'


import { SignupModal } from './SignUp';

import { useNavigate } from 'react-router-dom';
import { LoginRequest, LogoutRequest, UserDataRequest } from '../Utilis/api';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, LogoutUser, SingleUserData } from '../Redux/Auth/action';

const LoginMenu = () => {
  const dispatch=useDispatch()
  const data=useSelector((store)=>(store.AuthReducer))
  console.log(data.userData)
  const [SignOpen, setSignOpen] = useState(false);

  function SignClose() {
    setSignOpen(!SignOpen);
  }

  const [show, setShow] = React.useState(false)

  const toast = useToast()

  const handleClick = () => setShow(!show)

  const { onOpen, onClose, isOpen } = useDisclosure()

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

let Navigate=useNavigate()

function HandleLogout(){

  
dispatch(LogoutUser)
  toast({
    title: data?.logoutMessage,
    position: 'top',
    description: "You are logged out from our website",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })

onClose()

}

  function HandleSubmit(e){

e.preventDefault();

let obj={
  email:username,password
}

if(obj.email && obj.password){
dispatch(LoginUser(obj)).then((data)=>{
  if(data=="User successfully logined."){
    toast({
      position: 'top',
      title: 'User Logined Succesfully',
      description: "You can donate us now.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
   
    setPassword("");
setUsername("");
onClose()
  }else{
    toast({
      title: data,
      position: 'top',
      description: "Kindly check your credentials",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }  })
}else{
  toast({
    title: "Enter Your Credentials",
    position: 'top',
    description: "Don't keep it empty",
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}





  }


useEffect(()=>{
if(data.isAuth){
  dispatch(SingleUserData)
}
},[])




  return (
    <VStack  align="end">
      <Popover isOpen={isOpen} 
        onOpen={onOpen}
        onClose={onClose} placement="bottom-end">
        <PopoverTrigger>
          <Button as="div" border="none" variant="link">
            <Image
              src={data.userData.image || "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png"}
              w={['50%', '100%', '100%']}
              m={['auto', 'auto']}
              alt="User Icon"
              borderRadius={"50%"}
            />
          </Button>
        </PopoverTrigger>
       {data?.isAuth?<PopoverContent w={"100%"}  border={"none"}  m="5px" p="10px" borderRadius={"0px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#79ab2f" 
              fontSize="22">Welcome, <br /><Text textTransform={"capitalize"}>{data?.userData?.name}</Text></PopoverHeader>
              
          <PopoverBody >
         
          <Button
              colorScheme="white"
              fontSize="16"
              w="100%" textAlign={"center"}
              m={"10px auto"}
              fontWeight="400"
              borderRadius={0}
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={()=>Navigate("/user-profile")}
            >
              User Profile
            </Button>
           
        
            <Button
               borderRadius={0}
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={HandleLogout}
            >
              LOGOUT
            </Button>

          
          </PopoverBody>
        </PopoverContent>:<PopoverContent  _focus={{ boxShadow: 'none' }} color={"black"} w={"90%"} m="10px" p="10px" border={"1px solid #ede6dd"} borderRadius={"0px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  fontFamily={"DM Serif Display"} letterSpacing={"1px"}
              fontSize="25">Login</PopoverHeader>
          <PopoverBody>
          <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>
     <MdEmail />

    </InputLeftElement>
    <Input value={username}  variant="flushed"
           borderBottom={"1px solid black"} type='email' onChange={(e)=>setUsername(e.target.value)} placeholder="User Email"  marginBottom={2}  />
  </InputGroup>
        
  <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>

     <BiSolidLockAlt />
    </InputLeftElement>  <Input  variant="flushed"
           borderBottom={"1px solid black"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type={show ? 'text' : 'password'}
              placeholder="Password"

              marginBottom={2}
            />
            <InputRightElement>
          {!show ? <PiEyeClosedBold alignItems={"center"} textAlign={"center"} fontSize={"18px"} justifyContent={"center"}  onClick={handleClick} /> : <PiEyeBold alignItems={"center"} textAlign={"center"} fontSize={"18px"} justifyContent={"center"} onClick={handleClick} />}
     
            </InputRightElement>
  </InputGroup>

            <Button
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={HandleSubmit}
              borderRadius={"0"}
              m={"10px auto"}
              
            >
              LOGIN
            </Button>
           
            <Box m={"5px auto"} textAlign={"center"} mb={"0"} alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Button 
           color={"black"}
              fontSize="sm"
              variant={"link"}
             onClick={()=>Navigate("/user-profile/reset-password")}
              textDecoration="none"
            >
              Forget Password ?
            </Button>
            <br />
            <Button
           color={"black"}
              fontSize="sm"
              variant={"link"}
             onClick={()=>{
              setSignOpen(!SignOpen)
             }}
              textDecoration="none"
            >
              New User ?
            </Button>
            {SignOpen && <SignupModal 
            onOpens={SignOpen} 
            LetClose={SignClose} />}
            </Box>
          
          </PopoverBody>
        </PopoverContent>}
      </Popover>
    </VStack>
  );
};

export default LoginMenu;