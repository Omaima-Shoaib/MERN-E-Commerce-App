import styled from "styled-components";

const Cotainer=styled.div`
    margin: auto;
    width:100vw;
    min-height: 100vh;
    background-color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Paybutton=styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
`
function Pay() {
  return <Cotainer>
    <Paybutton>Pay Now</Paybutton>
  </Cotainer>;
}

export default Pay;
