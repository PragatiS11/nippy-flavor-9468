
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Center,
  Heading,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginMenu from './LoginMenu';
import { useSelector } from 'react-redux';

const NAV_ITEMS = [
  {
    label: 'Home',
 href:"/"
  },
  {
    label: 'About Us',
    href:"/about-us"
  },
  {
    label: 'Donate Us',
    href:"/donate-us"
  },
  {
    label: 'Volunteers',
    href:"/volunteers"
  },
  {
    label: 'Contact',
    href:"/contact"
  }
];

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const data=useSelector((store)=>(store.AuthReducer))
const Navigate=useNavigate();
  return (
    <Box  id='nav'>
      <Flex    w={["100%","100%","95%"]} m={"auto"}
        bg={"transparent"}
  
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}

        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex w={["100%","100%","70%"]} alignItems={"center"} justifyContent={useBreakpointValue(['center','center', 'flex-start' ])} >
          <Box w={["60%","40%","25%"]}>
          <Box 
            textAlign={useBreakpointValue(['center','center', 'left' ])} 
            margin={"10px 0"} onClick={()=>Navigate("/")} > 
            <img style={{width:"80%"}} src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/retina-ngo2.png" alt="" />
            </Box>
          
          </Box>
         
           
         
<Flex w={"80%"} justifyContent={"space-around"} alignItems={"center"} display={useBreakpointValue({base:"none",md:"flex"})}>
{NAV_ITEMS?.map((el,ind)=>{
return <>
  <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href={el.href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          color: linkHoverColor,
      textDecoration: 'none',
      transform: 'scale(1.2)', 
          
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={600}  ml={"20px"} color={linkColor}  
             _hover={{
                      color: linkHoverColor,
                        transition: 'color 0.3s ease'
                    }}
                  
                    >
          {el.label}
        </Text>
         
          </Box>
       
      </Box>
    </Stack>
</>
})}
{data?.userData?.isVolunteers && <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href="/volunteers/donation"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={400}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                     
                    }}
                  
                    >
          Fundraising
        </Text>
         
          </Box>
       
      </Box>
    </Stack>}
  {data?.userData?.isAdmin && <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href="/admin"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={400}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
          Admin
        </Text>
         
          </Box>
       
      </Box>
    </Stack>}
</Flex>
          
        </Flex>
        <Box m={"auto"} mr={"150px"}  display={{ base: 'none', md: 'inline-flex' }} >
   
      
</Box>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={1}
          >

            {/* <Link to="/admin"> 
              <Button 
               display={{ base: 'none', md: 'inline-flex' }}
                variant={'link'}>
            <Image src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-wishlist.svg'  w={["45%","55%"]} >

            </Image></Button>
            </Link> */}
            {/* <Link to="#" te> Wrap the button with a Link component */}
     
        {/* <Image
          src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
          w={["15%","15%", "55%"]}
          alt="User Icon" // Add an alt attribute for accessibility
        /> */}
        <LoginMenu />
     
    {/* </Link> */}


        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
     
    </Box>
  )
}



const MobileNav = () => {
  const data=useSelector((store)=>(store.AuthReducer))
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
  {data?.userData?.isAVolunteers && <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href="/volunteer/donation"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={400}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
         Fundraising
        </Text>
         
          </Box>
       
      </Box>
    </Stack>}
  {data?.userData?.isAdmin && <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href="/admin"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={400}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
          Admin
        </Text>
         
          </Box>
       
      </Box>
    </Stack>}
    </Stack>
  )
}
const linkColor = 'black';
const linkHoverColor = '#7fb432';
const MobileNavItem = ({ label, href,src }) => {
 

  return (
    <Stack spacing={4} >
      <Box
     bg={"transparent"}
        py={2}
        as="a"
        href={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
           
           
            <Text fontWeight={600}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
          {label}
        </Text>
            {/* </Box> */}
          </Box>
       
      
      </Box>
    </Stack>
  )
}













