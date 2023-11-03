
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Input, Select } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import { Box, Button, Flex, Heading, Link, Text,  InputGroup,
  InputLeftElement  } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import DonationCard from '../Components/DonationCard';
import DonationSkeleton from './DonationSkeleton';
import { DonationRequest } from '../Utilis/api';
import OfflineData from '../Components/SingleCard';
import Footer from '../Components/Footer';
const Donate = () => {
  const [search, setSearch] = useState("");
  let [flags,setFlags]=React.useState(true)

// let [data,setData]=React.useState([]);
// let [loading,setLoading]=React.useState(false)
// useEffect(()=>{
// setLoading(true)
//     DonationRequest().then(res=>{
// // console.log(res.data)
//       setData(res.data)
//     setLoading(false)
//     })

// },[])

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
        <Text fontWeight={'500'} fontSize={["30","45"]} lineHeight={"60px"} textAlign={"center"}  fontFamily={'DM Serif Display'}>Search fundraisers on BeCharity</Text>
        </Box>
     

      </Flex>
      <Flex  alignItems={"center"} m={"auto"} >
        <Flex m={"20px auto"}>
        <InputGroup >
    <InputLeftElement pointerEvents='none'>

    <FaSearch />
    </InputLeftElement>
    <Input placeholder='Search Here...' _focus={{boxShadow:"none"}} onChange={(e) => setSearch(e.target.value)} value={search} _hover={{border:"2px solid black",boxShadow:"none"}} borderRadius={"0px"} border={"1px solid black"} variant='outline' type='search' w={["400px","400px","550px"]} />
  </InputGroup>
  <Select _hover={{border:"2px solid black",boxShadow:"none"}} variant={"outline"} borderRadius={"0px"} border={"1px solid black"} m={"auto 10px"} placeholder="Category">
  <option value="education">Education</option>
                        <option value="medical">Medical</option>
                        <option value="food">Food</option>
                        <option value="water">Water</option>
</Select>
        </Flex>
     

      </Flex>

      <OfflineData />
      <Box
        fontFamily={"Poppins"}
        m={"100px"}
        style={{
          backgroundImage: `url('https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-wrapbg1.jpg')`,
          backgroundSize: "cover",
          height: "450px",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"450px"}
        >
          <Box>
            <Text
              fontWeight={"500"}
              fontSize={"55"}
              lineHeight={"55px"}
              color={"white"}
              fontFamily={"DM Serif Display"}
            >
              We can't help everyone, <br />
              but everyone can help someone.
            </Text>
            <Box m={"auto"}>
              <Button
                m={"30px 10px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#df8c09"}
                color={"white"}
                colorScheme="black"
              >
                Donate Us
              </Button>
              <Button
                m={"30px 10px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={"#79ab2f"}
                color={"white"}
                colorScheme="black"
              >
                Become a Voluntear
              </Button>
            </Box>{" "}
          </Box>
        </Flex>
      </Box>

      <Footer />
      </Box>
    </>
  )
}

export default Donate