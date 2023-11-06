
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
import { CatchPaymentByUserIdRequest } from '../Utilis/api';
import { EditModel } from '../Components/EditModel';

const UserProfile = () => {

    const [SignOpen, setSignOpen] = useState(false);

    function SignClose() {
      setSignOpen(!SignOpen);
    }
  const dispatch = useDispatch();

 const data=useSelector((store)=>(store.AuthReducer.userData))

const [payment,setPayment]=useState([]);




useEffect(()=>{
CatchPaymentByUserIdRequest(data?._id).then(res=>{
    setPayment(res.data)
})
},[])

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
          <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}  margin={"auto"}>
            <Box>
              <Image w={"50%"} m={"auto"} src={data?.image}></Image>
   
            </Box>
            <Box m={"auto"}  mt={"30"}  fontWeight={"600"}> 
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"} letterSpacing={"0.5px"} fontSize={"20"}>Name : {data?.name} {data?.isVolunteers?"[ VOLUNTEER ]":""}</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"}  letterSpacing={"0.5px"} fontSize={"20"}>Email : {data?.email}</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"}  letterSpacing={"0.5px"}  fontSize={"20"}>City  : {data?.city}</Text>
              
            <Button
               borderRadius={0}
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={()=>{
                setSignOpen(!SignOpen)
               }}
            >
              EDIT PROFILE
            </Button>
            {SignOpen && <EditModel
            onOpens={SignOpen} 
            LetClose={SignClose} />}
            </Box>
          </Flex>


        </Flex>

        <TableContainer m={"auto"} w="70%" size="sm" border="1px solid black" mt="50">
          <Table variant='simple' m={"auto"} border="1px solid black"  >
            <Thead border="1px solid black" color={"white"} m={"10px"}>
              <Tr m={"10px"} bg="black" >
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Time</Th>
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Fundraiser name</Th>
             
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Amount</Th>
              
              </Tr>
            </Thead>
            <Tbody border="1px solid black">
            {payment?.reverse().map((el) => (
  <Tr key={el.id}>
    <Td>{el.Time.split(" ").slice(0, 5).join(" ")}</Td>
    <Td>{el.Donation_name}</Td>
    <Td>$ {el.money}</Td>
  </Tr>
))}
              
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