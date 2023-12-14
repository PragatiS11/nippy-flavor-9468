
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Input, Select } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import BGImage from "../Assests/ngo2-sectionbg2.png"
import {
  Box, Button, Flex, Heading, Link, Text, InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';

import DonationSkeleton from './DonationSkeleton';

import OfflineData from '../Components/SingleCard';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../Redux/Donation/action';
import { useSearchParams } from 'react-router-dom';
const Donate = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => ({
    donations: store.DonationReducer.products,
    loading: store.DonationReducer.isLoading,
    error: store.DonationReducer.isError
  }))

  const [searchParam, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParam.get("query") || "");





  const [category, setCategory] = useState(searchParam.get("category") || "");
  const params = {
    params:{
      q:search,
      category:category
    }
  }

  const HandleCategory = (e) => {
   
    setCategory(e.target.value)
  }

  useEffect(() => {
    if (search && category) {
      setSearchParams({
        category,
        query: search,
      });
    }
    else if (search) {
      setSearchParams({
        query: search,
      });
    }
    else if (category) {
      setSearchParams({
        category
      });
    }
    else
    {
      setSearchParams({});
    }

    dispatch(getProductsData(params))
  }, [search, category])


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
        <Flex justifyContent={"center"}  alignItems={"flex-end"} m={"auto"} h={"100px"} >
          <Box>
            <Text fontWeight={'500'} fontSize={["30", "45"]} lineHeight={"60px"} textAlign={"center"} fontFamily={'DM Serif Display'}>Search fundraisers on BeCharity</Text>
          </Box>


        </Flex>
        <Flex alignItems={"center"} m={"auto"} >
          <Flex m={"20px auto"}  flexDirection={["column","row"]}>
            <InputGroup >
              <InputLeftElement pointerEvents='none'>
                <FaSearch />
              </InputLeftElement>
              <Input placeholder='Search Here...' _focus={{ boxShadow: "none" }} onChange={(e) => setSearch(e.target.value)} value={search} _hover={{ border: "2px solid black", boxShadow: "none" }} borderRadius={"0px"} border={"1px solid black"} variant='outline' type='search' w={["200px", "400px", "550px"]} />
            </InputGroup>
            <Select _hover={{ border: "2px solid black", boxShadow: "none" }} variant={"outline"} borderRadius={"0px"} border={"1px solid black"} m={["10px auto","auto 10px"]} placeholder="Category" w={["200px","200px"]} onChange={HandleCategory}>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
              <option value="Food">Food</option>
              <option value="Pure Water">Water</option>
            </Select>
          </Flex>


        </Flex>
        {data.donations.length !== 0 ? <OfflineData key={data.donations._id} data={data.donations} /> : <DonationSkeleton />}
        <Footer />
      </Box>
    </>
  )
}

export default Donate