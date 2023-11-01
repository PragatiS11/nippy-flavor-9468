import React from 'react'
import Navbar from "../Components/Navbar"
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import BGImage from "../Assests/ngo2-sectionbg2.png"
const Voluntears = () => {
  return (
    <>
<Box fontFamily={"Poppins"}    style={{
      backgroundImage: `url('${BGImage}')`,
      backgroundSize: "100% 100%",
   height:"720px",
      backgroundRepeat: "no-repeat"
    }}>
      <Navbar />
      <Flex  alignItems={"center"} m={"auto"} h={"350px"} w={"65%"}>
        <Box>
        <Text fontWeight={'500'} fontSize={"55"} lineHeight={"60px"}  fontFamily={'DM Serif Display'}>Let’s build the better world together without
starving children, pain and death.</Text>
        </Box>
     

      </Flex>
      <Flex  alignItems={"center"} m={"auto"}  h={"250px"}>
        <Box m={"auto"}>
        <Text fontWeight={'500'} textAlign={"center"} fontSize={"55"} lineHeight={"60px"}  fontFamily={'DM Serif Display'}>Wall of our Voluntears.</Text>
        </Box>
     

      </Flex>

      </Box>
</>
  )
}

export default Voluntears