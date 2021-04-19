import React from "react";
import styled from "styled-components";
import { Header, RecentActivities, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  background-color: #d8d8d8f5;
  position: relative;
  height: 100vh;

  @media screen and (min-width: 478px) {
    & {
      width: 390px;
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
