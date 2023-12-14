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
  Text,
  Select,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PatchUserRequest } from '../../User/Utilis/api';





export const AdminEditMenu = ({onOpens,LetClose}) => {
    const [SignOpen, setSignOpen] = useState(false);

    function SignClose() {
      setSignOpen(!SignOpen);
    }
    const toast = useToast()
    const data = useSelector((store) => {
        return store.userReducer.singleUser;
      });
const N=useNavigate()
  const [formData, setFormData] = useState(data);
const [file,setFile]=useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleUpload = () => {


    PatchUserRequest(data._id,formData).then(res=>{
        toast({
            title: res.data.msg,
            position: 'top',
            description: "You are see the changes.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        N("/");
    })
  
  }

  const handleSignup = () => {
   
//   RegisterRequest(formData)
//   .then(res=>{
    
//     toast({
//       title: res.data.msg,
//       position: 'top',
//       description: "You can login to our website",
//       status: 'success',
//       duration: 5000,
//       isClosable: true,
//     });
    
 
//   })
   
//   setFormData({
//     name:'',
//     email:'',
//     password:'',
//     city:'',
//     image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png",
//     isAdmin:false,
//     isVolunteers:false
//   })
  LetClose();
  };

  return (
    <Modal isOpen={onOpens} onClose={LetClose} size="sm"  isCentered >
      <ModalOverlay />
      <ModalContent fontFamily={"poppins"} color={"black"} borderRadius={"0px"}>
     
        <ModalHeader border="none" fontWeight={"bold"}  
              fontSize="28" textAlign={"center"}  fontFamily={"DM Serif Display"} letterSpacing={"1px"} >Edit User Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Text>Name :</Text>
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
               <Text>Email :</Text>
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
               <Text>City :</Text>
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
                
          
          <Text>Volunteer :</Text>
          <Select  mt={"10px"}   variant="flushed"    borderBottom={"1px solid black"} name='isVolunteers'  value={formData.isVolunteers}
            onChange={handleChange}>
            <option value="true">YES</option>
            <option value="false">NO</option>
          </Select>
          <Text>Admin :</Text>
          <Select  mt={"10px"}   variant="flushed"    borderBottom={"1px solid black"} name='isAdmin'  value={formData.isAdmin}
            onChange={handleChange}>
            <option value="true">YES</option>
            <option value="false">NO</option>
          </Select>
             
        </ModalBody>

        <ModalFooter>

      
            <Button
           
              fontSize="16"
              w="90%"
     
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
            //   onClick={handleSignup}
            m={"10px auto"}
        
       onClick={handleUpload}
            borderRadius={"0"}
            fontWeight={"300"}
          
            color={"white"}
            colorScheme="black"
          >
            SUBMIT
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};