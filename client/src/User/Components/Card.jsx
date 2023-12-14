import * as React from 'react';
import {
  Box,
  Image,
  useColorModeValue,
  VStack,
  Text,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Center,
  Flex,
  Tooltip,
  Button
} from '@chakra-ui/react';

// Here we have used react-icons package for the icons
import { AiOutlineStar } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaDonate } from 'react-icons/fa';
import { BiSelectMultiple, BiSolidDonateHeart } from 'react-icons/bi';
import { MdMergeType } from 'react-icons/md';

import { BsFillBox2HeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const RepositoryCard = ({id,title,description,cover,category,stargazers_count,donators,current_funds}) => {

  
let Navigate=useNavigate();
 

  return (
    <Box  cursor="pointer" w={"100%"} size="xl" mt={"15px"}>
      <VStack
        
        borderWidth="1px"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{
          shadow: 'lg',
          textDecoration: 'none'
        }}
        overflow="hidden"
        align="start"
        spacing={0}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={1.85 / 1}
            w="100%"
            borderBottomWidth="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
             <Image
      src={cover}
      objectFit="cover"
      alt="cover image"
    //   width={width}
    //   height={height}
    //   size={size}
    //   layout={layout}
    //   rounded={rounded}
    />
         
          </AspectRatio>
        </Box>

        <VStack   py={2} px={[2, 4]} spacing={1} align="start" w="100%">
          <Flex    justifyContent="space-between" >
         
            <Box>
            <Text   fontFamily={"DM Serif Display"}
                  fontSize="25"
                  m={"10px 0"}
               noOfLines={1}
                  fontWeight="600"
                 
                >
                  {title}
                </Text>
                <Flex  mt={"15px"} mb={"10px"}  alignItems={"center"} justifyContent={"space-between"}> 
                <Tooltip label={"Goal Amount"}>
                <Box>
                <Icon as={FaDonate} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="2" fontSize="sm">
                ${stargazers_count}
              </Box>
            
                </Box>  
                </Tooltip>
                <Tooltip label={"Category"}>
                <Box>
                <Icon as={BsFillBox2HeartFill} boxSize="0.9em" mt="1px" />
             
              <Box as="span" ml="2" fontSize="sm">
              {category}
              </Box>
                </Box>
                </Tooltip>
                <Tooltip label={"Fund Raised"}>
                <Box>
                <Icon as={BiSolidDonateHeart} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="2" fontSize="sm">
              ${current_funds} Raised
              </Box>
                </Box>
                </Tooltip>
            
           
            
            </Flex>
            </Box>
             
           
        
         
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Box>
                <Text h={"100px"} >
                {description}
                </Text>
            
            </Box>
          </Flex>
          <Button
          mt={"10px"}
          w={"100%"}
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
               onClick={()=>Navigate(`/donate-us/${id}`)}
                _hover={{ bgColor: "#f7b70d" }}
                color={"white"}
                colorScheme="black"
              >
                MORE DETAILS
              </Button>
        </VStack>
      </VStack>
  
    </Box>
  );
};

export default RepositoryCard;