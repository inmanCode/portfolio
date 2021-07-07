import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';

const anner = () => {
  return (
    <Section>
      <Container>
        <Zoom>
          <img src='./images/ReadyPlayerMe-Avatar.png' alt='' />
        </Zoom>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span style="color:#569cd6;">console</span>.<span style="color:#DCDCAA;">log</span>( <span style="color:#CE9178;">'Hello I am Aymane and I am a front-end developer'</span>)<div><span style="color:#D197D9;">if</span> (<span  style="color:#569cd6;">interested</span>)<span> {</span></div> <span style="color:#DCDCAA;">scrollDown</span>(); <div> } </div>`
              )
              .start();
          }}
        />
      </Container>
    </Section>
  );
};

export default anner;
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  transform: translateY(-40px);
  z-index: 20;
  img {
    width: 300px;
    height: 300px;
  }
`;
