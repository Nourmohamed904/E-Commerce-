import styled from "styled-components"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useState,useRef } from "react"
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
const Form=styled.div`
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
const Button=styled(Link)`
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
  const nameRef=useRef(null);
  const lastNameRef=useRef(null);
  const usernameRef=useRef(null);
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const confirmPassRef=useRef(null);

  const [formData,setFormData]=useState({
    name:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    confirmPass:""
  });

  const navigate=useNavigate();

  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPassword=/^.{9,}$/;

  const validateField=(field,value)=>{
    switch(field){
      case "name":
      case "lastName":
      case "username":
        if(!value.trim()){
          Swal.fire("Error",`${field} is required!`,"error");
          return false;
        }
        return true;
        case "email":
          if(!emailRegex.test(value)){
            Swal.fire("Error","Invalid email format!", "error");
            return false;
          }
          return true;
          case "password":
            if(!strongPassword.test(value)){
              Swal.fire("Weak Password","Password must have at least 9 chars","warning");
              return false;
          }
          return true;
          case "confirmPass":
            if (value !== formData.password) {
              Swal.fire("Error", "Passwords do not match!", "error");
              return false;
          }     
          return true;
          default:
            return true;
        }
      };
      const handleKeyDown=(e,field,nextRef)=>{
        if(e.key==="Enter"){
          e.preventDefault();
          const isValid=validateField(field,formData[field]);
          if(isValid){
            if(nextRef && nextRef.current){
              nextRef.current.focus();
            }else{
              handleSubmit(e);
            }
          }
        }
      };

      const handleSubmit=(e)=>{
        e.preventDefault();
        const{name,lastName,username,email,password,confirmPass}=formData;

        if (
      !validateField("name", name) ||
      !validateField("lastName", lastName) ||
      !validateField("username", username) ||
      !validateField("email", email) ||
      !validateField("password", password) ||
      !validateField("confirmPass", confirmPass)
    ) { return; }

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
          ref={nameRef}
          placeholder="First name"
          value={formData.name}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
          onKeyDown={(e)=>handleKeyDown(e,"name",lastNameRef)}
          />
          <Input
          ref={lastNameRef} 
          placeholder="last name"
          value={formData.lastName}
          onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
          onKeyDown={(e)=>handleKeyDown(e,"lastName",usernameRef)}
          />
          <Input 
          ref={usernameRef}
          placeholder="username"
          value={formData.username}
          onChange={(e)=>setFormData({...formData,username:e.target.value})}
          onKeyDown={(e)=>handleKeyDown(e,"username",emailRef)}
          />
          <Input
          ref={emailRef}
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, "email", passwordRef)}
          />
          <Input type="password" 
          ref={passwordRef}
          value={formData.password}
          placeholder="password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, "password", confirmPassRef)}
          />
          <Input type="password"
          ref={confirmPassRef}
          placeholder="confirm password"
          value={formData.confirmPass}
          onChange={(e) =>setFormData({ ...formData, confirmPass: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, "confirmPass", null)}
          />
          <Agreement>
          By creating an account, I consent to the processing of my personal 
          date in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button to="/">CREATE</Button>
          <SignInLink>
          Already have an account? <Link to="/signin">Sign In</Link>
          </SignInLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
