import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { DonationSingleRequest } from "../../User/Utilis/api";
const UserProfileContents = ({ id }) => {
  console.log(id, "content");
  useEffect(() => {
    DonationSingleRequest(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>All Donations</Tab>
        <Tab>Achievements</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>All Donations!</p>
        </TabPanel>
        <TabPanel>
          <p>All achievements got by donations!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default UserProfileContents;
// import { Divider } from "@chakra-ui/react";
//  <Divider orientation="vertical" />;
