import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    objectFit: "contain",
    height: "auto",
    // height:'40px' in the tutorial
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "20px" })}
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
  ${mobile({ width: "100%" })}
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
  box-shadow: 1px 1px 1px gray;
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
  ${mobile({ width: "100%" })}
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
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

function Product() {
  console.log();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color,setColor]=useState(null)
  const [size,setSize]=useState(null)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + productId);
        setProduct(res.data);
        // console.log(res.data);
      } catch (e) {}
    };

    getProduct();
  }, [productId]);
  const handleQuantity = (type) => {
    if (type === "dec" ) {
      quantity > 1 &&  setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

const handleClick=()=>{
  console.log(size, color)
  //update cart
  
}
  return (
    <Container>
      <Navbar></Navbar>
      <Announcements></Announcements>

      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {Object.keys(product).length > 0
                ? product.color.map((c) => (
                    <FilterColor color={c} key={c} onClick={(e)=> setColor(c)}></FilterColor>
                  ))
                : ""}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>{setSize(e.target.value)}}>
                {Object.keys(product).length > 0
                  ? product.size.map((s) => (
                      <FilterSizeOption key={s} > {s}</FilterSizeOption>
                    ))
                  : ""}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}></Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}></Add>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
}

export default Product;
