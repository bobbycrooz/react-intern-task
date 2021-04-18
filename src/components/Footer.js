import React from "react";
import styled from "styled-components";
import { Link} from 'react-router-dom'


const Container = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 2.5rem;
  position: absolute;
  bottom:0;
  .iconBox {
    width: 100%;
    height: 100%;
    padding:10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    

    .span {
      padding: 5px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-decoration:none;
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
      <div className="iconBox" >
        <Link  className="active span"  to='/home'>
          <i class="fas fa-home"></i>
        
          <p>home</p>
        </Link>

        <Link to='/' className="span">
          <i class="fas fa-file-alt" to='/activity'></i>
          <p>Activity</p>
        </Link>

        <Link  to='/wallet'  className="span">
          <i class="fas fa-wallet"></i>
        
          <p>Wallet</p>
        </Link>

        <Link to='/market'  className="span">
         <i class="fas fa-store"></i>
          <p>Market</p>
        </Link>

        <Link  to='/earn'  className="span">
          <i class="fas fa-gift"></i>
          <p>Earn</p>
        </Link>
      </div>
    </Container>
   
  );
};

export default Footer;
