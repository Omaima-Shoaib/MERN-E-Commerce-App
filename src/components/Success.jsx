import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100vw;
  min-height: 100vh;
  background-color: #fefefe;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  width: 15vh;
  box-shadow: 0px 10px 10px #d4d4d4;
  margin: 10px 0px;
`;
function Success() {
  return (
    <Container>
      <LogoImage src="https://yt3.googleusercontent.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s900-c-k-c0x00ffffff-no-rj"></LogoImage>
      <div>Success</div>
    </Container>
  );
}

export default Success;
