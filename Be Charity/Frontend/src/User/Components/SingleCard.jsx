import * as React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import RepositoryCard from './Card';
import { DonationRequest } from '../Utilis/api';



const OfflineData = () => {
    let [data,setData]=React.useState([]);
let [loading,setLoading]=React.useState(false)
React.useEffect(()=>{
setLoading(true)
    DonationRequest().then(res=>{
// console.log(res.data)
      setData(res.data)
    setLoading(false)
    })

},[])
  return (
    <Container maxW="7xl" p="5" mx="auto">
      <SimpleGrid columns={[1,2,3]} spacing={8} mt={8}>
        {data?.map((el, index) => (
          <RepositoryCard
            key={index}
            title={el.title}
            description={el.description}
            cover={el.image}
        category={el.category}
          donators={el.donators}
            stargazers_count={el.goal}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OfflineData;