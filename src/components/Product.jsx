import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const Info=styled.div`
opacity:0;
width:100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items:center;
justify-content:center;
`
const Container=styled.div`
flex:1;
margin: 10px;
min-width: 200px;
max-width: 250px;
border: 1px solid #c3b6b694;
border-radius: 10px;
padding: 10px;
text-align: center;
position: relative;
&:hover ${Info}{
    opacity:1;
}
`
const Image=styled.img`
width: 100%;
height: 200px;
object-fit: contain;
`

const Icon=styled.div`
cursor:pointer;
width:40px;
height: 40px;
border-radius:50%;
background-color:white;
display: flex;
align-items:center;
justify-content:center;
margin: 10px;
transition:all 0.5s ease;
color:black;
&:hover{
    background-color:lightgray;
    transform:scale(1.1);
}
`
const Product = ({item}) => {
    const {addToCart}=useCart();
    const navigate=useNavigate();

    const handleCartClick=()=>{
        addToCart(item);
        navigate("/cart");
    }
    return (
    <Container>
    <Image src={item.image} alt={item.title}/>
    <Info>
        <Icon onClick={handleCartClick}>
        <ShoppingCartOutlinedIcon/>
        </Icon>
    <Link to={`/product/${item.id}`}>
        <Icon>
        <SearchOutlinedIcon/>
        </Icon>
    </Link>
    <Link to={`/product/${item.id}`}>
        <Icon>
        <FavoriteBorderOutlinedIcon/>
        </Icon> 
    </Link>
    </Info>
    </Container>
)}

export default Product
