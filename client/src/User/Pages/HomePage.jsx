
import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import BGImage from "../Assests/ngo2-slider-bg.png";
import bg from "../Assests/ngo2-sectionbg2.png"
import CategoryComponent from "../Components/CategoryComponent";
import NumberChange from "../Components/NumberChange";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
       <Box
      fontFamily={"Poppins"}
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/10/67/11/360_F_310671112_7uHR8suAFu64j11zSV6RE1Fss116EDrB.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      h={["500px", "720px"]} 
    >
      <Navbar />
      <Box mt={["100px", "150px"]} ml={["0px", "120px"]} w={["250px", "500px"]}>
        <Text
          fontWeight={"500"}
          fontSize={["24px", "44px"]}
          lineHeight={"1.2"}
          fontFamily={"DM Serif Display"}
          color={"#f2eded"}
        >
          <span style={{ color: "#7fb432" }}>Medical</span> care and education for children
        </Text>
        <Text color={"#d2c7c7"} fontWeight={"300"} mt={"20px"}>
          With a global team dedicated to trust and safety, we’ve successfully
          managed fundraisers worldwide for more than a decade. Don’t worry
          about a thing, we’ve got you covered
        </Text>
        <Flex mt={"20px"} w={["200px", "250px"]} justifyContent={"space-between"} alignItems={"center"}>
          <Button
            borderRadius={"0"}
            letterSpacing={"1px"}
            fontWeight={"300"}
            bg={"black"}
            color={"white"}
            colorScheme="black"
            size="md"
          >
            DONATE US
          </Button>
          <Button
            style={{ textDecoration: "none" }}
            colorScheme="black"
            variant="link"
            fontWeight={"400"}
          >
            About Us &gt;
          </Button>
        </Flex>
      </Box>
    </Box>
      <CategoryComponent />
      <NumberChange />
      
      <Footer />
    </>
  );
};

export default HomePage;

