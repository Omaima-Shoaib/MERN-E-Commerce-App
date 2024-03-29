import {
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({height:'50px'})}


`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:'10px 0px'})}

`;
const Left = styled.div`
  /* width: 33.3%; */
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:'none'})}

`;
const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  /* width: 100%; */
  padding: 5px;
  border-radius: 2.5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width:'60px'})}

`;

const Center = styled.div`
  /* width: 33.3%; */
  flex: 1;
  text-align: center;
  //or you can center the content using flex and justify-content
  /* display: flex;
  justify-content: center; */
`;
const Logo = styled.h1`
  margin: 0%;
  font-weight: bold;
  ${mobile({fontSize:'24px'})}

`;
const Right = styled.div`
  /* width: 33.3%; */
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:'center'})}

`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:'12px',marginLeft:'10px'})}

`;
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchRounded style={{ color: "gray",fontSize:16 }}></SearchRounded>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined style={{ color: "gray" }}>
                {" "}
              </ShoppingCartOutlined>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
