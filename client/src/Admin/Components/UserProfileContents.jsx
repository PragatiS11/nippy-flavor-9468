import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Heading } from "@chakra-ui/react";
import { CatchPaymentByUserIdRequest, DonationSingleRequest } from "../../User/Utilis/api";
const UserProfileContents = ({ id }) => {
  const [payment,setPayment]=useState([])
  
  useEffect(() => {
    CatchPaymentByUserIdRequest(id)
      .then((res) => {
       setPayment(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (<>
  <Heading textAlign={"center"} fontFamily={"DM Serif Display"}>Payment History</Heading>
  <TableContainer m={"auto"} w="70%" size="sm" border="1px solid black" mt="50">
          <Table variant='simple' m={"auto"} border="1px solid black"  >
            <Thead border="1px solid black" color={"white"} m={"10px"}>
              <Tr m={"10px"} bg="black" >
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Time</Th>
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Fundraiser name</Th>
             
                <Th fontFamily={'DM Serif Display'} fontSize={"20"} fontWeight={400} textTransform={"capitalize"} color={"white"}>Amount</Th>
              
              </Tr>
            </Thead>
            <Tbody border="1px solid black">
            {payment?.reverse().map((el) => (
  <Tr key={el.id}>
    <Td>{el.Time.split(" ").slice(0, 5).join(" ")}</Td>
    <Td>{el.Donation_name}</Td>
    <Td>$ {el.money}</Td>
  </Tr>
))}
              
            </Tbody>
          </Table>
        </TableContainer>
    </>
  );
};

export default UserProfileContents;
// import { Divider } from "@chakra-ui/react";
//  <Divider orientation="vertical" />;
