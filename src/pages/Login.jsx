import styled from "styled-components"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), url("signImg.jpg");
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: teal;
    box-shadow: 0 0 5px rgba(0,128,128,0.3);
  }
`

const Button = styled.button`
  width: 50%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, teal, #008080cc);
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #008080cc, teal);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,128,128,0.3);
  }
`

const ExtraLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-left:20px;

  a {
    font-size: 14px;
    color: teal;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>LOGIN</Button>

          <ExtraLinks>
            <Link to="/register">Create a new account</Link>
          </ExtraLinks>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
