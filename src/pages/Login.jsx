import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.288),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({height:'100vh'})}

`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #a5a5a5;
  ${mobile({height:'fit-content',width:"75%"})}

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:  10px  0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
cursor: pointer;

&:hover{
text-decoration: underline;

}
`
function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
