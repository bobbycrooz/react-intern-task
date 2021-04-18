import React from "react";
import { SelectCurrency } from "./";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* height: 180px; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Nav = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 90px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Maven Pro', sans-serif;
  color:rgba(253, 0, 148, 0.96);

`;

const IconBar = styled.div`
  width: 60px;
  height:100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;
const HeaderCard = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.2rem;
  width: 98%;
  height: 120px;
  background-color: rgba(253, 0, 148, 0.96);
  border-radius: 15px;
  margin-top: 0.8rem;
  box-shadow: 0 0 10px 0.6px rgba(51, 51, 51, 0.44);
  position: relative;
  color: #fff;

  div.content {
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    div.icon {
      border-radius: 50%;
      padding: 0.3rem;
      width: 40px;
      height: 40px;
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
    }
  }
  span {
    height: 95%;
    border: 1px solid #f3f3f37e;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <LogoContainer>
          <i class="fas fa-ribbon"></i>
          <h2>ribbon</h2>
        </LogoContainer>
        <IconBar>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 22 22"
            width="24px"
            fill="#f50c52"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 28 28"
            width="24px"
            fill="#f50c52"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </IconBar>
      </Nav>
      <HeaderCard>
        <div className="content">
          <div className="icon" style={{ color: "red" }}>
            AFYA
          </div>

          <h2>143.00</h2>

          <h6>Balance</h6>
        </div>
        <span />
        <div className="content">
          <div className="icon" style={{ color: "blue" }}>
            ZAR
          </div>

          <h2>R21.00</h2>

          <h6>Equivalent</h6>
        </div>
      </HeaderCard>

      <SelectCurrency/>


    </Container>
  );
};

export default Header;
