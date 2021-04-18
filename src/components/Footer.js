import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 2.5rem;
  .iconBox {
    width: 100%;
    height: 75px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    

    span {
      padding: 5px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color:#f50c5ea1;



      i{
         font-size: 24px;
        /* font-weight: 600; */
      }
      p {
        font-size: 12px;
        font-weight: 600;
        margin-top:0.4rem;
      }
      &:hover{
      color:#f50c52;

    }
    &.active{
      color:#f50c52;

    }
    }

    
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="iconBox">
        <span  className="active">
          <i class="fas fa-home"></i>
        
          <p>home</p>
        </span>

        <span>
          <i class="fas fa-file-alt"></i>
          <p>Activity</p>
        </span>

        <span>
          <i class="fas fa-wallet"></i>
        
          <p>Wallet</p>
        </span>

        <span>
         <i class="fas fa-store"></i>
          <p>Market</p>
        </span>

        <span>
          <i class="fas fa-gift"></i>
          <p>Earn</p>
        </span>
      </div>
    </Container>
  );
};

export default Footer;
