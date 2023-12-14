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
<Box fontFamily={"Poppins"} color={"black"}      style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
          height: "720px",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}>
      <Navbar />
      <Flex  alignItems={"center"} m={"auto"} h={"350px"} w={"65%"}>
        <Box>
        <Text fontWeight={'500'} fontSize={[32,"55"]} lineHeight={"55px"}  fontFamily={'DM Serif Display'}>Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere.</Text>
        </Box>
      </Flex>
      <AboutCenter />
      <CategoryComponent />
      <Footer />
    </Box>
   
</>
  )
}

export default About