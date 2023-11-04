import { Card, CardBody, Heading, Image, Stack, Table } from "@chakra-ui/react";
import React from "react";

const ProfileCardAdmin = () => {
  return (
    <div>
      {/* ProfileCardAdmin */}
      <Card
        m={"auto"}
        width={{
          base: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
        }}
        direction={{
          base: "column",
          sm: "row",
        }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          m={"auto"}
          objectFit="cover"
          maxW={{
            base: "50%",
            sm: "30%",
          }}
          src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          alt="Caffe Latte"
        />

        <Stack m="auto">
          <CardBody bg={"#f5f5f5"} borderRadius={"20px"}>
            <Heading size="md"></Heading>
            <Table ml={"20px"} w={"100%"}>
              <tr>
                <td>Name :</td>
                {/* <td> {`${username}` || "not read"} </td> */}
              </tr>
              <tr>
                <td>E-mail :</td>
                {/* <td> {`${email}` || "not read"} </td> */}
              </tr>
              <tr>
                <td>CITY :</td>
                {/* <td> {`${address?.city}` || "not read"} </td> */}
              </tr>

              <tr>
                <td>Phone:</td>
                {/* <td> {phone} </td> */}
              </tr>
            </Table>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default ProfileCardAdmin;
