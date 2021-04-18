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
      color: red;
      p {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="iconBox">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#ec0909"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
          <p>home</p>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#ed0c0c"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
          <p>Activity</p>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#db0c0c"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          <p>Wallet</p>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#e20e0e"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
          </svg>
          <p>Market</p>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#eb1111"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
          </svg>
          <p>Earn</p>
        </span>
      </div>
    </Container>
  );
};

export default Footer;
