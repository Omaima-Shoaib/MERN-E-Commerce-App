import styled from "@emotion/styled";
import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 20px; */
`;

const Filter = styled.div`

${mobile({margin:'0px 20px',display:"flex",flexDirection:'column'})}
`;

const Title = styled.h1`
margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
${mobile({marginRight:'0px'})}
  
`;
const Select = styled.select`
padding:10px;
margin-right: 20px;
${mobile({margin:'10px 0px'})}


`;
const Option = styled.option``;
function ProductList() {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcements></Announcements>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select >
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
}

export default ProductList;
