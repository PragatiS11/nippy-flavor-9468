import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Text,
  Box,
} from '@chakra-ui/react';
import Payment from './Payment';






export const PaymentModel = ({onOpens,LetClose}) => {
    const toast = useToast()


  



  return (
    <Modal isOpen={onOpens} onClose={LetClose} size="lg"  isCentered >
      <ModalOverlay />
      <ModalContent fontFamily={"poppins"} color={"black"} borderRadius={"0px"}>
     
        <ModalHeader border="none" fontWeight={"bold"}  
              fontSize="28" textAlign={"center"}  fontFamily={"DM Serif Display"} letterSpacing={"1px"} >Payment Section</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
      
         
      
          <Payment />
           </ModalBody>
         
           <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};