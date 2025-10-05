import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color:#20263E;
  color:white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor:pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Payment = styled.div`
  display: flex;
`;
const Image = styled.img`
  padding: 8px;
  cursor:pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Spark</Logo>
        <Desc>
          Spark is your go-to online store for quality products at great prices.
          We make shopping simple, reliable, and enjoyable — bringing you the
          trends and essentials you love, all in one place.
          <br/>
          <strong>Shop smart, shop Spark.</strong>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="000000">
            <XIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/>333 District-16 Sheikh Zayed
        </ContactItem>
        <ContactItem>
          <CallIcon style={{marginRight:"10px"}}/>01111111222
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} />contact@spark.com
        </ContactItem>
        <Payment>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
            alt="Visa"
            width="50"
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
            alt="MasterCard"
            width="50"
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
            alt="PayPal"
            width="50"
          />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
