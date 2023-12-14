import React, { useEffect, useState } from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { selectedPaymentMethod, donationAmount } = location.state;
  const navigate = useNavigate();

  const [transactionId, setTransactionId] = useState('');

  const generateRandomTransactionId = () => {
    const min = 10000000;
    const max = 99999999;
    const randomId = Math.floor(Math.random() * (max - min + 1) + min);
    setTransactionId(randomId.toString());
  };

  useEffect(() => {
    generateRandomTransactionId();
    const delay = 5000;

    const timer = setTimeout(() => {
      navigate('/');
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      margin="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="100px"
      flexDirection="column"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      width="40%"
      height="400px"
    >
      <img style={{ width: "30%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b44rtw3bjhy0hl85vjeh.gif" alt="" />
      <Heading as='h3' size='lg'>Thank you for Donating</Heading>
      <br />
      <Box>
        <table>
          <tbody style={{ padding: "10px" }}>
            <tr>
              <td style={{ paddingLeft: "50px" }}>Payment Type</td>
              <td style={{ paddingLeft: "50px" }}>{selectedPaymentMethod}</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "50px" }}>Name</td>
              <td style={{ paddingLeft: "50px" }}>Blessmi</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "50px" }}>Email</td>
              <td style= {{ paddingLeft: "50px" }}>kblessmi@gmail.com</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "50px" }}>Amount Donate</td>
              <td style={{ paddingLeft: "50px" }}>£{donationAmount}</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "50px" }}>Transaction Id</td>
              <td style={{ paddingLeft: "50px" }}>{transactionId}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default ThankYou;
