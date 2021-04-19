import React from "react";
import styled from "styled-components";
import { Header, RecentActivities, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const AppContainer = styled.div`
  width: 390px;
  background-color: #d8d8d8f5;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 478px) {
    & {
      width: 100vw;
    }
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <RecentActivities />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
