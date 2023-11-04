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
import { DonationSingleRequest, GetDataByUserId } from '../Utilis/api';
import { useParams } from 'react-router-dom';

const SingleDonationPage = () => {
    const [SignOpen, setSignOpen] = useState(false);
    let { id } = useParams();
    function SignClose() {
      setSignOpen(!SignOpen);
    }
    let [flags,setFlags]=React.useState(true)
let [el,setEl]=React.useState("");
let [organizer,setOrganizer]=React.useState({});
let [loading,setLoading]=React.useState(false)

function HandleOrganizer(){
    let id=el.organizer;

    GetDataByUserId(id).then(res=>{
        setOrganizer(res.data)
    })
}
let isAuth=Cookies.get("User-token") || false;
let toast=useToast()
useEffect(()=>{
setLoading(true)
if(el){
    if(organizer){
        setLoading(false)
    }else{
        HandleOrganizer();
        setLoading(false)
    }
   

   
} else{
    DonationSingleRequest(id).then(res=>{
// console.log(res.data)
      setEl(res.data)
   
    })
}
    
},[el,flags])

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
        <Text fontWeight={'500'} w={"77%"}  m={"auto"} fontSize={["30","45"]} mb={"20px"} lineHeight={"60px"}   fontFamily={'DM Serif Display'}>{el.title}</Text>
        </Box>
        </Box>

      
              
            
            
            <Box display="flex"  w={"90%"} m={"auto"}  >
                <Box width="100%" marginLeft="90px">
                    <Box width="100%">
                        <Image
                            src={el.image}
                            alt=""
                            width="100%"
                   
                        />
                        <br />
                     
                        <Stack direction="row" alignItems="center">
                            <Text color={"#666666"}  letterSpacing={"0.2px"}   fontWeight={"400"}>Organized By {organizer.name}</Text><RxDotFilled />
                            <Icon as={IoPricetagsOutline} />
                            <Text textTransform={"capitalize"} color={"#666666"} letterSpacing={"0.2px"} fontWeight={"400"} m={"5•x 0"} size="md">{el.category}</Text>
                        </Stack>
                        <Divider  borderColor={"#c8c8c8"} mt={"20px"}/>
                        <br />
                      
                        <Text  color={"#666666"} fontWeight={"300"}>
                           {el.description}
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
                    setFlags(!flags)
                    setSignOpen(!SignOpen)
                  
                }else{  setFlags(!flags)
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
                        {/* <Stack
                            direction="row"
                            alignItems="center"
                            padding="30px"
                            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        >
                            <Image
                                src="https://www.gofundme.com/_next/static/images/lending-hand-7f6fe1e24df6a1af9c53c6c41e31460e.svg"
                                alt=""
                                width="100px"
                            />
                          
                        </Stack> */}
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
                        {/* <br />
         
                        <br />
                        <br />
                        <Stack>
                            <Heading>Words of support</Heading>
                            <br />
                            <Text>Please donate to share words of support.</Text>
                        </Stack>
                        <br />
                        <Box width="40%">
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                        </Box>*/}
                    </Box>
                </Box> 
                <Box 
                    marginLeft="50px"
                    marginRight="90px"
                    // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    height="600px"
                >
                    <Box   marginLeft="30px" marginRight="30px" marginTop="30px">
                        <Text >
                            <span style={{ fontSize: "22px" }}>${el.current_funds}</span> USD Raised of ${el.goal}
                      
                        </Text>
                        
                        <Progress m={"20px 0"} value={el.current_funds} max={el.goal} colorScheme="green" minW="10" />
                        <Divider  borderColor={"#c8c8c8"} m={"25px 0px"}/>
                  <Button
          
          w={"100%"}
          letterSpacing={"2px"}
                borderRadius={"0"}
                fontWeight={"300"}
                bg={  "#f7b70d"}
                onClick={()=>{if(isAuth){
                    setFlags(!flags)
                    setSignOpen(!SignOpen)
                
                }else{
                    setFlags(!flags)
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
                                {el.donators?.length} People Donated
                            </Text>
                        </Stack>
                        <br />
                 
                           
                       
                           
                            
                            <Stack direction="row" alignItems="center">
                            
  <Image
  
    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6xfxq7dt7mye8686nbcj.png"
    alt="Friendly Image"
    width="15%"
    borderRadius="50%"  // Adding rounded corners for a softer look
    // boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"  // Adding a soft drop shadow
  />

                             
                                <Box marginLeft="15px">
                                    <Text>Belle Segev</Text>
                                    <Text>$50</Text>
                                </Box>
                            </Stack>
                            <br />
                        
                        <br />
                        <br />
                        {/* <Stack direction="row" alignItems="center">
                            <Button
                                width="100px"
                                border="1px solid black"
                                borderRadius="10px"
                                height="30px"
                            >
                                See all
                            </Button>
                            <Button
                                width="200px"
                                border="1px solid black"
                                borderRadius="10px"
                                marginLeft="20px"
                                height="30px"
                            >
                                See Top Donations
                            </Button>
                        </Stack> */}
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
            {/* <Box
                width="100%"
                margin="auto"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                padding="40px"
                backgroundColor="#fbf8f6"
            >
                <Heading
                    width="90%"
                    display="flex"
                    alignItems="center"
                    marginLeft="30px"
                >
                    Your easy, powerful, and trusted home for help
                </Heading>
                <br />
                <br />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    marginBottom="40px"
                    margin="auto"
                    width="90%"
                
                >
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/airplane-9305a2f0bb1f5e5f1bd6e1004710849c.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Easy</b>
                            </Text>
                            <Text>Donate quickly and easily.</Text>
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/phone-86989a47af72222c56e87fd35dbf162a.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Powerful</b>
                            </Text>
                            <Text>Send help right to the people and causes you care about.</Text>
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/guarantee-927e0717c5b84eeb69c8542fbb6adfb6.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Trusted</b>
                            </Text>
                            <Text>
                                Your donation is protected by the{' '}
                                <a style={{ textDecoration: 'underLine' }} href="#">
                                    BeCharity Giving Guarantee
                                </a>
                                .
                            </Text>
                        </Box>
                    </Stack>
                </Stack>

            </Box> */}
       
        
     
        <Box fontFamily={"Poppins"}   m={"100px"} mt={"50px"} style={{
      backgroundImage: `url('https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-wrapbg1.jpg')`,
      backgroundSize: "cover",
   height:"450px",
  backgroundAttachment:"fixed",
      backgroundRepeat: "no-repeat"
    }}>
     
      <Flex textAlign={"center"} justifyContent={"center"} alignItems={"center"}  h={"450px"} >
        <Box>
        <Text fontWeight={'500'} fontSize={"55"} lineHeight={"55px"} color={"white"} fontFamily={'DM Serif Display'}>We can't help everyone, <br />
but everyone can help someone.</Text>
<Box m={"auto"}>
<Button m={"30px 10px"} borderRadius={"0"}  fontWeight={'300'} bg={"#df8c09"} color={"white"} colorScheme='black'>Donate Us</Button>
      <Button m={"30px 10px"} borderRadius={"0"}  fontWeight={'300'} bg={"#79ab2f"} color={"white"} colorScheme='black'>Become a Voluntear</Button>
      </Box>  </Box>
     

      </Flex>

      </Box>
      <Footer />
      </Box></>
    );
};

export default SingleDonationPage;
