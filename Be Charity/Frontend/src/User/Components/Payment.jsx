import React from 'react'
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
InputRightElement
} from "@chakra-ui/react";
import { PiEyeBold,PiEyeClosedBold } from "react-icons/pi";
import { Fade,Slide } from "react-awesome-reveal";
import { Tabs, TabList, TabPanels, Tab,Heading, TabPanel,TabIndicator,Text, SimpleGrid } from '@chakra-ui/react'


import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

import { useContext } from 'react';
const Payment= () => {
  

const [show, setShow] = React.useState(false)
const handleClick = () => {setShow(!show)}
let Navigate=useNavigate()
const toast = useToast()


function HandleSubmit(e){
e.preventDefault();
toast({
    title: 'Payment Succesfully',
    description: "You have brought our package.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  })


Navigate("/")
}


  return (
<>
  <Box  fontFamily="poppins"  color={"black"} w={"70%"} m={"auto"} mt={"10px"}>
<Tabs isFitted variant='unstyled' >
  <TabList mb='1em'>
    <Tab>Credit/Debit Card</Tab>
    <Tab>UPI Payment</Tab>
    <Tab>Net Banking</Tab>
  </TabList>
     <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="#79ab2f"
      borderRadius="1px"
    />
  <TabPanels>
    <TabPanel>
  
    <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>
        <Input size='lg' type='number' variant="flushed"
           borderBottom={"2px solid black"} mt={20} mb={8}   required  placeholder='Card Number' 
         />
   <SimpleGrid columns={2} >
         <Input size='lg' type='number' variant="flushed"
           borderBottom={"2px solid black"}  mt={"20px"} w={{base:145,md:200}} mb={8} mr={"70px"}  required  placeholder='Expiry Year' 
         />   
   <Input size='lg' type='number' mt={"20px"} variant="flushed"
           borderBottom={"2px solid black"} mb={8} w={{base:125,md:200}} ml={"25px"}  required  placeholder='CVV' 
         />    
      </SimpleGrid>
      <Button h={"50px"} type='submit' w={{base:130,md:250}}
          mt={"35px"}
        
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
 
    <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

    <form action=""  onSubmit={HandleSubmit}>
    <Input mt={20} mb={5}
           variant="flushed"
           borderBottom={"2px solid black"}
           size='lg' type='text' 
        required  placeholder='UPI ID' 
           
            
          />


<InputGroup  w={{base:300,md:450}} mt={4}  variant="flushed"
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
          mt={"45px"}
        
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

<Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>

        <Input size='lg' type='text' variant="flushed"
           borderBottom={"2px solid black"} mt={20} mb={8}   required  placeholder='User Name' 
         />
        
    <InputGroup size='lg' w={{base:300,md:450}} mt={4} >
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
        variant="flushed"
           borderBottom={"2px solid black"}
   
        required
      />
      <InputRightElement width='4.5rem' onClick={handleClick}>
    
          {(show) ?<><PiEyeBold   size={20}  /></> : <>
         <> <PiEyeClosedBold   size={20}  /></>
          </>}
        
      </InputRightElement>
    </InputGroup>
    <Button h={"50px"} type='submit' w={{base:130,md:250}}
          mt={"45px"}
        
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