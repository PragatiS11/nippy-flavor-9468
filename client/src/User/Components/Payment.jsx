import React, { useState } from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Spacer,
  Input,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { Tabs, TabList, TabPanels, Tab, Heading, TabPanel, TabIndicator, Text, SimpleGrid } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { PaymentAddRequest } from '../Utilis/api';

const Payment = () => {
  const toast = useToast()
  const data=useSelector((store)=>(store.DonationReducer))
const userData=useSelector((store)=>(store.AuthReducer))

  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = useState("");

  const cardInitialState = {

    cardNumber: '',
    cvv: '',
    expiryDate: '',
  };

  const upiInitialState = {
  
    UPIid: '',
    UPIpassword: '',
  };

  const netbankInitialState = {
  
    NBid: '',
    NBpassword: '',
  };

  const [cardmeth, setCardmeth] = useState({ ...cardInitialState });
  const [upimeth, setUpimeth] = useState({ ...upiInitialState });
  const [netmeth, setNetmeth] = useState({ ...netbankInitialState });

  const handleClick = () => {
    setShow(!show);
  };

  let Navigate = useNavigate();


  function HandleSubmit(obj) {

    
    PaymentAddRequest(obj).then(res=>{
    toast({
        title: 'Payment Successfully!',
        description: "Thank You For Donating Us.",
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
Navigate("/");
})
  }

  const handleCreditCard = (e) => {
    e.preventDefault();
    if(amount){
      let t=+amount+data.singleProduct.current_funds;
      let obj={
        user_id:userData.userData._id,
        money:amount,
        donation_id:data.singleProduct._id,
        Username:userData.userData.name,
        Donation_name:data.singleProduct.title,
        Time:Date(),
        payment_type:"Credit Card",
        payment_detail:cardmeth,
        totalDonation:t,
        email:userData.userData.email,
           }
      HandleSubmit(obj);
    }else{
      toast({
        title: "Enter Donation Amount!",
        position: 'top',
        description: "Join With Us To Help.",
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
    }
 
   
  };

  const handleUpi = (e) => {
    e.preventDefault();
    if(amount){
      let t=+amount+data.singleProduct.current_funds;
      let obj={
        user_id:userData.userData._id,
        money:amount,
        donation_id:data.singleProduct._id,
        Username:userData.userData.name,
        Donation_name:data.singleProduct.title,
        Time:Date(),
        payment_type:"UPI",
        payment_detail:upimeth,
        totalDonation:t,
        email:userData.userData.email,
      }
      HandleSubmit(obj);
    }else{
      toast({
        title: "Enter Donation Amount!",
        position: 'top',
        description: "Join With Us To Help.",
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
    }


  };

  const handleNetBanking = (e) => {
    e.preventDefault();
    if(amount){
      let t=+amount+data.singleProduct.current_funds;
      
      let obj={
        user_id:userData.userData._id,
        money:+amount,
        donation_id:data.singleProduct._id,
        Username:userData.userData.name,
        Donation_name:data.singleProduct.title,
        Time:Date(),
        payment_type:"Net Banking",
        payment_detail:netmeth,
        totalDonation:t,
        email:userData.userData.email,
      }
      HandleSubmit(obj);
    }else{
      toast({
        title: "Enter Donation Amount!",
        position: 'top',
        description: "Join With Us To Help.",
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
    }

  
  };

  return (
    <>
      <InputGroup m="auto" mt={5} mb={8} w="80%"  >
        <InputLeftElement pointerEvents="none" color="black" fontSize="1.2em" children="$" />
        <Input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
     
          fontSize="20"
          textAlign="right"
          fontWeight="600"
          required
          placeholder="Enter Donation Amount"
        />
        <InputRightElement pointerEvents="none" color="black" fontSize="18" children=".00" />
      </InputGroup>
      <Box fontFamily="poppins" color="black" w="100%" m="auto" mt="10px">
        <Tabs isFitted variant="unstyled">
          <TabList mb="1em">
            <Tab>Card Payment</Tab>
            <Tab>UPI Payment</Tab>
            <Tab>Net Banking</Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2.5px" bg="#79ab2f" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <Stack direction="column" w={350} m="auto" textAlign="center" placeItems="center">
                <form action="" onSubmit={handleCreditCard}>
                  <Input
                    size="lg"
                    type="number"
                    variant="flushed"
                    borderBottom="2px solid black"
                    mt={5}
                    required
                    placeholder="Card Number"
                    value={cardmeth.cardNumber}
                    onChange={(e) => setCardmeth({ ...cardmeth, cardNumber: e.target.value })}
                  />
                  <SimpleGrid columns={2}>
                    <Input
                      size="lg"
                      type="number"
                      variant="flushed"
                      borderBottom="2px solid black"
                      mt={7}
                      w="95%"
                      required
                      placeholder="Expiry Year"
                      value={cardmeth.expiryDate}
                      onChange={(e) => setCardmeth({ ...cardmeth, expiryDate: e.target.value })}
                    />
                    <Input
                      size="lg"
                      type="number"
                      variant="flushed"
                      borderBottom="2px solid black"
                      mb={8}
                      w="95%"
                      mt={7}
                      ml={5}
                      required
                      placeholder="CVV"
                      value={cardmeth.cvv}
                      onChange={(e) => setCardmeth({ ...cardmeth, cvv: e.target.value })}
                    />
                  </SimpleGrid>
                  <Button
                    h="50px"
                    type="submit"
                    w={{ base: 130, md: 250 }}
                    mt={5}
                    letterSpacing="2px"
                    borderRadius="0"
                    fontWeight="300"
                    bg="#79ab2f"
                    _hover={{ bgColor: "#f7b70d" }}
                    color="white"
                    colorScheme="black"
                  >
                    SUBMIT
                  </Button>
                </form>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack direction="column" m="auto" textAlign="center" placeItems="center">
                <form action="" onSubmit={handleUpi}>
                  <Input
                    mt={5}
                    variant="flushed"
                    borderBottom="2px solid black"
                    size="lg"
                    type="text"
                    required
                    placeholder="UPI ID"
                    value={upimeth.UPIid}
                    onChange={(e) => setUpimeth({ ...upimeth, UPIid: e.target.value })}
                  />
                  <InputGroup mt={7} variant="flushed" borderBottom="1px solid black" size="lg" type="text" required placeholder="UPI ID">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Password" required 
                    value={upimeth.UPIpassword}
                    onChange={(e) => setUpimeth({ ...upimeth, UPIpassword: e.target.value })}/>
                    <InputRightElement width="4.5rem" onClick={handleNetBanking}>
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    h="50px"
                    type="submit"
                    w={{ base: 130, md: 250 }}
                    mt={12}
                    letterSpacing="2px"
                    borderRadius="0"
                    fontWeight="300"
                    bg="#79ab2f"
                    _hover={{ bgColor: "#f7b70d" }}
                    color="white"
                    colorScheme="black"
                  >
                    SUBMIT
                  </Button>
                </form>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack direction="column" m="auto" textAlign="center" placeItems="center">
                <form action="" onSubmit={handleNetBanking}>
                  <Input
                    size="lg"
                    type="text"
                    variant="flushed"
                    borderBottom="2px solid black"
                    mt={5}
                    required
                    placeholder="User Name"
                    value={netmeth.NBid}
                    onChange={(e) => setNetmeth({ ...netmeth, NBid: e.target.value })}
                  />
                  <InputGroup size="lg" mt={7} variant="flushed" borderBottom="1px solid black">
                    <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Password" required 
                    value={netmeth.NBpassword}
                    onChange={(e) => setNetmeth({ ...netmeth, NBpassword: e.target.value })}/>
                    <InputRightElement width="4.5rem" onClick={handleClick}>
                      {show ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    h="50px"
                    type="submit"
                    w={{ base: 130, md: 250 }}
                    mt={12}
                    letterSpacing="2px"
                    borderRadius="0"
                    fontWeight="300"
                    bg="#79ab2f"
                    _hover={{ bgColor: "#f7b70d" }}
                    color="white"
                    colorScheme="black"
                  >
                    SUBMIT
                  </Button>
                </form>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Payment;
