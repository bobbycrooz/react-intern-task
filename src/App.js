import React from "react";
import styled from "styled-components";
import { Header,SelectCurrency, RecentActivities, Footer } from "./components";



const AppContainer = styled.div`
  width: 390px;
    background-color: #d8d8d8f5;


  @media screen and (max-width: 400px) {
    & {
      width: 100vw;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <RecentActivities/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
