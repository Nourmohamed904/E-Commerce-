import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px 20px;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #222;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 18px;
  margin-bottom: 50px;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  align-items: start;
`;

const InfoCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: #563cbeff;
    font-size: 36px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    color: #222;
    margin-bottom: 8px;
  }

  p {
    color: #555;
    font-size: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #563cbeff;
    box-shadow: 0 0 8px rgba(21, 6, 50, 0.3);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  min-height: 120px;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    border-color: #563cbeff;
    box-shadow: 0 0 8px  rgba(21, 6, 50, 0.3);
    outline: none;
  }
`;

const Button = styled.button`
  background:teal;
  color: white;
  border: none;
  padding: 15px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #008080cc, teal);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Contact Us</Title>
        <Subtitle>
          We'd love to hear from you! Whether you have a question or feedback, our team is here to help.
        </Subtitle>

        <ContactContainer>
          <InfoCard>
            <Email />
            <h3>Email</h3>
            <p>support@sparkstore.com</p>
          </InfoCard>

          <InfoCard>
            <Phone />
            <h3>Phone</h3>
            <p>+20 1111111111</p>
          </InfoCard>

          <InfoCard>
            <LocationOn />
            <h3>Location</h3>
            <p>Cairo, Egypt</p>
          </InfoCard>
        </ContactContainer>

        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;
