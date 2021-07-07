import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const Project = ({ title, img, code, link }) => {
  return (
    <Container>
      <Image>
        <img src={img} alt='' />
      </Image>
      <Info>
        <Fade right big>
          <Title>Spotify clone</Title>
          <SecondaryTitle>technologies used :</SecondaryTitle>
          <TechUsed>React js - APIs </TechUsed>
          <SecondaryTitle>Description :</SecondaryTitle>
        </Fade>
      </Info>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 300px;
  margin: 40px auto;
  border-radius: 10px;
`;
const Image = styled.div`
  flex: 1;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const Info = styled.div`
  flex: 1;
  box-shadow: -2px 4px 35px -8px rgba(0, 0, 0, 0.68);
  margin: 0 40px;
  padding: 20px;

  position: relative;
  :before {
    content: '🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑';
    position: absolute;
    bottom: 200px;
    left: 350px;
    width: 20%;
    height: 50px;
    transform: skewY(5deg);
    z-index: -1;
    filter: blur(10px);
  }
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #1db954;
  margin-bottom: 10px;
`;
const SecondaryTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #1db954;
`;
const TechUsed = styled.div``;
