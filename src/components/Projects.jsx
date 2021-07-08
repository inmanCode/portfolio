import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Bounce from 'react-reveal/Bounce';

const Projects = () => {
  return (
    <Container style={{ width: '80%', margin: '40px auto' }}>
      <h1>Projects</h1>
      <Bounce left>
        <Project
          title='pro4'
          img='./images/p4.png'
          code='https://github.com/aymaneabssi'
          link='https://github.com/aymaneabssi'
        />
      </Bounce>
      <Bounce right>
        <Project
          title='pro4'
          img='./images/p4.png'
          code='https://github.com/aymaneabssi'
          link='https://github.com/aymaneabssi'
        />
      </Bounce>
      <Bounce left>
        <Project
          title='pro4'
          img='./images/p4.png'
          code='https://github.com/aymaneabssi'
          link='https://github.com/aymaneabssi'
        />
      </Bounce>
      <Bounce right>
        <Project
          title='pro4'
          img='./images/p4.png'
          code='https://github.com/aymaneabssi'
          link='https://github.com/aymaneabssi'
        />
      </Bounce>
    </Container>
  );
};

export default Projects;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    padding: 20px 0;
    background: #569cd6;
    margin: 20px 0;
    width: 100%;
    border-radius: 10px;
  }
`;
