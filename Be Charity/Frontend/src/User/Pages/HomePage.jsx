import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import BGImage from "../Assests/ngo2-slider-bg.png";
import CategoryComponent from "../Components/CategoryComponent";
import NumberChange from "../Components/NumberChange";
import Footer from "../Components/Footer";
const HomePage = () => {
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
        <Box mt={"150px"} ml={"120px"} w={"500px"}>
          <Text
            fontWeight={"500"}
            fontSize={"44"}
            lineHeight={"50px"}
            fontFamily={"DM Serif Display"}
          >
            Medical care and education for children
          </Text>
          <Text color={"#666666"} fontWeight={"300"} m={"20px 0"}>
            With a global team dedicated to trust and safety, we’ve successfully
            managed fundraisers worldwide for more than a decade. Don’t worry
            about a thing, we’ve got you covered
          </Text>
          <Flex
            w={"250px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              borderRadius={"0"}
              letterSpacing={"1px"}
              fontWeight={"300"}
              bg={"black"}
              color={"white"}
              colorScheme="black"
            >
              DONATE US
            </Button>
            <Button
              style={{ textDecoration: "none" }}
              colorScheme="black"
              variant="link"
              fontWeight={"400"}
            >
              About Us >
            </Button>
          </Flex>
        </Box>
      </Box>
      <CategoryComponent />
      <NumberChange />
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

export default HomePage;
