import { Box, Button, Divider, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
          <Box fontFamily={"Poppins"}   m={["10px","100px"]} style={{
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
      <Box m={["20px","100px"]}>
        <Flex w={["100%","80%"]} direction={["column","row"]} m={"auto"} justifyContent={"space-between"}>
          <Flex w={["100%","50%"]} m={["10px auto","auto"]} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box>
              <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-contact-icon1.png"></Image>
            </Box>
            <Box>
              <Text fontFamily={"DM Serif Display"} fontSize={[26]}>
                +61 (0) 383 766 284
              </Text>
            </Box>
          </Flex>
          <Flex w={["100%","50%"]} m={["10px auto","auto"]} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box>
              <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-contact-icon2.png"></Image>
            </Box>
            <Box>
              <Text fontFamily={"DM Serif Display"} fontSize={26}>
                becharity@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex w={["100%","40%"]} m={["10px auto","auto"]} justifyContent={"center"} alignItems={"center"}>
            <Box w={"10%"} m={"auto 10px"}>
              <a href="https://www.facebook.com/">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4vfut6aghkegjfudn6v3.png"
                  alt=""
                />
              </a>
            </Box>
            <Box w={"10%"} m={"auto 10px"}>
              <a href="https://www.twitter.com/">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uaeuzqc4g4zqnm2ynjk.png"
                  alt=""
                />
              </a>
            </Box>
            <Box w={"10%"} m={"auto 10px"}>
              <a href="https://www.youtube.com/">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfppngj04rz0rgsvc5kg.png"
                  alt=""
                />
              </a>
            </Box>
          </Flex>
        </Flex>
        <br />
        <Divider w={"100%"} m={"auto"} />
      </Box>
      <Box>
        <Box w={"100%"} m={"auto"} mb={"100px"}>
          <Image
            m={"auto"}
            src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2.png"
          ></Image>
          <Text
            m={"10px auto"}
            color={"#666666"}
            fontWeight={"300"}
            fontSize={"15px"}
            w={"60%"}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
            porta urna.
          </Text>
        </Box>
      </Box>
      <Divider />
      <Flex w={"80%"} m={"20px auto"} justifyContent={"space-between"}>
        <Flex w={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
          <Box>
            <Text color={"#666666"} fontWeight={"300"} fontSize={"15px"}>
              © 2023 BeCharity | All Rights Reserved | Powered by MERN
            </Text>
          </Box>
        </Flex>
        <Flex w={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
          <Box>
            <Link href="#">Go To Top </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
