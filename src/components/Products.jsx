import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
function Products({ cat, filters, sort }) {
  // console.log(cat,filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        // console.log(res["data"]);
        setProducts(res["data"]);
      } catch (e) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      
    }
  }, [sort]);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id}></Product>
      ))}
    </Container>
  );
}

export default Products;
