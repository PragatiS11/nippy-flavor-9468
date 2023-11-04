import React, { useEffect } from "react";
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
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../User/Redux/Admin/userAction";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => {
    return store.userReducer.users;
  }, shallowEqual);

  const isLoading = useSelector((store) => {
    return store.userReducer.isLoading;
  }, shallowEqual);

  console.log(userData, "store data");
  const [params, setSearchParams] = useSearchParams();
  console.log(params);
  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id, userData));
  };
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
      {(isLoading && userData.length === 0 && (
        <Stack bg={"white"} m={"auto"} w={"80%"} h={"350px"}>
          <CircularProgress m={"auto"} isIndeterminate color="green.300" />
        </Stack>
      )) || (
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
      )}
    </>
  );
};

export default AdminUsers;
