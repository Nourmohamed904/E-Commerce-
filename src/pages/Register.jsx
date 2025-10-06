import styled from "styled-components"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(
  rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
),url("signImg.jpg");
background-size:contain;
background-position:center;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
padding: 40px;
width:40%;
background-color:white;
border-radius:12px;
box-shadow:0 8px 20px rgba(0,0,0,0.1);
`
const Form=styled.form`
display: flex;
flex-wrap:wrap;
flex-direction:column;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 600;
margin-bottom: 10px;
`
const Input=styled.input`
flex:1;
border: 1px solid #ddd;
border-radius: 8px;
font-size: 14px;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px;
transition:all 0,2 ease;
outline:none;
&:focus {
    border-color: teal;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.3);
  }
`
const Agreement=styled.span`
font-size: 12px;
margin:20px 0px;
color: #555;

`
const Button=styled.button`
width:40%;
border:none;
border-radius: 8px;
text-decoration:none;
text-align:center;
padding:15px 20px;
background: linear-gradient(90deg, teal, #008080cc);
color:white;
cursor:pointer;
transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #008080cc, teal);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,128,128,0.3);
  }
`
const SignInLink = styled.p`
  font-size: 14px;
  margin-top: 15px;
  color: #333;

  a {
    color: teal;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }`
const Register = () => {
  const [formData,setFormData]=useState({
    name:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    confirmPass:""
  });

  const navigate=useNavigate();

      const handleSubmit=(e)=>{
        e.preventDefault();
        const{name,lastName,username,email,password,confirmPass}=formData;

        if (!name || !lastName || !username || !email || !password || !confirmPass) {
      Swal.fire("Error", "Please fill out all fields!", "error");
      return;
    }

    if (password !== confirmPass) {
      Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }

    if (password.length < 9) {
      Swal.fire("Error", "Password must be at least 9 characters!", "error");
      return;
    }

    Swal.fire("Success", "Account created successfully!", "success").then(() => {
      navigate("/");
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
          placeholder="First name"
          value={formData.name}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
          required
          />
          <Input
          placeholder="last name"
          value={formData.lastName}
          onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
          required
          />
          <Input 
          placeholder="username"
          value={formData.username}
          onChange={(e)=>setFormData({...formData,username:e.target.value})}
          required
          />
          <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          />
          <Input 
          type="password" 
          value={formData.password}
          placeholder="password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          minLength="9"
          />
          <Input
          type="password"
          placeholder="confirm password"
          value={formData.confirmPass}
          onChange={(e) =>setFormData({ ...formData, confirmPass: e.target.value })}
          required
          />
          <Agreement>
          By creating an account, I consent to the processing of my personal 
          date in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
          <SignInLink>
          Already have an account? <Link to="/signin">Sign In</Link>
          </SignInLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
