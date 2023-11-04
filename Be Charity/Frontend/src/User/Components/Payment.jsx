import React, { useState } from 'react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Spacer,
  Input,
Stack,
Image,
InputGroup,
InputRightElement,
InputLeftElement
} from "@chakra-ui/react";
import { PiEyeBold,PiEyeClosedBold } from "react-icons/pi";
import { Fade,Slide } from "react-awesome-reveal";
import { Tabs, TabList, TabPanels, Tab,Heading, TabPanel,TabIndicator,Text, SimpleGrid } from '@chakra-ui/react'


import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

import { useContext } from 'react';
const Payment= () => {
  

const [show, setShow] = React.useState(false)
const [amount,setAmount]=useState("");
let Method={
  cardNumber:"",
  cvv:"",
  expiryDate:"",
  UPIid:"",
  UPIpassword:"",
  NBid:"",
NBpassword:""
};
const [meth,setMeth]=useState(Method);
const handleClick = () => {setShow(!show)}
let Navigate=useNavigate()
const toast = useToast()


function HandleSubmit(e){
e.preventDefault();
console.log(method);
// toast({
//     title: 'Payment Succesfully',
//     description: "You have brought our package.",
//     status: 'success',
//     duration: 3000,
//     isClosable: true,
//   })


// Navigate("/")
}


  return (
<>

<InputGroup m={"auto"} mt={5} mb={8} w={"80%"} border={"1px solid black"} borderRadius={"none"}>
    <InputLeftElement
      pointerEvents='none'
      color='black'
      fontSize='1.2em'
      children='$'
    />
      <Input  type='number' onChange={(e)=>setAmount(+e.target.value)} value={amount} borderRadius={"none"} fontSize={"20"}  textAlign={"right"} fontWeight={"600"}
            required  placeholder='Enter Donation Amount' 
         /> 
<InputRightElement
      pointerEvents='none'
      color='black'
   fontSize="18"
      children='.00'
    />
  </InputGroup>
  <Box  fontFamily="poppins"  color={"black"} w={"100%"} m={"auto"} mt={"10px"}>
<Tabs isFitted variant='unstyled' >
  <TabList mb='1em'>
    <Tab>Card Payment</Tab>
    <Tab>UPI Payment</Tab>
    <Tab>Net Banking</Tab>
  </TabList>
     <TabIndicator
      mt="-1.5px"
      height="2.5px"
      bg="#79ab2f"
      borderRadius="1px"
    />
  <TabPanels>
    <TabPanel>
  
    <Stack direction={"column"} w={350} m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>
        <Input size='lg' type='number' variant="flushed"
           borderBottom={"2px solid black"} mt={5}    required  placeholder='Card Number' 
         />
   <SimpleGrid columns={2} >
         <Input size='lg' type='number' variant="flushed"
           borderBottom={"2px solid black"}  mt={7} w={"95%"}  required  placeholder='Expiry Year' 
         />   
   <Input size='lg' type='number'  variant="flushed"
           borderBottom={"2px solid black"} mb={8} w={"95%"}  mt={7} ml={5}  required  placeholder='CVV' 
         />    
      </SimpleGrid>
      <Button h={"50px"} type='submit' w={{base:130,md:250}}
          mt={5}
        
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
               
                _hover={{ bgColor: "#f7b70d" }}
                color={"white"}
                colorScheme="black"
              >
                SUBMIT
              </Button>
        </form>
  </Stack>
 
    </TabPanel>
  
    <TabPanel>
 
    <Stack direction={"column"}  m={"auto"}  textAlign={"center"} placeItems={"center"}>

    <form action=""  onSubmit={HandleSubmit}>
    <Input mt={5} 
           variant="flushed"
           borderBottom={"2px solid black"}
           size='lg' type='text' 
        required  placeholder='UPI ID' 
           
            
          />


<InputGroup   mt={7}  variant="flushed"
           borderBottom={"1px solid black"}
           size='lg' type='text' 
        required  placeholder='UPI ID' >
<Input
pr='4.5rem'
type={show ? 'text' : 'password'}
placeholder='Password'


required
/>
<InputRightElement width='4.5rem' onClick={handleClick}>

  {(show) ?<><PiEyeBold   size={20}  /></> : <>
 <> <PiEyeClosedBold   size={20}  /></>
  </>}

</InputRightElement>
</InputGroup>
<Button h={"50px"} type='submit' w={{base:130,md:250}}
          mt={12}
        
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
               
                _hover={{ bgColor: "#f7b70d" }}
                color={"white"}
                colorScheme="black"
              >
                SUBMIT
              </Button>
</form>
</Stack>

</TabPanel>
<TabPanel>

<Stack direction={"column"}  m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>

        <Input size='lg' type='text' variant="flushed"
           borderBottom={"2px solid black"} mt={5}    required  placeholder='User Name' 
         />
        
    <InputGroup size='lg'  mt={7}   variant="flushed"
           borderBottom={"1px solid black"}>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
      
   
        required
      />
      <InputRightElement width='4.5rem' onClick={handleClick}>
    
          {(show) ?<><PiEyeBold   size={20}  /></> : <>
         <> <PiEyeClosedBold   size={20}  /></>
          </>}
        
      </InputRightElement>
    </InputGroup>
    <Button h={"50px"} type='submit' w={{base:130,md:250}}
          mt={12}
        
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
               
                _hover={{ bgColor: "#f7b70d" }}
                color={"white"}
                colorScheme="black"
              >
                SUBMIT
              </Button>
        </form>
  </Stack>


</TabPanel>
  </TabPanels>

</Tabs>
</Box>
</>
  )
}

export default Payment