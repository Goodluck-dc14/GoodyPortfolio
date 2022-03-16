import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <span>A Full-Stack Developer</span>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 40rem;
  width: 100%;
`;

const Wrapper = styled.div`
  background-image: url("./img/good.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
