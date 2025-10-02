import styled from "styled-components"
import{useState,useEffect} from "react"
import Product from "./Product"

const Container=styled.div`
display: flex;
flex-wrap:wrap;
padding:20px;
`
const Products = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=10")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.error("eror fetching data",err));

    },[]);

  return (
    <Container>
    {products.map((item)=>(
        <Product key={item.id} item={item}/>

    ))}
      
    </Container>
  )
}

export default Products
