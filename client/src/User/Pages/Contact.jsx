import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import BGImage from "../Assests/ngo2-sectionbg2.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
const Contact = () => {
 
  return (
    <>
      <Box color={"black"}
      height={["950px","720px"]}
        fontFamily={"Poppins"}
        style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
       
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Flex alignItems={"center"} m={"auto"} h={["350px"]} w={"68%"}>
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"55"}
              lineHeight={"65px"}
              fontFamily={"DM Serif Display"}
            >
              Have any questions?
              <br />
              Contact us via e-mail or phone
            </Text>
          </Box>
        </Flex>
        <Flex w={"70%"} m={"20px auto"} flexDirection={["column","row"]} justifyContent={"space-between"}>
          <Stack w={["100%","23%"]} borderRadius={"20px"} p={"20px"}>
            <Box>
              <Text
                fontWeight={"500"}
                fontSize={"25"}
                mt={"15px"}
                fontFamily={"DM Serif Display"}
              >
                Our Address
              </Text>
            </Box>
            <Box>
              <br />
              <Text
                m={"auto"}
                color={"#666666"}
                fontWeight={"300"}
                fontSize={"15px"}
              >
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </Text>
            </Box>
          </Stack>
          <Stack w={["100%","23%"]} borderRadius={"20px"} p={"20px"}>
            <Box>
              <Text
                fontWeight={"500"}
                fontSize={"25"}
                mt={"15px"}
                fontFamily={"DM Serif Display"}
              >
                Phone
              </Text>
            </Box>
            <Box>
              <br />
              <Text
                m={"auto"}
                color={"#666666"}
                fontWeight={"300"}
                fontSize={"15px"}
              >
                Our office is available Mon to Sat 08:00 am - 10:00 pm
              </Text>
              <br />
              <Text>+61 (0) 383 766 284</Text>
            </Box>
          </Stack>
          <Stack w={["100%","23%"]} borderRadius={"20px"} p={"20px"}>
            <Box>
              <Text
                fontWeight={"500"}
                fontSize={"25"}
                mt={"15px"}
                fontFamily={"DM Serif Display"}
              >
                E-mail
              </Text>
            </Box>
            <Box>
              <br />
              <Text
                m={"auto"}
                color={"#666666"}
                fontWeight={"300"}
                fontSize={"15px"}
              >
                becharity@gmail.com
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Box w={"70%"} m={"50px auto"}>
        <Input
          variant="flushed"
          m={"10px"}
          w={"100%"}
          border={"none"}
          borderBottom={"1px solid black"}
          placeholder="Your Name" 
        />
        <Input
          variant="flushed"
          m={"10px"}
          w={"100%"}
          borderBottom={"1px solid black"}
          placeholder="Your E-mail"
        />

        <Input
          variant="flushed"
          m={"10px"}
          w={"100%"}
          borderBottom={"1px solid black"}
          placeholder="Subject"
        />
        <Input
          variant="flushed"
          m={"10px"}
          w={"100%"}
          borderBottom={"1px solid black"}
          placeholder="Message"
        />
        <Flex m={"auto"} justifyContent={"center"} alignItems={"center"}>
          <Button
            m={"30px"}
            borderRadius={"0"}
            fontWeight={"300"}
            bg={"#79ab2f"}
            color={"white"}
            colorScheme="black"
          >
            Send A Message
          </Button>
        </Flex>
      </Box>
      
       
  

      <Footer />
    </>
  );
};

export default Contact;
