import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';


// import { getProductDataFromAPI } from "../../UserPage/Utilis/api";


import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import axios from "axios";
import AdminProductCard from "../Components/AdminPRoductCard";
import { AddDonationRequest, DeleteDonationRequest, DonationRequest, DonationSingleRequest, PatchDonationRequest } from "../../User/Utilis/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Products= () => {

   


  const initProduct = {
    title: "",
    category: "",
    goal: "",
    image: "",
    description: "",
    organizer: "",
  current_funds:0,
    beneficiary:{name:"Disaster Relief Water Project",location:"Disaster-affected areas",story:
"See how clean water is a lifeline during disaster recovery."}
  };
  let newProd;
  let [newProduct, setNewProduct] = useState(initProduct);
  let [newProduct1, setNewProduct1] = useState(initProduct);
  const handleChange = (e) => {

    newProd = {
      ...newProduct,
      [e.target.name]: e.target.name=="goal"?+e.target.value:e.target.value
    };
    setNewProduct(newProd);

  };
 
  const handleChange1 = (e) => {

    let newProd1 = {
      ...newProduct1,
      [e.target.name]: e.target.name=="goal"?+e.target.value:e.target.value
    };
    setNewProduct1(newProd1);

  };
 

  
  let Navigate = useNavigate();
 const [data,setData]=useState([])
const [flag,setFlag]=useState(false)
  
 const AddProduct = (e) => {
   
    e.preventDefault();

    AddDonationRequest(newProduct).then(res=>{
    setData([...data,res.data.AddedDonation])}
    )
    setNewProduct(initProduct)
  };


  const handleEdit=(id)=>{
 
    DonationSingleRequest(id).then(res=>{
    
        setNewProduct1(res.data)})
  }
let ids=newProduct1._id;

const EditProduct=()=>{

    PatchDonationRequest(ids,newProduct1).then(res=>
        alert(res.data.msg)
        )

setNewProduct1(initProduct)
setFlag(!flag)
}
  const deleteProduct = (id) => {
    console.log(id);
    DeleteDonationRequest(id).then(res=>{
        alert(res.data.msg)
    })
setFlag(!flag)
  };


  useEffect(()=>{
DonationRequest({}).then(res=>{
 
    setData(res.data)})
  },[flag])

  return (
    <>

      <Box display={"flex"} flexDirection={"column"}  justifyContent={"space-around"}>
      <Box display={"flex"} flexDirection={"column"}  justifyContent={"space-around"}>
        <Flex>
        <Box w={"40%"} m={"auto"}>
          <Stack spacing={4}>
            <Text textAlign={"center"} fontFamily={'DM Serif Display'} fontWeight={"bold"} textTransform={"capitalize"} mb={2} fontSize={"25"}  >Create a new donation</Text>
            <Input
                variant="flushed"
                borderBottom={"1px solid black"}
              placeholder="Title"
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              marginBottom={4}
              alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
            />
      
         
              <Select   variant="flushed"
                borderBottom={"1px solid black"}  name="category"  value={newProduct.category}   placeholder="Category" onChange={handleChange}>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
              <option value="Food">Food</option>
              <option value="Pure Water">Water</option>
            </Select>
            <Input
            variant="flushed"
            borderBottom={"1px solid black"}
              placeholder="Goal"
              type="number"
              name="goal"
              value={newProduct.goal}
              onChange={handleChange}
            />
            <Input
            variant="flushed"
            borderBottom={"1px solid black"}
              placeholder="Image URL"
              type="url"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
            />
            <Input
            variant="flushed"
            borderBottom={"1px solid black"}
              placeholder="Description"
              type="text"
          name="description"
              value={newProduct.description}
              onChange={handleChange}
            />
    
       
            <Button fontSize="16"
             w="90%"
    
             bg="#79ab2f"
             _hover={{ bgColor: "#df8c09" }}
             letterSpacing={"1px"}
           //   onClick={handleSignup}
           m={"20px auto"}
       
  
           borderRadius={"0"}
           fontWeight={"300"}
         
           color={"white"}
           colorScheme="black"
     onClick={AddProduct}>
              SUBMIT
            </Button>
          </Stack>
        </Box>
        <Box w={"40%"} m={"auto"}>
          <Stack spacing={4}>
            <Text textAlign={"center"} fontWeight={"bold"} textTransform={"capitalize"} fontFamily={'DM Serif Display'} mb={2} fontSize={"25"}  >Update an existing Donation</Text>
            <Input
             variant="flushed"
             borderBottom={"1px solid black"}
              placeholder="Title"
              type="text"
              name="title"
              value={newProduct1.title}
              onChange={handleChange1}
            />
         
              <Select   variant="flushed"
                borderBottom={"1px solid black"}  name="category" value={newProduct1.category}   placeholder="Category" onChange={handleChange1}>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
              <option value="Food">Food</option>
              <option value="Pure Water">Water</option>
            </Select>
            <Input
              variant="flushed"
              borderBottom={"1px solid black"}
              placeholder="Goal"
              type="number"
              name="goal"
              value={newProduct1.goal}
              onChange={handleChange1}
            />
            <Input
             variant="flushed"
             borderBottom={"1px solid black"}
              placeholder="Image URL"
              type="url"
              name="image"
              value={newProduct1.image}
              onChange={handleChange1}
            />
            <Input
             variant="flushed"
             borderBottom={"1px solid black"}
              placeholder="Description"
              type="text"
          name="description"
              value={newProduct1.description}
              onChange={handleChange1}
            />
    
       
            <Button 
             
             fontSize="16"
             w="90%"
    
             bg="#79ab2f"
             _hover={{ bgColor: "#df8c09" }}
             letterSpacing={"1px"}
           //   onClick={handleSignup}
           m={"20px auto"}
       
  
           borderRadius={"0"}
           fontWeight={"300"}
         
           color={"white"}
           colorScheme="black"
          
        
         onClick={EditProduct}>
              SUBMIT
            </Button>
          </Stack>
        </Box>
        </Flex>
     
      </Box>
        <Box >
          <SimpleGrid
          mt={"30px"}
         
            spacing={10}
            columns={[1, 2,3]}
            // m={"80px auto"}
            w={"100%"}
          >
            {data?.map((el) => (
              <AdminProductCard key={el.id} data={el} deleteProduct={deleteProduct} handleEdit={handleEdit}/>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

// const DIV = styled.div`
//   // Your styles here
// `;

