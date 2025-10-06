import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StyleIcon from "@mui/icons-material/Style";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.2s;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  color: #666;
  max-width: 800px;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.4s;
`;

const Highlight = styled.span`
  color: #6737e0ff;
  font-weight: 600;
`;

const Section = styled.div`
  max-width: 900px;
  margin-bottom: 70px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.6s;
`;

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
`;

const IconCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  background: #e63946;
  color: white;
  padding: 15px;
  border-radius: 50%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
  }
`;

const IconTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
`;

const IconDesc = styled.p`
  text-align: center;
  color: #666;
  font-size: 15px;
`;

const About = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>About Spark</Title>
        <Description>
          At <Highlight>Spark</Highlight>, we believe shopping should be effortless, enjoyable, and inspiring. 
          Our mission is to bring you the latest trends with high quality, fair prices, and a seamless experience.
        </Description>

        <Section>
          <Subtitle>Our Story</Subtitle>
          <Description>
            Spark began as a small idea between passionate creators who wanted to make online shopping feel more personal.
            Today, we’ve grown into a trusted platform serving thousands of happy customers worldwide.
          </Description>
        </Section>

        <Section>
          <Subtitle>Our Mission</Subtitle>
          <Description>
            We aim to empower individuals through style, technology, and trust. 
            Every product you find here is carefully selected to fit your lifestyle and values.
          </Description>
        </Section>

        <Subtitle>Why Choose Us?</Subtitle>
        <IconSection>
          <IconCard delay={0.2}>
            <IconWrapper><VerifiedIcon /></IconWrapper>
            <IconTitle>Quality You Can Trust</IconTitle>
            <IconDesc>All our products are tested to meet the highest quality standards.</IconDesc>
          </IconCard>

          <IconCard delay={0.4}>
            <IconWrapper><LocalShippingIcon /></IconWrapper>
            <IconTitle>Fast & Secure Delivery</IconTitle>
            <IconDesc>Enjoy quick shipping and safe, tracked deliveries.</IconDesc>
          </IconCard>

          <IconCard delay={0.6}>
            <IconWrapper><SupportAgentIcon /></IconWrapper>
            <IconTitle>24/7 Support</IconTitle>
            <IconDesc>Our team is always ready to help you with any questions or issues.</IconDesc>
          </IconCard>

          <IconCard delay={0.8}>
            <IconWrapper><StyleIcon /></IconWrapper>
            <IconTitle>Trendy Designs</IconTitle>
            <IconDesc>Stay stylish with our modern and exclusive collections.</IconDesc>
          </IconCard>

          <IconCard delay={1}>
            <IconWrapper><FavoriteIcon /></IconWrapper>
            <IconTitle>Customer Love</IconTitle>
            <IconDesc>We put our customers first and value every bit of feedback.</IconDesc>
          </IconCard>
        </IconSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default About;
