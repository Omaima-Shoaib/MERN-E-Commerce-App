import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  `;

const AddContainer = styled.div`
font-weight: 700;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid teal;
margin: 0px 5px;
`;

const Button = styled.button`
padding:15px;
border:  1px solid teal;
background-color: white;
border-radius: 10px;
cursor: pointer;
font-weight: 600;
transition: all 0.3s ease;
&:hover{
  background-color: teal;
  color: white;

}
`;

function Product() {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcements></Announcements>

      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/236x/06/9b/1c/069b1c79f612704a087c0c6f0c226ea1.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, fugiat
            maiores atque fugit earum dolore sunt cupiditate voluptatum libero!
            Voluptatum voluptates quibusdam pariatur nostrum corrupti molestiae
            fugit possimus debitis libero?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove></Remove>
              <Amount>1</Amount>
              <Add></Add>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
}

export default Product;
