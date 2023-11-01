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



import { SignupModal } from './SignUp';

import { useNavigate } from 'react-router-dom';

const LoginMenu = () => {
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

  toast({
    title: 'Logout Succesfully',
    position: 'top',
    description: "You are logged out from our website",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
}

  function HandleSubmit(e){

e.preventDefault();

let obj={
  username,password
}

if(username=="admin" && password=="admin"){

Navigate("/admin")

}


if(1){

  toast({
    position: 'top',
    title: 'Login Succesfully',
    description: "You can order the products now.",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
}else{
  toast({
    title: 'Credentials Incorrect',
    position: 'top',
    description: "Kindly check your credentials",
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}
setPassword("");
setUsername("");
onClose()
  }

  useEffect(()=>{
   
  },[])

  return (
    <VStack  align="end">
      <Popover isOpen={isOpen} 
        onOpen={onOpen}
        onClose={onClose} placement="bottom-end">
        <PopoverTrigger>
          <Button as="div" border="none" variant="link">
            <Image
              src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png"
              w={['50%', '100%', '100%']}
              m={['auto', 0]}
              alt="User Icon"
              borderRadius={"50%"}
            />
          </Button>
        </PopoverTrigger>
       {1?<PopoverContent w={"90%"} border={"none"}  m="5px" p="10px" borderRadius={"15px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="22">Welcome,<Text textTransform={"capitalize"}>Hwy</Text></PopoverHeader>
              
          <PopoverBody >
         
      
           
        
            <Button
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#2b3954"
              _hover={{ bgColor: "#e89f22" }}
              letterSpacing={"1px"}
              onClick={HandleLogout}
            >
              LOGOUT
            </Button>

          
          </PopoverBody>
        </PopoverContent>:<PopoverContent m="5px" p="10px" borderRadius={"15px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="25">Login</PopoverHeader>
          <PopoverBody>
          <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>
     <MdEmail />

    </InputLeftElement>
    <Input value={username} type='email' onChange={(e)=>setUsername(e.target.value)} placeholder="User Email"  marginBottom={2}  />
  </InputGroup>
        
  <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>

     <BiSolidLockAlt />
    </InputLeftElement>  <Input
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
              bg="#2b3954"
              _hover={{ bgColor: "#e89f22" }}
              letterSpacing={"1px"}
              onClick={HandleSubmit}
              
            >
              LOGIN
            </Button>
           
            <Box m={"10px 35%"} mb={"0"} alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Button
              color="#2b3954"
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