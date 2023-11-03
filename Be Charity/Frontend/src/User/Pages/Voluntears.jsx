import React from 'react'
import Navbar from "../Components/Navbar"
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import BGImage from "../Assests/ngo2-sectionbg2.png"
import Footer from '../Components/Footer'
const Voluntears = () => {
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
      <Box
        fontFamily={"Poppins"}
        m={"100px"}
        style={{
          backgroundImage: `url('https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-wrapbg1.jpg')`,
          backgroundSize: "cover",
          height: "450px",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"450px"}
        >
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"55"}
              lineHeight={"55px"}
              color={"white"}
              fontFamily={"DM Serif Display"}
            >
              We can't help everyone, <br />
              but everyone can help someone.
            </Text>
            <Box m={"auto"}>
              <Button
                m={"30px 10px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#df8c09"}
                color={"white"}
                colorScheme="black"
              >
                Donate Us
              </Button>
              <Button
                m={"30px 10px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
                color={"white"}
                colorScheme="black"
              >
                Become a Voluntear
              </Button>
            </Box>{" "}
          </Box>
        </Flex>
      </Box>
      <Footer />
</>
  )
}

export default Voluntears