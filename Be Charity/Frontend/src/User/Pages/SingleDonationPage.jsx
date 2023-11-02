import React from 'react';
import { Heading } from "@chakra-ui/react";
import { IoIosPricetags } from 'react-icons/io';
import Navbar from "../Components/Navbar";
import "../Pages/Style/SinglePage.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

const SingleDonationPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div style={{ marginTop: "50px" }}>
        <Heading style={{ marginLeft: "90px" }}>Help us fund our third year company performance</Heading>
        <br />
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "88%", marginLeft: "90px" }}>
          <div style={{ width: "100%" }}>
            <img className="tagImg" src="https://www.gu.se/sites/default/files/styles/100_10_4_xmedium_2x/public/2022-05/2022-05-25_MedBlickenFramat_Foto.png?h=9da390a8&itok=2B0hKCbD" alt="" />
            <br /><br />
            <div className="eduDiv">
              <IoIosPricetags />
              <h4 style={{ marginLeft: "10px" }}>Education</h4>
            </div>
            <br />
            <p>V3nture dance company is our third-year professional performance company, where guest choreographers and students come together to create a piece for an end of module show.</p>
            <br />
            <p>Any contributions will be appreciated and will go towards our costumes, set, props, etc.</p>
            <br /><br />
            <div className="donateContainer">
              <div>
                <img src="https://www.gofundme.com/_next/static/images/lending-hand-7f6fe1e24df6a1af9c53c6c41e31460e.svg" alt="" />
              </div>
              <div className="margin30">
                <Heading as='h3' size='lg'>Give £10 to help get this fundraiser to its goal</Heading>
                <br />
                <button className="donateBtn"><b>Make a donation</b></button>
              </div>
            </div>
            <br /><br /><br />
            <div>
              <Heading>Organizer</Heading>
            </div>
            <br />
            <div style={{ width: "40%" }}>
              <div className="containerDiv">
                <div style={{ width: "15%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rz3q1lfopq69ghm40bt3.png" alt="" />
                </div>
                <div style={{ marginLeft: "40px" }}>
                  <Heading as="h4" size="md">Hollie Clapham</Heading>
                  <p>Organizer</p>
                  <p>England</p>
                </div>
              </div>
            </div>
            <br />
            <div>
              <button style={{ width: "100px", height: "40px", border: "1px solid red", marginLeft: "20px", backgroundColor: "#fdb72f", borderRadius: "20px" }}>Contact</button>
            </div>
            <br /><br /><br />
            <div>
              <Heading>Words of support</Heading>
              <br />
              <p>Please donate to share words of support.</p>
            </div>
            <br />
            <div style={{ width: "40%" }}>
              <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                <div style={{ width: "10%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div className="margin30">
                  <h1>Alexandria Siwecki</h1>
                  <p>Prayers for your sweet kitty</p>
                </div>
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                <div style={{ width: "10%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div className="margin30">
                  <h1>Alexandria Siwecki</h1>
                  <p>Prayers for your sweet kitty</p>
                </div>
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                <div style={{ width: "10%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div className="margin30">
                  <h1>Alexandria Siwecki</h1>
                  <p>Prayers for your sweet kitty</p>
                </div>
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                <div style={{ width: "10%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div className="margin30">
                  <h1>Alexandria Siwecki</h1>
                  <p>Prayers for your sweet kitty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginLeft: "50px", marginRight: "90px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "600px" }}>
          <div style={{ marginLeft: "30px", marginRight: "30px", marginTop: "30px" }}>
            <h1><span style={{ fontSize: "22px" }}>$505</span> USD raised of $550 goal</h1>
            <div style={{ width: "300px" }}>
              <RangeSlider aria-label={['min']} defaultValue={[505]} colorScheme='green' minW="10">
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} display={"none"} />
              </RangeSlider>
            </div>
            <br />
            <p>12 donations</p>
            <br />
            <div>
              <button style={{ width: "200px", backgroundColor: "#fdb72f", height: "40px", borderRadius: "10px" }}>Donate Now</button>
            </div>
            <br />
            <div className="containerDiv">
              <img style={{ width: "10%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/80bpwv4sx0ipbgh0tarc.png" alt="" />
              <p style={{ marginLeft: "10px", fontSize: "18px", color: "#7f489e" }}><b>12 people just donated</b></p>
            </div>
            <br />
            <div style={{ width: "40%" }}>
              <div className="containerDiv">
                <div style={{ width: "15%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <p>Belle Segev</p>
                  <p>$50</p>
                </div>
              </div>
              <br />
              <div className="containerDiv">
                <div style={{ width: "15%" }}>
                  <img style={{ width: "100%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <p>Belle Segev</p>
                  <p>$50</p>
                </div>
              </div>
              <br />
              <div className="containerDiv">
                <div style={{ width: "15%" }}>
                  <img style = {{width:"100%"}} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1j42ss92jz1904rma87z.png" alt="" />
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <p>Belle Segev</p>
                  <p>$50</p>
                </div>
              </div>
            </div>
            <br /><br />
            <div>
              <button style={{ width: "100px", border: "1px solid black", borderRadius: "10px", height: "30px" }}>See all</button>
              <button style={{ width: "200px", border: "1px solid black", borderRadius: "10px", marginLeft: "20px", height: "30px" }}>See Top Donations</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footerCon">
        <Heading className="footerHeading">Your easy, powerful, and trusted home for help</Heading>
        <br />
        <br />
        <div className="footerDiv">
          <div className="containerDiv">
            <img src="https://www.gofundme.com/_next/static/images/airplane-9305a2f0bb1f5e5f1bd6e1004710849c.svg" alt="" />
          </div>
          <div className="margin30">
            <span><b>Easy</b></span>
            <p>Donate quickly and easily.</p>
          </div>
        </div>
        <div className="containerDiv">
          <img src="https://www.gofundme.com/_next/static/images/phone-86989a47af72222c56e87fd35dbf162a.svg" alt="" />
        </div>
        <div className="margin30">
          <span><b>Powerful</b></span>
          <p>Send help right to the people and causes you care about.</p>
        </div>
        <div className="containerDiv">
          <img src="https://www.gofundme.com/_next/static/images/guarantee-927e0717c5b84eeb69c8542fbb6adfb6.svg" alt="" />
        </div>
        <div className="margin30">
          <span><b>Trusted</b></span>
          <p>Your donation is protected by the <a style={{ textDecoration: "underline" }} href="#">BeCharity Giving Guarantee</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default SingleDonationPage;
