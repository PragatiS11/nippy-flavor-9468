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
  import { BiTimeFive ,BiUserPin} from "react-icons/bi";
  import { IoLocationOutline} from "react-icons/io5";
  import { useContext } from "react";
import { AuthContext } from "../route/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

const DonationCard = ({el,date}) => {
  let Navigate=useNavigate()
  const { status,isActive,addWorkout } = useContext(AuthContext);
  const toast = useToast()
  function HandleClick(){
if(!status){
Navigate("/login")
}else if(!isActive){
Navigate("/pricing")
}else{
  addWorkout({...el,date:date})
  toast({
    title: 'Workout Session Successfully Booked!',
    status: 'success',
    duration: 2000,
    isClosable: true,
  })

}
  }

  return (
    <>
    <Flex
  bg="black"

  pt={10}
  w="full"
  alignItems="center"
  justifyContent="center"

>
  <Box
    bg="black"
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
    rounded={{
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
        rounded={{base:"lg",lg:0}}
 roundedTopLeft={ {base:"lg",lg:"20px"}}
 roundedBottomLeft={{base:"lg",lg:"20px"}}
        bgSize="cover"
        style={{
          backgroundImage:
            `url(${el.img})`,
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}
      borderRadius={{base:"lg",lg:0}}
    borderTopRightRadius={ {base:"lg",lg:"20px"}}
      borderBottomRightRadius={{base:"lg",lg:"20px"}}
      bg={"#0D0D0D"}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        color="white"
      
        fontWeight="bold"
      >
        {el.name}{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
        
        </chakra.span>
      </chakra.h2>
      <SimpleGrid columns={3} mt={4}>
        <Flex >
        
            <BiTimeFive  size={18} mt={0}/>
   
      
            <Text ml={1.5}>{el.time}</Text>
         
       
        </Flex>
      
        <Flex >
           
           <BiUserPin size={18}  mt={0}/>
   
          
           <Text ml={1.5}  >{el.trainerName}</Text>
          
       </Flex>
       <Flex >
           
           <IoLocationOutline size={18} mt={0}/>
   
        
           <Text ml={1.5} >{el.location}</Text>
          
      
       </Flex>
      </SimpleGrid>
     
      <chakra.h4
        mt={4}
        color="white"
 
      >
    Begin your mornings by engaging in a Pilates session, focusing on enhancing core strength and boosting flexibility for overall wellness.
      </chakra.h4>

      <Box mt={8}>
        <Button
          bg="#097fd9"
          color="white"
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