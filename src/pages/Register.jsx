import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.288),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px  #a5a5a5;
  ${mobile({height:'fit-content',width:"75%"})}

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT </Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>;
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
