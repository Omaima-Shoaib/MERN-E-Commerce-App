import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100vw;
  min-height: 100vh;
  background-color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Paybutton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
const KEY =
  "pk_test_51OfjpcAE7aTqRbkKp1z4TmJmf44WZWPL3CSeyq53I8VqSioR2xcoNZICIqyJNOzJpqhFryqYlxyGraKSfHgRppHr00MM3TnRFV";
function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    //we will make backend request
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        
        console.log(' response data '+ res.data);
      } catch (e) {
        console.log(e);
      }
    };
    // eslint-disable-next-line no-unused-expressions
      stripeToken && makeRequest;
      
  }, [stripeToken]);
  return (
    <Container>
      <StripeCheckout
        name="Lama Shop"
        image="https://yt3.googleusercontent.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s900-c-k-c0x00ffffff-no-rj"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Paybutton>Pay Now</Paybutton>
      </StripeCheckout>
    </Container>
  );
}

export default Pay;
