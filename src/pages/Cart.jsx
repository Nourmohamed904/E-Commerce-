import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../CartContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopTexts = styled.div`
@media (max-width: 768px) {
    display:none;
  }
  `;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 180px;
  height:180px;
  object-fit:contain;

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
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer=styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
@media (max-width: 768px) {
    margin: 5px 15px;
  }
`
const ProductPrice=styled.div`
font-size:30px;
font-weight: 200;
@media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding: 20px;
  height: fit-content;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content:space-between;
font-weight:${props=>props.type==="total" && "500"};
font-size:${props=>props.type==="total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
padding: 10px;
border:none;
border-radius:10px;
font-size: 20px;
cursor:pointer;
background: linear-gradient(90deg, teal, #008080cc);
color:white;
transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #008080cc, teal);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,128,128,0.3);
  }
`;
const Cart = () => {
  const {cart, increaseQty, decreaseQty }=useCart();
  const Subtotal=cart.reduce((total,item)=>total+item.price*item.quantity,0);
  const shipping=5;
  const Total=Subtotal+shipping;
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
          {cart.length===0?(<p>Your cart is empty 🛒</p>):(cart.map((item,index) => (
            <div key={index}>
              <Product>
              <ProductDetail>
                <Image src={item.image} alt={item.title}/>
                <Details>
                  <ProductName>{item.title}</ProductName>
                  <ProductId>
                    <b>ID:</b>{item.id}
                  </ProductId>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <ProductColor color="black" />
                    <ProductColor color="gray" />
                    <ProductColor color="darkblue" />
                </div>

                  <ProductSize>
                    <b>Size:</b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <Add style={{ cursor: "pointer" }} onClick={() => increaseQty(item.id)} />
                <ProductAmount>{item.quantity}</ProductAmount>
                <Remove style={{ cursor: "pointer" }} onClick={() => decreaseQty(item.id)} />
                </ProductAmountContainer>
                <ProductPrice>${(item.price * item.quantity).toFixed(2)}</ProductPrice>
              </PriceDetail>
            </Product>
            {index!==cart.length-1 && (
              <hr
                style={{border:"none",height:"1px",backgroundColor:"#ddd",margin:"20px 0",}}
              />
            )}
            </div>
          ))
          )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${Subtotal.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estmated Shipping</SummaryItemText>
              <SummaryItemPrice>${shipping}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem  type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${Total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
