import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  div.title {
    background-color: rgba(243, 243, 243, 0.8);
    color: #0c84f5;
    padding: 0.3rem 0.225rem;
    font-size: 14px;
    font-weight: 600;
    height:45px;
    display:flex;
    align-items:flex-end;

  }
  div.card {
    width: 100%;
    background-color: #fff;
    padding: 0.7rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content:space-between; */
    div.input_container {
      width: 98%;
      border: 0.5px solid #d8d8d8f5;
      height: 32px;
      border-radius: 0 7px 7px 0;
      background: #d8d8d8f5;
      margin-top: 5px;

      select {
        width: 60px;
        height: 100%;
        background-color: #d8d8d8f5;
        border: none;
        padding: 5px;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
      input {
        width: calc(100% - 60px);
        height: 100%;
        background-color: #f3f3f3e7;
        border: none;
        border-radius: 0 5px 5px 0;
        font-size: 14px;
        color: gray;
        padding: 10px;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
    div.button_container {
      width: 100%;
      /* border:1px solid #b9b9b9; */
      padding: 0.7rem 1rem;
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
      button {
        padding: 0.7rem 1rem;
        background-color: #0c84f5;
        border: none;
        border-radius: 10px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        cursor: pointer;
        color:#fff;
        font-size:16px;

        &:focus {
          outline: none;
        }
       
      }
    }
  }
`;

const SelectCurrency = () => {
  return (
    <Container>
      <div className="title">Selected Curency:</div>
      <div className="card">
        <div className="input_container">
          <select name="currency" id="currency">
            <option value="AFRN">AFRN</option>
            <option value="ZAR">ZAR</option>
          </select>

          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="0.000001"
            aria-label="amount"
          />
        </div>

        <div className="button_container">
          <button>send</button>
          <button>Receive</button>
        </div>
      </div>
    </Container>
  );
};

export default SelectCurrency;
