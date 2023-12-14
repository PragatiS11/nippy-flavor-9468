import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import {chakra, Box, Button, Flex, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import BGImage from "../Assests/ngo2-sectionbg2.png"
import Footer from '../Components/Footer'
import { GetVolunteersRequest } from '../Utilis/api'

const Voluntears = () => {

const [vol,setVol]=useState([]);

  useEffect(()=>{
    GetVolunteersRequest().then(res=>setVol(res.data))
  },[])

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
      <Flex  alignItems={"center"} m={"auto"} h={"350px"} w={"65%"}>
        <Box>
        <Text fontWeight={'500'} fontSize={["30","55"]} lineHeight={"60px"}  fontFamily={'DM Serif Display'}>Let’s build the better world together without
starving children, pain and death.</Text>
        </Box>
     

      </Flex>
      <Flex  alignItems={"center"} m={"auto"}  h={"250px"}>
        <Box m={"auto"}>
        <Text fontWeight={'500'} textAlign={"center"} fontSize={"55"} lineHeight={"60px"}  fontFamily={'DM Serif Display'}>Wall of our Volunteers.</Text>
        </Box>
     

      </Flex>
  

      </Box>
      <Flex flexWrap={"wrap"} m={"auto"} w={"85%"} justifyContent={"space-between"} alignItems={"center"}>
       
        {vol?.map(el=><Flex
        key={el._id}
    direction="column"
    justifyContent="center"
    alignItems="center"
    w="sm"
  // m={"auto"}
  >
    <Box

      h={"400px"}
      w="full"

      shadow="md"
      bgSize="cover"
      bgPos="center"
      style={{
        backgroundImage:
          `url(${el.image})`
      }}
    ></Box>

    <Box
      w={"80%"}
      bg="white"
      
      mt={-10}
      
    
      overflow="hidden"
    >
      <chakra.h3
   m={"10px auto"}
        textAlign="center"
     fontSize={"22"}
     fontWeight={"400"}
     letterSpacing={"1px"}
        textTransform="capitalize"
       fontFamily={"DM Serif Display"}
  
      
       
      >
       {el.name}
      </chakra.h3>
      <chakra.h3
       mt={"-8px"}
        textAlign="center"
     fontSize={"18"}
     fontWeight={"400"}
     letterSpacing={"1px"}
        textTransform="capitalize"
       fontFamily={"DM Serif Display"}
  
      
       
      >
      {el.city}
      </chakra.h3>
     
    </Box>
  </Flex>

    
)} 
   
   

 </Flex>    
      <Footer />
</>
  )
}

export default Voluntears