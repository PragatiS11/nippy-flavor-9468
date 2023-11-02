import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Pages/Style/SinglePage.css"
const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [donationAmount, setDonationAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(15);

  const navigate = useNavigate()

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdown1Visible(option === 'Credit Card');
    setDropdown2Visible(option === 'Gpay');
  }

  const handleDonationChange = (e) => {
    const amount = parseFloat(e.target.value);
    if (!isNaN(amount) && amount >= 0 && amount <= 100000000) {
      setDonationAmount(amount);
    }
  };
  const handleDonate = () => {
    navigate('/thankyou', {
      state: {
        selectedPaymentMethod: selectedOption,
        donationAmount: donationAmount,
      },
    });
  };

  const inputStyle = {
    height: '40px',
    border: "1px solid grey",
    marginBottom: "10px",
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '20px',
    paddingLeft: '20px',
  };

  return (
    <div style={{ border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', width: "50%", justifyContent: "center", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <div style={{ width: "500px" }}>
        <h2 style={{ fontSize: "22px", marginTop: "30px" }}><b>Enter your donation</b></h2>
      </div>
      <br />

      <div style={{ display: 'flex', width: '75%', alignItems: 'center', border: '2px solid black', borderRadius: '20px', height: '70px', marginBottom: '20px' }}>
        <div style={{ marginLeft: '20px', fontSize: '20px' }}>
          <div><b>£</b></div>
          <div><b>GBP</b></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            style={{
              textAlign: 'right',
              direction: 'rtl',
              width: '100%',
              border: 'none',
              outline: 'none',
              paddingLeft: '-10px',
              cursor: 'text',
              marginLeft: '120px',
              fontSize: '28px',
              fontWeight: 'bolder',
            }}
            type="number"
            onChange={handleDonationChange}
            value={donationAmount}
          />
        </div>
        <div style={{ marginLeft: '6px', marginRight: '10px', fontSize: '28px' }}><b>.00</b></div>
      </div>

      <div style={{ width: "500px", marginLeft: "-17px" }}>
        <h2 style={{ fontSize: "22px" }}><b>Payment method</b></h2>
        <br />

        <table>
          <tr style={{ padding: "10px" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              <div style={{ display: 'flex', alignItems: 'center', width: "500px", margin: "auto" }}>
                <input style={{ fontSize: "32px", transform: "scale(1.2)" }} type="radio" name="option" onClick={() => handleOptionClick('Gpay')} />
                <img style={{ marginLeft: '20px', marginRight: '10px', width: "16%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dkaic7x49t2hnttw1ati.png" alt="Google Pay" />
                <span className="text" style={{ marginLeft: "13px" }}>Google Pay</span>
              </div>
              <div id="dropdown1" style={{ display: dropdown2Visible ? 'block' : 'none' }}>
              </div>
            </td>
          </tr>
          <tr style={{ padding: "10px" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              <div style={{ display: 'flex', alignItems: 'center', width: "500px", margin: "auto" }}>
                <input style={{ fontSize: "32px", transform: "scale(1.2)" }} type="radio" name="option" onClick={() => handleOptionClick('Credit Card')} />
                <img style={{ marginLeft: '30px', marginRight: '10px' }} src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dwe33d2fc5/images/cc_icon.svg" alt="Credit Card" />
                <span className="text" style={{ marginLeft: "20px" }}>Credit Card</span>
              </div>
              <div id="dropdown" style={{ display: dropdown1Visible ? 'block' : 'none' }}>
                <form style={{ marginTop: "20px" }}>
                  <input style={{ ...inputStyle, width: "90%" }} type="email" placeholder="Enter Email" />
                  <input style={inputStyle} type="text" placeholder="First Name" />
                  <input style={inputStyle} type="text" placeholder="Last Name" />
                  <br />
                  <input style={inputStyle} type="number" placeholder="Card Number" />
                  <input style={{ ...inputStyle, width: "20%", marginLeft: "20px" }} type="number" placeholder="MM/YY" />
                  <input style={{ ...inputStyle, width: "20%", marginLeft: "15px" }} type="number" placeholder="CVV" />
                  <br />
                  <select style={inputStyle} name="country" id="country">
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                  <input style={{ ...inputStyle, marginLeft: "25px" }} type="number" placeholder="Postal code" />
                  <br />
                  <br />
                  <div>
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    Save card for future donations
                  </div>
                </form>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ marginTop: "30px", width: "500px" }}>
        <input type="checkbox" style={{ marginRight: "10px", fontSize: "32px", transform: "scale(1.2)" }} />
        Don't display my name publicly on the fundraiser.
      </div>
      <br />
      <div style={{ width: "500px" }}>
        <input type="checkbox" style={{ marginRight: "10px", fontSize: "32px", transform: "scale(1.2)" }} />
        Get occasional marketing updates from BeCharity.<br /> <span style={{ marginLeft: "22px" }}>You may unsubscribe at any time.</span>
      </div>
      <br />
      <div style={{ width: "500px" }}>
        <h1 style={{ fontSize: "22px" }}><b>Your donation</b></h1>
        <br />
        <table style={{ width: "690px" }}>
          <tr>
            <td>Your donation</td>
            <td>{donationAmount !== null ? `£${donationAmount.toFixed(2)}` : "£0.00"}</td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px" }}>BeCharity tip</td>
            <td style={{ paddingTop: "10px" }}>£{(donationAmount * (tipPercentage / 100)).toFixed(2)}</td>
          </tr>
          <br />
          <tr>
            <td>Total due today</td>
            <td>£{(donationAmount + (donationAmount * (tipPercentage / 100))).toFixed(2)}</td>
          </tr>
        </table>
      </div>
      <br />
      <div style={{ width: "80%", backgroundColor: "black", color: "white", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={handleDonate} style={{ width: "100%", backgroundColor: "black", color: "white" }}>Donate Now</button>      </div>
      <br />
      <div style={{ width: "500px", marginBottom: "20px" }}>
        <p>By continuing, you agree with <a href="#" style={{ textDecoration: "underLine" }}>BeCharity</a> terms and <a href="#" style={{ textDecoration: "underLine" }}>privacy notice</a>. Learn more about <a href="#" style={{ textDecoration: "underLine" }}>pricing and fees</a>.</p>
      </div>
    </div>
  );
};

export default PaymentPage;
