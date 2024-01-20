import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Add, Announcement, Remove } from "@mui/icons-material";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { mobile } from "../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:'column' })}
`;

const Info = styled.div`
  flex: 3;
${mobile({ flexDirection:'column' })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:'column',backgroundColor:'#f0f8ff90' })}

  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 50%;
  object-fit: contain;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mobile({flexDirection:'row',justifyContent:'space-between',padding:'0px 30px'})}

`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({margin:'0px'})}

`;
const ProductAmount = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 10px;
`;

function Cart() {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcements></Announcements>
      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
            <TopText></TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cld.accentuate.io/7786769252509/1704921570334/Milan_Tidepool_Primary-Float-1380-(1).png?v=1704921570334&options=w_1600"></Image>
                <Details>
                  <ProductName>
                    <b>Product:</b> WOMEN'S MILAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9097645543
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                  <ProductColor color="black"></ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>2</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cld.accentuate.io/6857823682717/1702484970198/Athens_Bahama_2048a-1-(1).png?v=1702484970198&options=w_1600  "></Image>
                <Details>
                  <ProductName>
                    <b>Product:</b> WOMEN'S MILAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9097645543
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                  <ProductColor color="black"></ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>2</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer></Footer>
    </Container>
  );
}

export default Cart;
