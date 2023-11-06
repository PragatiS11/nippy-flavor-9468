import { Button, Card, CardBody, Heading, Image, Stack, Table, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AdminEditMenu } from "./AdmitEditMenu";

const ProfileCardAdmin = () => {
  const [SignOpen, setSignOpen] = useState(false);

    function SignClose() {
      setSignOpen(!SignOpen);
    }
  const singleUser = useSelector((store) => {
    return store.userReducer.singleUser;
  });
  console.log(singleUser, "user profile - single page");
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
          m={"10px auto"}
          objectFit="cover"
          maxW={{
            base: "50%",
            sm: "30%",
          }}
          src={singleUser?.image}
          alt="Caffe Latte"
        />

        <Stack m="auto">
          <CardBody bg={"#f5f5f5"} borderRadius={"20px"}>
            
         
                <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"} letterSpacing={"0.5px"} fontSize={"20"}>Name : {singleUser?.name} {singleUser?.isVolunteers?"[ VOLUNTEER ]":""}</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"}  letterSpacing={"0.5px"} fontSize={"20"}>Email : {singleUser?.email}</Text>
              <Text fontFamily={'DM Serif Display'} paddingBottom={"20px"}  letterSpacing={"0.5px"}  fontSize={"20"}>City  : {singleUser?.city}</Text>
              
             
            
             <Button
               borderRadius={0}
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#79ab2f"
              _hover={{ bgColor: "#df8c09" }}
              letterSpacing={"1px"}
              onClick={()=>{
                setSignOpen(!SignOpen)
               }}
            >
              EDIT PROFILE
            </Button>
            {SignOpen && <AdminEditMenu
            
            onOpens={SignOpen} 
            LetClose={SignClose} />}
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default ProfileCardAdmin;
