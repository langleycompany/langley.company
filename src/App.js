import React from "react";
import "./styles.css";

import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from "react-holy-grail-layout";

export default function App() {
  return (
    <Container>
      <Header p={2}>
        <div className="header-main-page">
          <div className="left-side">
            <span className="title">Langley</span>
          </div>
          <div className="right-side" />
        </div>
      </Header>
      <Body>
        <Content p={2} className="page-content-login">
          Building the future.
        </Content>
        <Aside left primary p={2} />
        <Aside right p={2} />
      </Body>
      <Footer p={2}>Langley Company 2020</Footer>
    </Container>
  );
}
