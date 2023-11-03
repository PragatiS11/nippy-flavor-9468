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
} from "@chakra-ui/react";

const dataList = [
  {
    id: 1,
    title: "Healthy Food",
    destination: "Africa",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "https://i.ibb.co/ZKphmt2/food-health.jpg",
  },
  {
    id: 2,
    title: "Pure Water",
    destination: "Africa",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "https://i.ibb.co/YdX4TVC/purewater.jpg",
  },
  {
    id: 3,
    title: "Education",
    destination: "Africa",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "https://i.ibb.co/3MQ4wxC/education.jpg",
  },
  {
    id: 4,
    title: "Medical Care",
    destination: "Africa",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "https://i.ibb.co/Ycdgcvn/health.png",
  },
];

const AdminCategories = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <Text
        textAlign={"center"}
        fontSize={"35px"}
        fontWeight={"bold"}
        bg="white"
        px="4"
      >
        Categories
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
              <Box
                fontSize="sm"
                position="absolute"
                right="5px"
                margin="5px"
                zIndex="1"
              >
                <Badge rounded="full" p="2px 8px" colorScheme="red" as="button">
                  Delete
                </Badge>
              </Box>
              <Link to="#">
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src={blog.image}
                    style={{ width: "100%", height: "250px" }}
                    alt="Blog image"
                  />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {blog.title}
                      </Box>
                    </Box>
                    <Box>
                      <Box color="gray.600" fontSize="sm">
                        <Badge rounded="full" px="2" colorScheme="teal">
                          {blog.destination}
                        </Badge>
                      </Box>
                    </Box>
                    <Text
                      mt="1"
                      fontWeight="semibold"
                      noOfLines={3}
                      lineHeight="tight"
                      color="gray.600"
                      fontSize="sm"
                    >
                      {blog.description}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default AdminCategories;
