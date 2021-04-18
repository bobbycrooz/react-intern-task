import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  div.title {
    background-color: transparent;
    color: blue;
    padding: 0.3rem 0.225rem;
    font-size: 14px;
    font-weight: 500;
  }
  div.card {
    width: 100%auto;
    background-color: #fff;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content:space-between; */
    div.input_container {
      width: 98%;
      border: 1px solid #b9b9b9;
      height: 32px;
      border-radius: 0 7px 7px 0;
      background: gray;
      margin-top: 5px;

      select {
        width: 60px;
        height: 100%;
        background-color: gray;
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
        background-color: lightgray;
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
        padding: 0.9rem 1rem;
        background-color: lightblue;
        border: none;
        border-radius: 10px;
        text-transform: capitalize;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        &:hover {
          transform: translateY(2px);
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
            placeholder="amount"
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
