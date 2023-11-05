
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Center, Image, Input, Select, Table } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import {
  Box, Button, Flex, Heading, Link, Text, InputGroup, TableContainer, Thead,
  Tbody, Th, Tr, Td, InputLeftElement
} from '@chakra-ui/react'
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
      <Box fontFamily={"Poppins"} color={"black"} style={{
        backgroundImage: `url('${BGImage}')`,
        backgroundSize: "cover",
        height: "720px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <Navbar />
        <Flex justifyContent={"center"} alignItems={"flex-end"} m={"auto"} h={"100px"} >
          <Box>
            <Text fontWeight={'500'} fontSize={["30", "45"]} lineHeight={"60px"} textAlign={"center"} fontFamily={'DM Serif Display'}>User Profile</Text>
          </Box>
        </Flex>

        <Flex alignItems={"center"} m={"auto"} w={"80%"} justifyContent="space-evenly" mt={"50px"}>
          <Flex alignItems={"center"} justifyContent={"space-evenly"} margin={"auto"}>
            <Box>
              <Image w={"40%"} src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oggg1boogjsy98ttnvnd.png"}></Image>
            </Box>
            <Box  mt={"30"} marginLeft={"-150px"}>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"} fontWeight={"bold"}fontSize={"20"}>Name : Blessmi K</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"} fontWeight={"bold"}fontSize={"20"}>Email : kblessmi2001@gmail.com</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"} fontWeight={"bold"}fontSize={"20"}>City  : Mulagumoodu</Text>
            </Box>
          </Flex>


        </Flex>

        <TableContainer m={"auto"} w="70%" size="sm" border="1px solid black" mt="50">
          <Table variant='simple' m={"auto"} border="1px solid black"  >
            <Thead border="1px solid black" color={"white"} >
              <Tr bg="black">
                <Th color={"white"}>Time</Th>
                <Th color={"white"}>Donation Name</Th>
                <Th color={"white"}>Money</Th>
              </Tr>
            </Thead>
            <Tbody border="1px solid black">
              <Tr>
                <Td>Sun,Nov 05 2023</Td>
                <Td>Medical Equipment</Td>
                <Td>$ 1000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Table margin="auto">
            <Tr>
              <Th>Donation Name</Th>
              <Th>Money</Th>
              <Th>Time</Th>
            </Tr>
            <Tr>
              <Td>Medical Equipment</Td>
              <Td>1000</Td>
              <Td>Sun,Nov 05 2023</Td>
            </Tr>
          </Table> */}

        <Footer />
      </Box>
    </>
  )
}

export default UserProfile