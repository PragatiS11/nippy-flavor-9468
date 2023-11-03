import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const AdminUsers = () => {
  const [params, setSearchParams] = useSearchParams();
  console.log(params);
  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const userData = [
    {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874",
      },
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "john",
        lastname: "doe",
      },
      phone: "1-570-236-7033",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "Lovers Ln",
        number: 7267,
        zipcode: "12926-3874",
      },
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
      name: {
        firstname: "david",
        lastname: "morrison",
      },
      phone: "1-570-236-7033",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.3467",
          long: "-30.1310",
        },
        city: "Cullman",
        street: "Frances Ct",
        number: 86,
        zipcode: "29567-1452",
      },
      id: 3,
      email: "kevin@gmail.com",
      username: "kevinryan",
      password: "kev02937@",
      name: {
        firstname: "kevin",
        lastname: "ryan",
      },
      phone: "1-567-094-1345",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "50.3467",
          long: "-20.1310",
        },
        city: "San Antonio",
        street: "Hunters Creek Dr",
        number: 6454,
        zipcode: "98234-1734",
      },
      id: 4,
      email: "don@gmail.com",
      username: "donero",
      password: "ewedon",
      name: {
        firstname: "don",
        lastname: "romer",
      },
      phone: "1-765-789-6734",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.3467",
          long: "-40.1310",
        },
        city: "san Antonio",
        street: "adams St",
        number: 245,
        zipcode: "80796-1234",
      },
      id: 5,
      email: "derek@gmail.com",
      username: "derek",
      password: "jklg*_56",
      name: {
        firstname: "derek",
        lastname: "powell",
      },
      phone: "1-956-001-1945",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "20.1677",
          long: "-10.6789",
        },
        city: "el paso",
        street: "prospect st",
        number: 124,
        zipcode: "12346-0456",
      },
      id: 6,
      email: "david_r@gmail.com",
      username: "david_r",
      password: "3478*#54",
      name: {
        firstname: "david",
        lastname: "russell",
      },
      phone: "1-678-345-9856",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "10.3456",
          long: "20.6419",
        },
        city: "fresno",
        street: "saddle st",
        number: 1342,
        zipcode: "96378-0245",
      },
      id: 7,
      email: "miriam@gmail.com",
      username: "snyder",
      password: "f238&@*$",
      name: {
        firstname: "miriam",
        lastname: "snyder",
      },
      phone: "1-123-943-0563",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "50.3456",
          long: "10.6419",
        },
        city: "mesa",
        street: "vally view ln",
        number: 1342,
        zipcode: "96378-0245",
      },
      id: 8,
      email: "william@gmail.com",
      username: "hopkins",
      password: "William56$hj",
      name: {
        firstname: "william",
        lastname: "hopkins",
      },
      phone: "1-478-001-0890",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      id: 9,
      email: "kate@gmail.com",
      username: "kate_h",
      password: "kfejk@*_",
      name: {
        firstname: "kate",
        lastname: "hale",
      },
      phone: "1-678-456-1934",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "30.24788",
          long: "-20.545419",
        },
        city: "fort wayne",
        street: "oak lawn ave",
        number: 526,
        zipcode: "10256-4532",
      },
      id: 10,
      email: "jimmie@gmail.com",
      username: "jimmie_k",
      password: "klein*#%*",
      name: {
        firstname: "jimmie",
        lastname: "klein",
      },
      phone: "1-104-001-4567",
      __v: 0,
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874",
      },
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "john",
        lastname: "doe",
      },
      phone: "1-570-236-7033",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "Lovers Ln",
        number: 7267,
        zipcode: "12926-3874",
      },
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
      name: {
        firstname: "david",
        lastname: "morrison",
      },
      phone: "1-570-236-7033",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.3467",
          long: "-30.1310",
        },
        city: "Cullman",
        street: "Frances Ct",
        number: 86,
        zipcode: "29567-1452",
      },
      id: 3,
      email: "kevin@gmail.com",
      username: "kevinryan",
      password: "kev02937@",
      name: {
        firstname: "kevin",
        lastname: "ryan",
      },
      phone: "1-567-094-1345",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "50.3467",
          long: "-20.1310",
        },
        city: "San Antonio",
        street: "Hunters Creek Dr",
        number: 6454,
        zipcode: "98234-1734",
      },
      id: 4,
      email: "don@gmail.com",
      username: "donero",
      password: "ewedon",
      name: {
        firstname: "don",
        lastname: "romer",
      },
      phone: "1-765-789-6734",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.3467",
          long: "-40.1310",
        },
        city: "san Antonio",
        street: "adams St",
        number: 245,
        zipcode: "80796-1234",
      },
      id: 5,
      email: "derek@gmail.com",
      username: "derek",
      password: "jklg*_56",
      name: {
        firstname: "derek",
        lastname: "powell",
      },
      phone: "1-956-001-1945",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "20.1677",
          long: "-10.6789",
        },
        city: "el paso",
        street: "prospect st",
        number: 124,
        zipcode: "12346-0456",
      },
      id: 6,
      email: "david_r@gmail.com",
      username: "david_r",
      password: "3478*#54",
      name: {
        firstname: "david",
        lastname: "russell",
      },
      phone: "1-678-345-9856",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "10.3456",
          long: "20.6419",
        },
        city: "fresno",
        street: "saddle st",
        number: 1342,
        zipcode: "96378-0245",
      },
      id: 7,
      email: "miriam@gmail.com",
      username: "snyder",
      password: "f238&@*$",
      name: {
        firstname: "miriam",
        lastname: "snyder",
      },
      phone: "1-123-943-0563",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "50.3456",
          long: "10.6419",
        },
        city: "mesa",
        street: "vally view ln",
        number: 1342,
        zipcode: "96378-0245",
      },
      id: 8,
      email: "william@gmail.com",
      username: "hopkins",
      password: "William56$hj",
      name: {
        firstname: "william",
        lastname: "hopkins",
      },
      phone: "1-478-001-0890",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      id: 9,
      email: "kate@gmail.com",
      username: "kate_h",
      password: "kfejk@*_",
      name: {
        firstname: "kate",
        lastname: "hale",
      },
      phone: "1-678-456-1934",
      orders: [],
      wishList: [],
      addToCart: [],
    },
    {
      address: {
        geolocation: {
          lat: "30.24788",
          long: "-20.545419",
        },
        city: "fort wayne",
        street: "oak lawn ave",
        number: 526,
        zipcode: "10256-4532",
      },
      id: 10,
      email: "jimmie@gmail.com",
      username: "jimmie_k",
      password: "klein*#%*",
      name: {
        firstname: "jimmie",
        lastname: "klein",
      },
      phone: "1-104-001-4567",
      orders: [],
      wishList: [],
      addToCart: [],
      cartData: [
        {
          id: 10,
          category: "Cabinets",
          name: "Modern Media Cabinet",
          price: 349.95,
          image:
            "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2iynmuzk4wih564f3vg3.png",
          brand: "ModernMedia",
          size: '60" x 18" x 24"',
          material: "Wood",
          color: "Walnut",
          quantity: 1,
          finish_type: "Matte",
          about:
            'Organize your media essentials with our Modern Media Cabinet. This walnut wood media cabinet features a matte finish and ample storage space. Dimensions: 60" x 18" x 24".',
          rating: 4.6,
          reviews: [
            {
              username: "MediaEnthusiast",
              rating: 5,
              comment: "I'm thrilled with this media cabinet! It's perfect.",
            },
            {
              username: "OrganizedHome",
              rating: 4,
              comment: "Great cabinet for organizing media equipment.",
            },
            {
              username: "HappyMovieNights",
              rating: 5,
              comment:
                "I love this purchase. It's perfect for my home theater.",
            },
            {
              username: "EasyStorage2",
              rating: 4,
              comment: "Assembly was straightforward, but it's a bit bulky.",
            },
            {
              username: "MediaStorageFan",
              rating: 5,
              comment: "Perfect for any media enthusiast.",
            },
          ],
        },
        {
          id: 11,
          category: "Lighting",
          name: "Crystal Floor Lamp",
          price: 199.99,
          image:
            "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic2.webp",
          brand: "CrystalGlow",
          size: 'Height: 60"',
          material: "Crystal and Metal",
          color: "Silver",
          quantity: 1,
          finish_type: "Shiny",
          about:
            'Brighten up your space with our Crystal Floor Lamp. This silver crystal floor lamp features a shiny finish and stands at a height of 60 inches. It adds a touch of glamour to any room. Dimensions: Height: 60".',
          rating: 4.7,
          reviews: [
            {
              username: "GlamourSpace",
              rating: 5,
              comment: "This crystal floor lamp is breathtaking! So elegant.",
            },
            {
              username: "ShinyLighting",
              rating: 4,
              comment: "A bit pricey, but it's a showstopper.",
            },
            {
              username: "CrystalLover",
              rating: 5,
              comment: "I'm in love with this floor lamp. It's a work of art.",
            },
            {
              username: "EasyAssembly4",
              rating: 4,
              comment: "Installation was a bit tricky due to its size.",
            },
            {
              username: "GlamorousHome",
              rating: 5,
              comment: "Highly recommend for a glamorous home.",
            },
          ],
        },
        {
          id: 12,
          category: "Tables",
          name: "Glass Top End Table",
          price: 99.99,
          image:
            "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n9z22hla9a1iopdhugz5.png",
          brand: "GlassGlow",
          size: '18" x 18" x 22"',
          material: "Glass and Metal",
          color: "Clear and Gold",
          quantity: 1,
          finish_type: "Glossy",
          about:
            'Add a touch of sophistication to your space with our Glass Top End Table. This clear glass end table features a glossy finish and elegant gold metal accents. It\'s perfect for placing by your sofa. Dimensions: 18" x 18" x 22".',
          rating: 4.6,
          reviews: [
            {
              username: "SophisticatedLiving",
              rating: 5,
              comment: "I love this glass end table! It's so chic.",
            },
            {
              username: "ElegantDecorator",
              rating: 4,
              comment: "Great value for a stylish glass table.",
            },
            {
              username: "HappyCustomer3",
              rating: 5,
              comment:
                "I'm so happy with this purchase. It's perfect for my living room.",
            },
            {
              username: "EasyAssembly3",
              rating: 4,
              comment: "Assembly was straightforward, no complaints.",
            },
            {
              username: "ChicHomeDesign",
              rating: 5,
              comment: "Highly recommend for a chic living room.",
            },
          ],
        },
        {
          id: 13,
          category: "Chairs",
          name: "Swivel Accent Chair",
          price: 179.95,
          image:
            "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic7.webp",
          brand: "AccentStyle",
          size: '30" x 30" x 32"',
          material: "Velvet",
          color: "Pink",
          quantity: 1,
          finish_type: "Soft",
          about:
            'Add a pop of color to your space with our Swivel Accent Chair. This pink velvet chair features a soft finish and 360-degree swivel, perfect for adding flair to any room. Dimensions: 30" x 30" x 32".',
          rating: 4.5,
          reviews: [
            {
              username: "PinkObsession",
              rating: 5,
              comment:
                "I adore this pink accent chair! It's a statement piece.",
            },
            {
              username: "ColorfulLiving",
              rating: 4,
              comment: "Great value for a stylish accent chair.",
            },
            {
              username: "HappyDecorator2",
              rating: 5,
              comment:
                "I'm so happy with this purchase. It's perfect for my colorful decor.",
            },
            {
              username: "EasyAssembly4",
              rating: 4,
              comment: "Assembly was straightforward, no complaints.",
            },
            {
              username: "ColorfulHome",
              rating: 5,
              comment: "Highly recommend for adding a pop of color.",
            },
          ],
        },
      ],
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      email: "JS@gmail.com",
      username: "Jon Snow",
      password: "1",
      name: {
        firstname: "Jon",
        lastname: "Snow",
      },
      phone: "1-678-456-1934",
      orders: [],
      wishList: [],
      addToCart: [],
      id: 11,
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      email: "A@gmail.com",
      username: "A A",
      password: "1",
      name: {
        firstname: "A",
        lastname: "A",
      },
      phone: "1-678-456-1934",
      orders: [],
      wishList: [],
      addToCart: [],
      id: 12,
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      email: "B@gmail.com",
      username: "B B",
      password: "1",
      name: {
        firstname: "B",
        lastname: "B",
      },
      phone: "1-678-456-1934",
      orders: [],
      wishList: [],
      addToCart: [],
      id: 13,
    },
    {
      address: {
        geolocation: {
          lat: "40.12456",
          long: "20.5419",
        },
        city: "miami",
        street: "avondale ave",
        number: 345,
        zipcode: "96378-0245",
      },
      email: "C@gmail.com",
      username: "C C",
      password: "1",
      name: {
        firstname: "C",
        lastname: "C",
      },
      phone: "1-678-456-1934",
      orders: [],
      wishList: [],
      addToCart: [],
      id: 14,
    },
  ];

  const handleDeleteUser = (id) => {};
  return (
    <>
      <Box position="relative" padding="10">
        <Text
          textAlign={"center"}
          fontSize={"35px"}
          fontWeight={"bold"}
          bg="white"
          px="4"
        >
          Donators
        </Text>
      </Box>
      {userData.length === 0 && (
        <Stack bg={"white"} m={"auto"} w={"80%"} h={"350px"}>
          <CircularProgress m={"auto"} isIndeterminate color="green.300" />
        </Stack>
      )}
      {
        <Table w="80%" m="auto">
          <Thead>
            <Tr>
              <Th textAlign="center" fontSize={fontSize}>
                User name
              </Th>
              <Th textAlign="center" fontSize={fontSize}>
                E-mail
              </Th>
              <Th textAlign="center" fontSize={fontSize}>
                Donations
              </Th>
              <Th textAlign="center" fontSize={fontSize}>
                Volunteer
              </Th>
              <Th textAlign="center" fontSize={fontSize}>
                Manage
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/*  */}

            {userData?.map((ele) => (
              <Tr key={ele.id}>
                <Td textAlign="center" fontSize={fontSize}>
                  {ele.username}
                </Td>
                <Td textAlign="center" fontSize={fontSize}>
                  {ele.email}
                </Td>
                <Td textAlign="center" fontSize={fontSize}>
                  {ele.orders.length}
                </Td>
                <Td textAlign="center" fontSize={fontSize}>
                  {/* volunteership */}
                  Yes
                </Td>
                <Td>
                  <Flex justifyContent="center">
                    {" "}
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      size={buttonSize}
                      onClick={() =>
                        setSearchParams({
                          path: `/admin/users/singleUser/${ele.id}`,
                        })
                      }
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      colorScheme="red"
                      size={buttonSize}
                      ml={2}
                      onClick={() => handleDeleteUser(ele.id)}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot w="100%">{/* paginate */}</Tfoot>
        </Table>
      }
    </>
  );
};

export default AdminUsers;
