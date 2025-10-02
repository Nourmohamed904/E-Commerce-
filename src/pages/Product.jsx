import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap:40px;
  align-items:center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width:70%;
  max-width:400px;
  height:auto;
  object-fit:contain;
  border-radius:12px;
  box-shadow:0 4px 20px rgba(0,0,0,0.1);
  padding:10px;
  @media (max-width: 820px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }
`; 
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  font-size: 18px;
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
  gap:30px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;  
    gap: 20px;
  }
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin:0px 5px;
  cursor:pointer;
  &:hover{
    transition:all 0.5s ease;
    transform:scale(1.2);
  }
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display: flex;
align-items:center;
justify-content: space-between;
gap:20px;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;   
    justify-content: center;
    width: 100%;          
    gap: 15px;
  }
`;
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;
gap:10px;
cursor: pointer;
`;
const Amount = styled.span`
width:30px;
height: 30px;
border-radius:10px;
border:1px solid teal;
display: flex;
justify-content:center;
margin: 0px 5px;
cursor:default;
font-size: 18px;
`;
const Button = styled.button`
padding: 15px 25px;
border:none;
border-radius:8px;
background-color:teal;
color:white;
cursor: pointer;
font-weight: 600;
transition: all 0.3s ease;
&:hover{
  background-color: #006d6d;
  transform: scale(1.05);
}
`;


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("error fetching product", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} alt={product.title} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
            <RemoveIcon/>
            <Amount>1</Amount>
            <AddIcon/>
            </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
