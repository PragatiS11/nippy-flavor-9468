
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator, SimpleGrid } from '@chakra-ui/react'
import { IconName } from "react-icons/bi";
import { TimeIcon } from '@chakra-ui/icons'
import { Fade,Slide } from "react-awesome-reveal";

import {
    Center,
    chakra,
    Box,
    Flex,
    Link,
    Texxt,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    Text,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Spacer,
    Heading,
    Input,
  Stack,
  Image
  } from "@chakra-ui/react";



  import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const DonationSkeleton = () => {
  return (
    <>
        <Center>
            <VStack>
        <VStack mt={10}>
        <Stack direction={{base:"column",md:"row"}}>
<Center>
  <SkeletonCircle size='250' borderRadius={20} w={500}/>
  </Center>
  <Center>
  <VStack>
  <Skeleton height='15px' w={400} ml={5}  />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  
   <Skeleton height='15px' w={400} ml={5} mt={5} />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  <Skeleton height='15px' w={400} ml={5} mt={5} />

  </VStack>
    </Center>
</Stack>

</VStack>
<VStack mt={10}>
        <Flex>
<Center>
  <SkeletonCircle size='250' borderRadius={20} w={500}/>
  </Center>
  <Center>
  <VStack>
  <Skeleton height='15px' w={400} ml={5}  />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  
   <Skeleton height='15px' w={400} ml={5} mt={5} />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  <Skeleton height='15px' w={400} ml={5} mt={5} />

  </VStack>
    </Center>
</Flex>

</VStack>
</VStack>
</Center>
    </>
  )
}

export default DonationSkeleton