import React from 'react'
import {
    Center,
    chakra,
    Box,
    Flex,
    Link,
    Texxt,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    Text,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Spacer,
    Heading,
    Input,
  Stack,
  Image,
  SimpleGrid
  } from "@chakra-ui/react";
  import { LiaDonateSolid } from "react-icons/lu";
  import { BiDonateHeart, BiSelectMultiple, BiTimeFive ,BiUserPin} from "react-icons/bi";
  import { IoLocationOutline} from "react-icons/io5";
  import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { FaDonate } from 'react-icons/fa';

const DonationCard = ({el}) => {
  let Navigate=useNavigate()

  const toast = useToast()
  function HandleClick(){
// if(!status){
// Navigate("/login")
// }else if(!isActive){
// Navigate("/pricing")
// }else{
//   addWorkout({...el,date:date})
//   toast({
//     title: 'Workout Session Successfully Booked!',
//     status: 'success',
//     duration: 2000,
//     isClosable: true,
//   })

// }
  }

  return (
    <>
    <Flex
 
color={"black"}
  pt={10}
  w="full"
  alignItems="center"
  justifyContent="center"

>
  <Box
 
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
  
  >
    <Box
      w={{
        lg: "50%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        // rounded={{
        //   lg: "lg",
        // }}

        bgSize="cover"
        bgPos={"center"}
        
        style={{
          backgroundImage:
            `url(${el.image})`,
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}

  
    
  color={"black"}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2 fontFamily={'DM Serif Display'} letterSpacing={"0.5px"}
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
      
      
        fontWeight="bold"
      >
        {el.title}{" "}
        <chakra.span
      
          _dark={{
            color: "brand.400",
          }}
        >
        
        </chakra.span>
      </chakra.h2>
      <SimpleGrid columns={3} mt={4}>
        <Flex >
        
            <BiSelectMultiple  size={18} mt={0}/>
   
      
            <Text ml={1.5}>{el.category}</Text>
         
       
        </Flex>
      
        <Flex >
           
           <FaDonate size={18}  mt={0}/>
   
          
           <Text ml={1.5}  >{el.current_funds} Raised</Text>
          
       </Flex>
       <Flex >
           
           <BiDonateHeart size={18} mt={0}/>
   
        
           <Text ml={1.5} >{el.donators.length} Donaters</Text>
          
      
       </Flex>
      </SimpleGrid>
     
      <chakra.h4
        mt={4}
     
 
      >
    {el.description}
      </chakra.h4>

      <Box mt={8}>
        <Button
          bg="#097fd9"

          px={5}
          py={3}
          colorScheme='#097fd9'
          fontWeight="semibold"
          rounded="lg"
variant={"solid"}
onClick={HandleClick}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  </Box>
</Flex>
    </>
  )
}

export default DonationCard