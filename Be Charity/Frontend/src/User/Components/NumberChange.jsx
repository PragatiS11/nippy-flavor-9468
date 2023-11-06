import { Text, SimpleGrid, Box, Image, Flex, Stack } from '@chakra-ui/react';
import CountUp from 'react-countup';



const statData = [
  {
    id: 1,
    label: 'Clients',
    score: 16000,
    start:"",
    end:"kg",
    link:"https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-whatwedo-icon1.png"
  },
  {
    id: 2,
    label: 'Projects',
    score: 2,
    start:"",
    end:"mln",
    link:"https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-whatwedo-icon2.png"
  },
  {
    id: 3,
    label: 'Revenue',
    start:"",
    score: 1692,
    end:"",
    link:"https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-whatwedo-icon3.png"
  },  {
    id: 3,
    label: 'Revenue',
    start:"",
    score: 130,
    end:"",
    link:"https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-whatwedo-icon4.png"
  }
];

const NumberChange = () => {
  return (
    <Stack  w={"80%"} direction={{ base: 'column', md: 'row' }} m={"100px auto"} fontFamily={"Poppins"} color={"black"}>
     
      <Flex p={8}  w={"60%"} align="center" justify="center" color={"black"}>
        <Flex direction="column">
          <Text fontWeight="500" fontSize={["40","52"]} mb={2}>
            <Box  display="inline-block" position="relative" fontWeight={'500'} fontSize={"55"} lineHeight={"55px"}  fontFamily={'DM Serif Display'}>
            BeCharity in numbers
            
            </Box>
          </Text>
          <Text color={"#666666"} fontWeight={'300'} fontSize={"15px"} mt={"15px"}>
          Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum diam.       </Text>
          <SimpleGrid  columns={{ base: 2, sm: 2, md: 2 }} spacing={0} mt={10} mb={4} w={["100%","90%"]}>
            {statData.map((data) => (
              <Box fontFamily={'DM Serif Display'} key={data.id}
              height={["250px","200px"]}
              p={{ base: 2, sm: 4 }} style={{
                backgroundImage: `url('${data.link}')`,
                backgroundSize: "25%",
           
                backgroundRepeat: "no-repeat"
              }}>
   
                 <CountUp  style={{ fontWeight:"500",fontSize:40,textAlign:"left",marginRight:"10px",fontFamily:"DM Serif Display"}}  end={data.score} enableScrollSpy >
                
                </CountUp>
                <span style={{ fontWeight:"500",fontSize:40,fontFamily:"DM Serif Display"}}>{data.end}</span>
                <Text color={"#666666"} fontWeight={'300'} fontSize={"15px"} mt={"15px"} textAlign={"left"} >Vivamus in diam turpis maximus tristique</Text>
            
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Box  >
        <Image alt="Cover image" w={"100%"}  src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-home-pic5.jpg" />
      </Box>
    </Stack>
  );
};

export default NumberChange