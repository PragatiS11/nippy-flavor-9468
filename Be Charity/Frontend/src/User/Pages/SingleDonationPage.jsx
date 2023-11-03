import React from 'react';
import {
    Box,
    Heading,
    Image,
    Icon,
    Button,
    Stack,
    Progress,
    Text,
} from '@chakra-ui/react';
import { IoIosPricetags } from 'react-icons/io';
import Navbar from '../Components/Navbar';

const SingleDonationPage = () => {
    return (
        <Box>
            <Box>
                <Navbar />
            </Box>
            <Box marginTop="50px">
                <Heading marginLeft="90px">
                    Help us fund our third-year company performance
                </Heading>
                <br />
            </Box>
            <Box display="flex">
                <Box width="88%" marginLeft="90px">
                    <Box width="100%">
                        <Image
                            src="https://www.gu.se/sites/default/files/styles/100_10_4_xmedium_2x/public/2022-05/2022-05-25_MedBlickenFramat_Foto.png?h=9da390a8&itok=2B0hKCbD"
                            alt=""
                            width="100%"
                            borderRadius="20px"
                        />
                        <br />
                        <br />
                        <Stack direction="row" alignItems="center">
                            <Icon as={IoIosPricetags} />
                            <Heading size="md">Education</Heading>
                        </Stack>
                        <br />
                        <Text>
                            V3nture dance company is our third-year professional performance
                            company, where guest choreographers and students come together to
                            create a piece for an end of module show.
                        </Text>
                        <br />
                        <Text>
                            Any contributions will be appreciated and will go towards our
                            costumes, set, props, etc.
                        </Text>
                        <br />
                        <br />
                        <Stack
                            direction="row"
                            alignItems="center"
                            padding="30px"
                            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        >
                            <Image
                                src="https://www.gofundme.com/_next/static/images/lending-hand-7f6fe1e24df6a1af9c53c6c41e31460e.svg"
                                alt=""
                                width="100px"
                            />
                            <Box marginLeft="30px">
                                <Heading as="h3" size="lg">
                                    Give £10 to help get this fundraiser to its goal
                                </Heading>
                                <br />
                                <Button
                                    width="80%"
                                    border="1px solid red"
                                    backgroundColor="#fdb72f"
                                    height="50px"
                                    fontSize="20px"
                                    marginLeft="80px"
                                    borderRadius="20px"
                                >
                                    <b>Make a donation</b>
                                </Button>
                            </Box>
                        </Stack>
                        <br />
                        <br />
                        <Stack>
                            <Heading>Organiser</Heading>
                        </Stack>
                        <br />
                        <Box width="40%">
                            <Stack direction="row" alignItems="center">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rz3q1lfopq69ghm40bt3.png"
                                    alt=""
                                    width="15%"
                                />
                                <Box marginLeft="40px">
                                    <Heading as="h4" size="md">Hollie Clapham</Heading>
                                    <Text>Organiser</Text>
                                    <Text>England</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <br />
                        <Stack>
                            <Button
                                width="100px"
                                height="40px"
                                border="1px solid red"
                                marginLeft="20px"
                                backgroundColor="#fdb72f"
                                borderRadius="20px"
                            >
                                Contact
                            </Button>
                        </Stack>
                        <br />
                        <br />
                        <Stack>
                            <Heading>Words of support</Heading>
                            <br />
                            <Text>Please donate to share words of support.</Text>
                        </Stack>
                        <br />
                        <Box width="40%">
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center" marginLeft="20px">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="10%"
                                />
                                <Box marginLeft="30px">
                                    <Heading as="h3" size="md">Alexandria Siwecki</Heading>
                                    <Text>Prayers for your sweet kitty</Text>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box
                    marginLeft="50px"
                    marginRight="90px"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    height="600px"
                >
                    <Box marginLeft="30px" marginRight="30px" marginTop="30px">
                        <Text >
                            <span style={{ fontSize: "22px" }}>$505</span> USD raised of $550
                            goal
                        </Text>
                        <Progress value={505} max={550} colorScheme="green" minW="10" />
                        <br />
                        <Text>12 donations</Text>
                        <br />
                        <Button
                            width="100%"
                            backgroundColor="#fdb72f"
                            height="40px"
                            borderRadius="10px"
                        >
                            Donate Now
                        </Button>
                        <br />
                        <br />
                        <Stack direction="row" alignItems="center">
                            <Image
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/80bpwv4sx0ipbgh0tarc.png"
                                alt=""
                                width="10%"
                            />
                            <Text fontSize="18px" color="#7f489e">
                                <b>12 people just donated</b>
                            </Text>
                        </Stack>
                        <br />
                        <Box width="40%">
                            <Stack direction="row" alignItems="center">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="15%"
                                />
                                <Box marginLeft="15px">
                                    <Text>Belle Segev</Text>
                                    <Text>$50</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="15%"
                                />
                                <Box marginLeft="15px">
                                    <Text>Belle Segev</Text>
                                    <Text>$50</Text>
                                </Box>
                            </Stack>
                            <br />
                            <Stack direction="row" alignItems="center">
                                <Image
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png"
                                    alt=""
                                    width="15%"
                                />
                                <Box marginLeft="15px">
                                    <Text>Belle Segev</Text>
                                    <Text>$50</Text>
                                </Box>
                            </Stack>
                        </Box>
                        <br />
                        <br />
                        <Stack direction="row" alignItems="center">
                            <Button
                                width="100px"
                                border="1px solid black"
                                borderRadius="10px"
                                height="30px"
                            >
                                See all
                            </Button>
                            <Button
                                width="200px"
                                border="1px solid black"
                                borderRadius="10px"
                                marginLeft="20px"
                                height="30px"
                            >
                                See Top Donations
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
            <Box
                width="100%"
                margin="auto"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                padding="40px"
                backgroundColor="#fbf8f6"
            >
                <Heading
                    width="90%"
                    display="flex"
                    alignItems="center"
                    marginLeft="30px"
                >
                    Your easy, powerful, and trusted home for help
                </Heading>
                <br />
                <br />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    marginBottom="40px"
                    margin="auto"
                    width="90%"
                
                >
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/airplane-9305a2f0bb1f5e5f1bd6e1004710849c.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Easy</b>
                            </Text>
                            <Text>Donate quickly and easily.</Text>
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/phone-86989a47af72222c56e87fd35dbf162a.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Powerful</b>
                            </Text>
                            <Text>Send help right to the people and causes you care about.</Text>
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" width="30%">
                        <Image
                            src="https://www.gofundme.com/_next/static/images/guarantee-927e0717c5b84eeb69c8542fbb6adfb6.svg"
                            alt=""
                        />
                        <Box marginLeft="15px">
                            <Text>
                                <b>Trusted</b>
                            </Text>
                            <Text>
                                Your donation is protected by the{' '}
                                <a style={{ textDecoration: 'underLine' }} href="#">
                                    BeCharity Giving Guarantee
                                </a>
                                .
                            </Text>
                        </Box>
                    </Stack>
                </Stack>

            </Box>
        </Box>
    );
};

export default SingleDonationPage;
