import React from "react";
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
const UserByAdmin = ({ id }) => {
  return (
    <>
      {/* /admin/singleUserID ,{id} */}
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
              <UserProfileContents />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default UserByAdmin;
