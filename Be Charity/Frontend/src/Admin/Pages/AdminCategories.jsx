// import React from "react";

// const AdminCategories = () => {
//   return <div>AdminCategories</div>;
// };

// export default AdminCategories;
import React from "react";
import {
  Box,
  Badge,
  SimpleGrid,
  Container,
  Image,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";
import AdminProductCard from "../Components/AdminPRoductCard";

  import { Products } from "./AdminDonation";



const AdminCategories = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <Heading m={"10px auto"} textAlign={"center"} fontFamily={"DM Serif Display"}>Donations</Heading>
 <Products />
    </Container>
  );
};

export default AdminCategories;
