import React from "react";
import styled from "styled-components";
import { Header,SelectCurrency, RecentActivities, Footer } from "./components";



const AppContainer = styled.div`
  background-color: rgba(214, 214, 214, 0.925);
  width: 375px;

  @media screen and (max-width: 375px) {
    & {
      width: 100vw;
    }
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SelectCurrency/>
      <RecentActivities/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
