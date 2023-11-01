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
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginMenu from './LoginMenu';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

const Navigate=useNavigate();
  return (
    <Box  fontFamily={"Poppins"} mt={[0,"5px"]}>
      <Flex   w={["100%","100%","95%"]} m={"auto"}
        bg={"white"}
  
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
         
           
         
<Flex w={"80%"} justifyContent={"space-evenly"} alignItems={"center"} display={useBreakpointValue({base:"none",md:"flex"})}>
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
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
          
        
            <Text fontWeight={400}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
          {el.label}
        </Text>
         
          </Box>
       
      </Box>
    </Stack>
</>
})}
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
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
const linkColor = 'black';
const linkHoverColor = '#7fb432';
const MobileNavItem = ({ label, href,src }) => {
 

  return (
    <Stack spacing={4} >
      <Box
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






const NAV_ITEMS = [
  {
    label: 'Home',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category1.svg',
 href:"/Chairs"
  },
  {
    label: 'Who we are',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category2.svg',
    href:"/Beds"
  },
  {
    label: 'What we do',
    href:"/Tables",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category3.svg',
  },
  {
    label: 'Stories',
    href:"/Desks",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category4.svg',
  },
  {
    label: 'Voluntears',
    href:"/Cabinets",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category5.svg',
  },
  {
    label: 'Contact',
    href:"/Lighting",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category6.svg',
  }
];