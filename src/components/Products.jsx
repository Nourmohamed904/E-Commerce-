import styled from "styled-components";
import { useState, useEffect } from "react";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Products = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

 const filteredProducts = products.filter((item) =>
    item?.title?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
);


  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
