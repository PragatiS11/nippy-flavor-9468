import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import UserProfileContents from "../Components/UserProfileContents";
import ProfileCardAdmin from "../Components/ProfileCardAdmin";
import { GetDataByUserId } from "../../User/Utilis/api";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../User/Redux/Admin/userAction";
const UserByAdmin = ({ id }) => {
  const dispatch = useDispatch();
  const singleUSer = useSelector((store) => {
    return store.userReducer.singleUser;
  });
  useEffect(() => {
    GetDataByUserId(id)
      .then((res) => {
        console.log(res.data, "got single data");
        dispatch(getSingleUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    console.log(singleUSer, "okaaaayyy!!!");
  }, [id]);
  return (
    <>
     
      {/* single user page */}
      <Card>
        <CardHeader>
          {/* <Heading size="md">Donator Report</Heading> */}
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <ProfileCardAdmin />
            </Box>
            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box> */}
            <Box>
              <UserProfileContents id={id} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default UserByAdmin;
