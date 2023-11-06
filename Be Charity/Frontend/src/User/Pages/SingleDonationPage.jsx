import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
    Box,
    Heading,
    Image,
    Icon,
    Button,
    Stack,
    Progress,
    Text,
    Flex,
    Divider,
    useToast,
} from '@chakra-ui/react';
import { GoDotFill} from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import { IoIosPricetags } from 'react-icons/io';
import Navbar from '../Components/Navbar';
import BGImage from "../Assests/ngo2-sectionbg2.png"
import { IoPricetagsOutline } from 'react-icons/io5';
import Footer from '../Components/Footer';
import { PaymentModel } from '../Components/PaymentModel';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProductData } from '../Redux/Donation/action';

const SingleDonationPage = () => {
    const dispatch=useDispatch();
    const el=useSelector((store)=>(store.DonationReducer.singleProduct))
    const organizer=useSelector((store)=>(store.DonationReducer.organizer))
    const payment=useSelector((store)=>(store.DonationReducer.payment))
   
const isAuth=useSelector((store)=>(store.AuthReducer.isAuth))
    const [SignOpen, setSignOpen] = useState(false);
  
    function SignClose() {
      setSignOpen(!SignOpen);
    }

    let { id } = useParams();

let toast=useToast()
useEffect(()=>{
dispatch(getSingleProductData(id));
},[])

// if(loading){
//     return <Text>Loading...</Text>
// }

    return (
        <>
        
            <Box   fontFamily={"Poppins"}  color={"black"}      style={{
          backgroundImage: `url('${BGImage}')`,
          backgroundSize: "cover",
          height: "720px",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
        }}>
                <Navbar />
           
            <Box marginTop="50px" >
         
        <Box >
        <Text fontWeight={'500'} w={"77%"}  m={"auto"} fontSize={["30","45"]} mb={"20px"} lineHeight={"60px"}   fontFamily={'DM Serif Display'}>{el?.title}</Text>
        </Box>
        </Box>

      
              
            
            
            <Box display="flex" flexDirection={["column","row"]}  w={["100%","90%"]} m={"auto"}  >
                <Box width="100%" marginLeft={["5px","90px"]}>
                    <Box width="100%">
                        <Image
                            src={el.image}
                            alt=""
                            width={["90%","100%"]}
                   
                        />
                        <br />
                     
                        <Stack direction={["column","row"]} alignItems="center">
                            <Text color={"#666666"}  letterSpacing={"0.2px"}   fontWeight={"400"}>Organized By {organizer?.name}</Text><RxDotFilled />
                          
                           <Icon as={IoPricetagsOutline} />
                            <Text textTransform={"capitalize"} color={"#666666"} letterSpacing={"0.2px"} fontWeight={"400"} m={"5•x 0"} size="md">{el?.category}</Text>
                           
                            
                        </Stack>
                        <Divider  borderColor={"#c8c8c8"} mt={"20px"}/>
                        <br />
                      
                        <Text  color={"#666666"} fontWeight={"300"}>
                           {el?.description}
                        </Text>
                        <br />
                        <Text  color={"#666666"} fontWeight={"300"}>
                        Donate here - any amount will help. Even $5 can help towards providing essentials to people in need in Acapulco right now.
<br /><br />
If you're not in a place to donate, you can still help in a huge way by sharing this fundraiser link with your friends, family, and network.
<br /><br />
                            Any contributions will be appreciated and will go towards our
                            costumes, set, props, etc.
                        </Text>
                      <br />
                    
                        <Button
          mt={"10px"}
          w={"100%"}
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={  "#f7b70d"}
                onClick={()=>{if(isAuth){
                    
                    setSignOpen(!SignOpen)
                  
                }else{  
                    toast({
                        title: "Kindly Login.",
                        position: "top",
                        description: "To contribute us.",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      });
                     
                }
                  
                   }}
                _hover={{ bgColor: "#79ab2f" }}
                color={"white"}
                colorScheme="black"
              >
                DONATE US
              </Button>
   
              <Divider  borderColor={"#c8c8c8"} mt={"35px"}/>
                
                        <br />
                  
                        <Stack>
                            <Text fontWeight={'500'}  fontSize={28} letterSpacing={"1px"}   fontFamily={'DM Serif Display'}>Organizer</Text>
                        </Stack>
                        <br />
                        <Box >
                            <Flex direction="row" justifyContent={"flex-start"} >
                                <Box  w={"7%"}>
                                <Image  
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rz3q1lfopq69ghm40bt3.png"
                                    alt=""
                                   
                                />
                                </Box>
                                
                                <Box ml={"20px"} >
                               
                                    <Text fontWeight={"400"} fontSize={20}>{organizer?.name}</Text>
                                    <Text color={"#666666"} fontSize={16} fontWeight={"300"}>Volunteer</Text>
                                    <Text color={"#666666"} fontSize={16} fontWeight={"300"}>{organizer?.city}</Text>
                                </Box>
                            </Flex>
                            
                        </Box>
                        
              <Divider  borderColor={"#c8c8c8"} m={"25px 0"}/>
                        <Stack>
                            <Text fontWeight={'500'}  fontSize={28} letterSpacing={"1px"}   fontFamily={'DM Serif Display'}>Beneficiary</Text>
                        </Stack>
                        <br />
                        <Box >
                            <Flex direction="row" justifyContent={"flex-start"} >
                                <Box  w={"7%"} >
                                <Image  borderRadius={"50%"}
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6gxvab05plbwut9coh0n.png"
                                    alt=""
                                   
                                />
                                </Box>
                                
                                <Box ml={"20px"} >
                               
                                    <Text fontWeight={"400"} fontSize={20}>{el.beneficiary?.name}</Text>
                                    <Text color={"#666666"} fontSize={16} fontWeight={"300"}>{el.beneficiary?.location}</Text>
                                    <Text color={"#666666"} fontSize={16} fontWeight={"300"}>{el.beneficiary?.story}</Text>
                                </Box>
                            </Flex>
                            
                        </Box>
                       
                    </Box>
                </Box> 
                <Box 
                    marginLeft={["10px","50px"]}
                    marginRight={["10px","60px"]}
                    // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    height={["700px","600px"]}
                >
                    <Box   marginLeft="30px" marginRight="30px" marginTop="30px">
                        <Text >
                            <span style={{ fontSize: "22px" }}>${el?.current_funds}</span> USD Raised of ${el?.goal}
                      
                        </Text>
                        
                        <Progress m={"20px 0"} value={el?.current_funds} max={el?.goal} colorScheme="green" minW="10" />
                        <Divider  borderColor={"#c8c8c8"} m={"25px 0px"}/>
                  <Button
          
          w={"100%"}
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={  "#f7b70d"}
                onClick={()=>{if(isAuth){
                    
                    setSignOpen(!SignOpen)
                
                }else{
                    
                    toast({
                        title: "Kindly Login.",
                        position: "top",
                        description: "To contribute us.",
                        status: "info",
                        duration: 2000,
                        isClosable: true,
                      });
                }
                  
                   }}
                _hover={{ bgColor: "#79ab2f" }}
                color={"white"}
                colorScheme="black"
              >
                DONATE US
              </Button>
              {SignOpen && <PaymentModel 
            onOpens={SignOpen} 
            LetClose={SignClose} />}
              <Divider  borderColor={"#c8c8c8"} mt={"25px"}/>
                        <br />
          
                        <Stack direction="row" alignItems="center">
                            <Image
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pao0wirnog4e1e73utnx.png"
                                alt=""
                                borderRadius={"50%"}
                                width="15%"
                            />
                            <Text fontSize="22" m={"0 5px"}  letterSpacing={"1px"} fontWeight={"600"} fontFamily={'DM Serif Display'}>
                                {payment?.length} People Donated
                            </Text>
                        </Stack>
                        <br />
                 
                           
                       
                           
                            
                            <Box  >
                                {payment?.map(el=>{
                                    return <>
                                     <Flex m={"20px auto"}>
                                          <Image
  
  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6xfxq7dt7mye8686nbcj.png"
  alt="Friendly Image"
  width="15%"
  borderRadius="50%"  // Adding rounded corners for a softer look
  // boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"  // Adding a soft drop shadow
/>

                           
                              <Box marginLeft="15px">
                                  <Text>{el.Username}</Text>
                                  <Text>${el.money}</Text>
                              </Box>
                              </Flex>
                                    </>
                                })}
                               
                          
                              
                            

                            </Box>
                            <br />
                        
                        <br />
                        <br />
                       
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
           
       
    
      <Footer />
      </Box></>
    );
};

export default SingleDonationPage;
