import styled from "styled-components"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useState,useRef } from "react"
import { Navigate } from "react-router-dom";

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
border: 1px solid ${props=>(props.error? "red":"#ddd")};
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
  // const[form,setForm]=useState({
  //   name:"",
  //   email
  // })
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="email"/>
          <Input placeholder="username"/>
          <Input type="password" placeholder="password"/>
          <Input type="password" placeholder="confirm password"/>
          <Agreement>
          By creating an account, I consent to the processing of my personal 
          date in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <SignInLink>
          Already have an account? <Link to="/signin">Sign In</Link>
          </SignInLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

// import { useRef, useState } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// // ---------- styled components ----------
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255,255,255,0.5),
//       rgba(255,255,255,0.5)
//     ),
//     url("signImg.jpg") center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   padding: 30px;
//   width: 400px;
//   background-color: white;
//   border-radius: 12px;
//   box-shadow: 0 8px 24px rgba(0,0,0,0.15);
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   font-size: 15px;
//   outline: none;
//   transition: border 0.2s ease;

//   &:focus {
//     border-color: teal;
//     box-shadow: 0 0 6px rgba(0,128,128,0.4);
//   }
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 15px 0;
//   color: #555;
// `;

// const Button = styled.button`
//   margin: 10px auto;
//   width: 60%;
//   border: none;
//   padding: 12px;
//   background-color: teal;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 8px;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #008080cc;
//   }
// `;

// const FooterText = styled.p`
//   text-align: center;
//   margin-top: 15px;
//   font-size: 14px;
//   color: #333;

//   a {
//     color: teal;
//     text-decoration: none;
//     font-weight: 500;
//     margin-left: 5px;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// // ---------- component ----------
// const Register = () => {
//   const nameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const usernameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const confirmPasswordRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const navigate = useNavigate();

//   // regex validators
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const strongPassword = /^.{9,}$/;

//   // validate individual field
//   const validateField = (field, value) => {
//     switch (field) {
//       case "name":
//       case "lastName":
//       case "username":
//         if (!value.trim()) {
//           Swal.fire("Error", `${field} is required!`, "error");
//           return false;
//         }
//         return true;
//       case "email":
//         if (!emailRegex.test(value)) {
//           Swal.fire("Error", "Invalid email format!", "error");
//           return false;
//         }
//         return true;
//       case "password":
//         if (!strongPassword.test(value)) {
//           Swal.fire(
//             "Weak Password",
//             "Password must have at least 9 chars",
//             "warning"
//           );
//           return false;
//         }
//         return true;
//       case "confirmPassword":
//         if (value !== formData.password) {
//           Swal.fire("Error", "Passwords do not match!", "error");
//           return false;
//         }
//         return true;
//       default:
//         return true;
//     }
//   };

//   // move focus only if validation passes
//   const handleKeyDown = (e, field, nextRef) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       const isValid = validateField(field, formData[field]);
//       if (isValid) {
//         if (nextRef && nextRef.current) {
//           nextRef.current.focus();
//         } else {
//           handleSubmit(e);
//         }
//       }
//     }
//   };

//   // final form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, lastName, username, email, password, confirmPassword } = formData;

//     if (
//       !validateField("name", name) ||
//       !validateField("lastName", lastName) ||
//       !validateField("username", username) ||
//       !validateField("email", email) ||
//       !validateField("password", password) ||
//       !validateField("confirmPassword", confirmPassword)
//     ) {
//       return;
//     }

//     Swal.fire("Success", "Account created successfully!", "success").then(() => {
//       navigate("/"); // ✅ redirect to Home page
//     });
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Title>Create an Account</Title>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             ref={nameRef}
//             placeholder="First Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             onKeyDown={(e) => handleKeyDown(e, "name", lastNameRef)}
//           />
//           <Input
//             ref={lastNameRef}
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//             onKeyDown={(e) => handleKeyDown(e, "lastName", usernameRef)}
//           />
//           <Input
//             ref={usernameRef}
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             onKeyDown={(e) => handleKeyDown(e, "username", emailRef)}
//           />
//           <Input
//             ref={emailRef}
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             onKeyDown={(e) => handleKeyDown(e, "email", passwordRef)}
//           />
//           <Input
//             type="password"
//             ref={passwordRef}
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             onKeyDown={(e) => handleKeyDown(e, "password", confirmPasswordRef)}
//           />
//           <Input
//             type="password"
//             ref={confirmPasswordRef}
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={(e) =>
//               setFormData({ ...formData, confirmPassword: e.target.value })
//             }
//             onKeyDown={(e) => handleKeyDown(e, "confirmPassword", null)}
//           />
//           <Agreement>
//             By creating an account, I consent to the processing of my personal data
//             in accordance with the <b>PRIVACY POLICY</b>.
//           </Agreement>
//           <Button type="submit">Create</Button>
//         </Form>
//         <FooterText>
//           Already have an account?
//           <a href="/login">Sign in</a>
//         </FooterText>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;
