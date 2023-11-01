import React from 'react'
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import AboutCenter from '../Components/AboutCenter'
import CategoryComponent from '../Components/CategoryComponent'
import Footer from '../Components/Footer'
const About = () => {
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
        <Text fontWeight={'500'} fontSize={"55"} lineHeight={"55px"}  fontFamily={'DM Serif Display'}>Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.</Text>
        </Box>
     

      </Flex>
      <AboutCenter />
      <CategoryComponent />
      <Box fontFamily={"Poppins"}   m={"100px"} style={{
      backgroundImage: `url('https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-wrapbg1.jpg')`,
      backgroundSize: "cover",
   height:"450px",
  backgroundAttachment:"fixed",
      backgroundRepeat: "no-repeat"
    }}>
     
      <Flex textAlign={"center"} justifyContent={"center"} alignItems={"center"}  h={"450px"} >
        <Box>
        <Text fontWeight={'500'} fontSize={"55"} lineHeight={"55px"} color={"white"} fontFamily={'DM Serif Display'}>We can't help everyone, <br />
but everyone can help someone.</Text>
<Box m={"auto"}>
<Button m={"30px 10px"} borderRadius={"0"}  fontWeight={'300'} bg={"#df8c09"} color={"white"} colorScheme='black'>Donate Us</Button>
      <Button m={"30px 10px"} borderRadius={"0"}  fontWeight={'300'} bg={"#79ab2f"} color={"white"} colorScheme='black'>Become a Voluntear</Button>
      </Box>  </Box>
     

      </Flex>

      </Box>
      <Footer />
    </Box>
   
</>
  )
}

export default About