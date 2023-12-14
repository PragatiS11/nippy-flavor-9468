import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react';
import { RegisterRequest } from '../Utilis/api';





export const SignupModal = ({onOpens,LetClose}) => {
    const toast = useToast()


  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    city:'',
    image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png",
    isAdmin:false,
    isVolunteers:false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
   
  RegisterRequest(formData).then(res=>{
    
    toast({
      title: res.data.msg,
      position: 'top',
      description: "You Can Now Login To Our Website.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    
 
  }).catch(err => {
    if (err.response && err.response.status === 400) {
      // Error due to existing user
      toast({
        title: err.response.data.msg,
        position: 'top',
        description: 'Please Use a New Email',
        status: 'error', // Change status to 'error' for failure
        duration: 3000,
        isClosable: true,
      });
    } else {
      // Other errors
      toast({
        title: 'Error',
        position: 'top',
        description: 'An error occurred. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  });
   
  setFormData({
    name:'',
    email:'',
    password:'',
    city:'',
    image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png",
    isAdmin:false,
    isVolunteers:false
  })
  LetClose();
  };

  return (
    <Modal isOpen={onOpens} onClose={LetClose} size="sm"  isCentered >
      <ModalOverlay />
      <ModalContent fontFamily={"poppins"} color={"black"} borderRadius={"0px"}>
     
        <ModalHeader border="none" fontWeight={"bold"}  
              fontSize="28" textAlign={"center"}  fontFamily={"DM Serif Display"} letterSpacing={"1px"} >Create an account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
           variant="flushed"
            name="name"
            placeholder="Name"
            borderBottom={"1px solid black"}
            value={formData.name}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          
          <Input
           variant="flushed"
            name="email"
            type="email"
            borderBottom={"1px solid black"}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          <Input
           variant="flushed"
           borderBottom={"1px solid black"}
           name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          <Input
           variant="flushed"
           borderBottom={"1px solid black"}
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
        </ModalBody>

        <ModalFooter>

      
            <Button
           
              fontSize="16"
              w="90%"
     
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={handleSignup}
            m={"10px auto"}
        
       
            borderRadius={"0"}
            fontWeight={"300"}
          
            color={"white"}
            colorScheme="black"
          >
            SIGN UP
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};