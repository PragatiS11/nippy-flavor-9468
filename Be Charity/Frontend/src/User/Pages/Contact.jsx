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
const Contact = () => {
  return (
    <>
      <Box
        fontFamily={"Poppins"}
        style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "100% 100%",
          height: "720px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Flex alignItems={"center"} m={"auto"} h={"350px"} w={"68%"}>
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
        <Flex w={"70%"} m={"20px auto"} justifyContent={"space-between"}>
          <Stack w={"23%"} borderRadius={"20px"} p={"20px"}>
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
          <Stack w={"23%"} borderRadius={"20px"} p={"20px"}>
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
          <Stack w={"23%"} borderRadius={"20px"} p={"20px"}>
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
  );
};

export default Contact;
