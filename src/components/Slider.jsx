import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState,useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--input-bg);
  color: var(--text-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform:translateX(${props=>props.$slideIndex*-100}vw);
  transition:${props=>props.$transitionEnabled? "all 0.7s ease":"none"};
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:${props=>props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height:80%;
`;
const Image = styled.img`
  height: 80%;
  width: 80%;
  margin-left:100px;
  object-fit: contain;
  @media (max-width: 830px) {
    width: 90%;
    margin-left: 0; 
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media (max-width: 830px) {
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  @media (max-width:830px) {
    font-size: 30px; 
  }
`;
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
@media (max-width: 830px) {
    font-size: 16px;
    margin: 20px 0px;
    letter-spacing: 1px;
  }

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
color: var(--text-color);
border-radius:10%;
cursor:pointer;
&:hover{
 background-color: var(--section-bg);
transform:translateY(-3px)
}
`;
const Slider = () => {

  const[slideIndex,setSlideIndex]=useState(0);
  const[slides,setSlides]=useState([]);
  const[transitionEnabled,setTransitionEnabled]=useState(true);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products?limit=6")
    .then((res)=>res.json())
    .then((data)=>{setSlides(data)})
    .catch((err)=>console.error("error fetching data",err))

  },[])

  const handleClick=(direction)=>{
    if(direction==="left"){
      if(slideIndex>0){
        setSlideIndex(slideIndex - 1);
      }else {
      setTransitionEnabled(false); 
      setSlideIndex(slides.length - 1);
      setTimeout(() => setTransitionEnabled(true), 0); 
      } 
    }else{
      if(slideIndex<slides.length-1){
        setSlideIndex(slideIndex+1);
      }else{
        setTransitionEnabled(false);
        setSlideIndex(0);
        setTimeout(()=>setTransitionEnabled(true),0);
      }
    }

  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper $slideIndex={slideIndex} $transitionEnabled={transitionEnabled}>
      {slides.map((item)=>(
        <Slide key={item.id}>
          <ImgContainer>
            <Image src={item.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.description}</Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
