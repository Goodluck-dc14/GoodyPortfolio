import React from "react";
import styled from "styled-components";

const Abou = () => {
  return (
    <Container id="About">
      <NameHolder>
        <h1>ABOUT ME</h1>
      </NameHolder>
      <Wrapper>
        <Left>
          <Img src="/Img/goody.jpg" />
        </Left>
        <Right>
          <TextHolder>
            <BigText>My Bio</BigText>
            <Text>
              Goodluck Ogonna is a tech enthusiast who has a vision to increase
              female participation in tech and help eradicate the menace of
              teenage pregnancies in young girls in her community. She is a
              transformational leader who believes positive and impactful
              development can be achieved when people and organisations live not
              just for themselves.but through a life of service
            </Text>
            <SecText>
              She is the Co-founder CodeLab and team leads of SheCodes; A
              community based software development training program for
              underserved youths and girls in ajegunle community, lagos. She has
              a BA in international studies and diplomacy.
            </SecText>
          </TextHolder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Abou;

const Container = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding-bottom: 40px;
    padding-top: 20px;
  }
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-right: unset;
  }
`;

const Img = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: unset;
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const TextHolder = styled.div``;

const BigText = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const Text = styled.div`
  margin-top: 20px;
  max-width: 450px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

const SecText = styled.div`
  margin-top: 20px;
  max-width: 450px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;
