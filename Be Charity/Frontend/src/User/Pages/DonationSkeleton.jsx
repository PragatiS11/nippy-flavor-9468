
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator, SimpleGrid, Grid } from '@chakra-ui/react'
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
        <SimpleGrid columns={[1,2,3]} spacing={8} mt={8} >
          <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>

          
          <Box>
          <Center>
  <SkeletonCircle size='250' m={"auto"} width={390} borderRadius={0}  mb={"20px"}/>
  </Center>
          </Box>
<Box>
<VStack alignItems={"center"} justifyContent={"center"}>
  <Skeleton height='15px' w={370} mt={"5px"}   />
   <Skeleton height='15px' w={370} mt={"5px"}   />
  
   <Skeleton height='15px' w={370} mt={"5px"}   />


  </VStack>
  </Box>
  <Center>
 
    </Center>
    </Flex>
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>

          
<Box>
<Center>
<SkeletonCircle size='250' m={"auto"} width={390} borderRadius={0}  mb={"20px"}/>
</Center>
</Box>
<Box>
<VStack alignItems={"center"} justifyContent={"center"}>
<Skeleton height='15px' w={370} mt={"5px"}   />
<Skeleton height='15px' w={370} mt={"5px"}   />

<Skeleton height='15px' w={370} mt={"5px"}   />


</VStack>
</Box>
<Center>

</Center>
</Flex>
<Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>

          
<Box>
<Center>
<SkeletonCircle  size='250' m={"auto"} width={390} borderRadius={0}  mb={"20px"}/>
</Center>
</Box>
<Box>
<VStack alignItems={"center"} justifyContent={"center"}>
<Skeleton height='15px' w={370} mt={"5px"}   />
<Skeleton height='15px' w={370} mt={"5px"}   />

<Skeleton height='15px' w={370} mt={"5px"}   />


</VStack>
</Box>
<Center>

</Center>
</Flex>

    </SimpleGrid>


</VStack>

</VStack>
</Center>

    </>
  )
}

export default DonationSkeleton