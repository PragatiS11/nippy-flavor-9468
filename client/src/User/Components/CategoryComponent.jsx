import {
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CategoryComponent = () => {
  return (
    <>
      <SimpleGrid columns={[2,3,4]} w={"80%"} m={"120px auto"}justifyContent={"space-between"}>
        <Stack
          w={"100%"}
          _hover={{ bg: "#faf8f6" }}
          borderRadius={"20px"}
          p={["10px","20px"]}
        >
          <Box>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-icon1.png"></Image>
          </Box>
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"25"}
              mt={"15px"}
              fontFamily={"DM Serif Display"}
            >
              Healthy food
            </Text>
          </Box>
          <Box>
            <Text
              m={"auto"}
              color={"#666666"}
              fontWeight={"300"}
              fontSize={"15px"}
            >
              Duis dignissim mi laoreet mollis. Nunc id tellus mus finibus
              tempor
            </Text>
          </Box>
        </Stack>
        <Stack
         w={"100%"}
         _hover={{ bg: "#faf8f6" }}
         borderRadius={"20px"}
         p={["10px","20px"]}
        >
          <Box>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-icon2.png"></Image>
          </Box>
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"25"}
              mt={"15px"}
              fontFamily={"DM Serif Display"}
            >
              Education
            </Text>
          </Box>
          <Box>
            <Text
              m={"auto"}
              color={"#666666"}
              fontWeight={"300"}
              fontSize={"15px"}
            >
              Duis dignissim mi laoreet mollis. Nunc id tellus mus finibus
              tempor
            </Text>
          </Box>
        </Stack>
        <Stack
          w={"100%"}
          _hover={{ bg: "#faf8f6" }}
          borderRadius={"20px"}
          p={["10px","20px"]}
        >
          <Box>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-icon3.png"></Image>
          </Box>
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"25"}
              mt={"15px"}
              fontFamily={"DM Serif Display"}
            >
              Pure water
            </Text>
          </Box>
          <Box>
            <Text
              m={"auto"}
              color={"#666666"}
              fontWeight={"300"}
              fontSize={"15px"}
            >
              Duis dignissim mi laoreet mollis. Nunc id tellus mus finibus
              tempor
            </Text>
          </Box>
        </Stack>
        <Stack
         w={"100%"}
         _hover={{ bg: "#faf8f6" }}
         borderRadius={"20px"}
         p={["10px","20px"]}
        >
          <Box>
            <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-about-icon4.png"></Image>
          </Box>
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"25"}
              mt={"15px"}
              fontFamily={"DM Serif Display"}
            >
              Medical care
            </Text>
          </Box>
          <Box>
            <Text
              m={"auto"}
              color={"#666666"}
              fontWeight={"300"}
              fontSize={"15px"}
            >
              Duis dignissim mi laoreet mollis. Nunc id tellus mus finibus
              tempor
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default CategoryComponent;
