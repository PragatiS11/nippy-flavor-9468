
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Image, Input, Select } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import { Box, Button, Flex, Heading, Link, Text,  InputGroup, InputLeftElement  } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import DonationSkeleton from './DonationSkeleton';
import OfflineData from '../Components/SingleCard';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../Redux/Donation/action';
const UserProfile = () => {
  const dispatch = useDispatch();
  

  return (
    <>
   <Box fontFamily={"Poppins"}  color={"black"}      style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
          height: "720px",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}>
      <Navbar />
      <Flex justifyContent={"center"} alignItems={"flex-end"} m={"auto"} h={"100px"} >
        <Box>
        <Text fontWeight={'500'} fontSize={["30","45"]} lineHeight={"60px"} textAlign={"center"}  fontFamily={'DM Serif Display'}>User Profile</Text>
        </Box>
     

      </Flex>
      <Flex  alignItems={"center"} m={"auto"} w={"80%"}>
        <Flex m={"20px auto"}>
  <Box>
<Image w={"70%"} src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png"}></Image>
  </Box>
  <Box>
<Text>Name</Text>
<Text>City</Text>
  </Box>
        </Flex>
     

      </Flex>

      <Footer />
      </Box>
    </>
  )
}

export default UserProfile