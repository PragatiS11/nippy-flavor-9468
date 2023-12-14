import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const AboutCenter = () => {
  return (
    <>
      <Box w={"75%"} m={"auto"}>
        <Flex m={["10px","50px"]} direction={["column","row"]}>
          <Box  w={["100%","60%"]}>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-pic1.jpg"></Image>
          </Box>
          <Box m={["5px","20px"]} w={["100%","50%"]}>
            <Text
              fontWeight={"500"}
              fontSize={[30,"50"]}
              lineHeight={"55px"}
              fontFamily={"DM Serif Display"}
            >
              Duis dignissim mi ut laoreet mollis
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"30px"}>
              Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas
              mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus.
              Maecenas ultrices tellus sit amet sem placerat tempor. Maecenas
              eget arcu venenatis, sagittis felis sit amet, dictum nisl.
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Phasellus vitae vulputate elit.
            </Text>

            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Fusce interdum justo quis libero ultricies laoreet.
            </Text>
          </Box>
        </Flex>
        <Flex mt={"100px"}  direction={["column-reverse","row"]}>
          <Box m={["5px","20px"]} w={["100%","50%"]}>
            <Text
              fontWeight={"500"}
              fontSize={[30,"50"]}
              lineHeight={"55px"}
              fontFamily={"DM Serif Display"}
            >
              Fusce ut velit laoreet tempus arcu eu
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"30px"}>
              Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas
              mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus.
              Maecenas ultrices tellus sit amet sem placerat tempor. Maecenas
              eget arcu venenatis, sagittis felis sit amet, dictum nisl.
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Phasellus vitae vulputate elit.
            </Text>

            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Fusce interdum justo quis libero ultricies laoreet.
            </Text>
          </Box>
          <Box w={["100%","60%"]}>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-pic2.jpg"></Image>
          </Box>
        </Flex>
        <Flex mt={"100px"} direction={["column","row"]}>
          <Box w={["100%","60%"]}>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-pic3.jpg"></Image>
          </Box>
          <Box m={"20px"} w={["100%","50%"]}>
            <Text
              fontWeight={"500"}
              fontSize={[30,"50"]}
              lineHeight={"55px"}
              fontFamily={"DM Serif Display"}
            >
              Aliquam ac dui vel dui vulputate consectetur
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"30px"}>
              Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas
              mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus.
              Maecenas ultrices tellus sit amet sem placerat tempor. Maecenas
              eget arcu venenatis, sagittis felis sit amet, dictum nisl.
            </Text>
            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Phasellus vitae vulputate elit.
            </Text>

            <Text color={"#666666"} fontWeight={"300"} mt={"20px"}>
              Fusce interdum justo quis libero ultricies laoreet.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AboutCenter;
