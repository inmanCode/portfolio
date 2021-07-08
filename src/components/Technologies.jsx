import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Technologies = () => {
  return (
    <Container>
      <h1>i work with</h1>
      <Icons>
        <Icon
          svg={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-label='JavaScript'
              viewBox='0 0 512 512'
              id='javascript'
            >
              <rect width='512' height='512' fill='#f7df1e' rx='15%' />
              <path d='m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z' />
            </svg>
          }
          name='Javascript'
        />
        <Icon
          svg={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 128 128'
              viewBox='0 0 128 128'
              id='react'
            >
              <g fill='#61DAFB'>
                <circle cx='64' cy='64' r='11.4' />
                <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z' />
              </g>
            </svg>
          }
          name='React'
        />
        <Icon
          svg={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
              id='redux'
            >
              <path
                fill='#6C4EB0'
                d='M8.152,3.711c0.899-1.136,2.592-1.697,3.746-1.726c3.236-0.062,4.585,4.013,4.689,5.633l1.498,0.454c-0.345-4.966-3.4-7.571-6.323-7.571C9.021,0.5,6.49,2.514,5.47,5.467c-1.393,3.937-0.479,7.722,1.229,10.751C6.55,16.415,6.46,16.762,6.49,17.095c0.029,0.909,0.793,1.666,1.708,1.666h0.06c0.959-0.03,1.693-0.832,1.648-1.787c0-0.909-0.779-1.664-1.693-1.664H8.152c-0.06,0-0.149,0-0.225,0.029c-1.243-2.12-1.768-4.392-1.572-6.843C6.474,6.648,7.074,5.043,8.152,3.711z'
              />
              <path
                fill='#6C4EB0'
                d='M0.932,20.898c1.004,1.514,3.057,2.482,5.304,2.482c0.599,0,1.229-0.044,1.843-0.196c3.896-0.757,6.848-3.119,8.541-6.601l0.014-0.031c0.869-0.076,1.543-0.849,1.499-1.773c-0.046-0.924-0.795-1.665-1.708-1.665h-0.061c-0.943,0.031-1.678,0.833-1.648,1.788c0.03,0.484,0.226,0.878,0.494,1.165c-1.048,2.06-2.621,3.573-5.004,4.846c-1.603,0.847-3.296,1.166-4.944,0.939c-1.378-0.196-2.456-0.819-3.116-1.817c-0.988-1.515-1.078-3.149-0.255-4.784c0.601-1.181,1.499-2.044,2.099-2.469c-0.15-0.393-0.33-1.059-0.42-1.558C-0.867,14.433-0.416,18.823,0.932,20.898z'
              />
              <path
                fill='#6C4EB0'
                d='M23.465,20.23c0.898-1.817,0.824-4.875-1.469-7.495l-0.014,0.03c-2.321-2.756-5.738-4.27-9.635-4.27h-0.51c-0.253-0.56-0.837-0.909-1.497-0.909h-0.045c-0.943,0-1.678,0.819-1.647,1.772c0.03,0.908,0.794,1.666,1.708,1.666h0.074c0.675-0.03,1.259-0.455,1.498-1.06h0.555c2.309,0,4.495,0.681,6.489,2.013c1.527,1.015,2.622,2.347,3.236,3.937c0.538,1.302,0.509,2.574-0.045,3.635c-0.854,1.665-2.293,2.544-4.195,2.544c-1.199,0-2.367-0.379-2.967-0.651c-0.359,0.301-0.959,0.801-1.394,1.105c1.318,0.604,2.652,0.953,3.94,0.953C20.469,23.5,22.64,21.836,23.465,20.23z'
              />
            </svg>
          }
          name='Redux'
        />
        <Icon
          svg={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              data-name='Layer 1'
              viewBox='0 0 24 24'
              fill='white'
              id='github'
            >
              <path d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z' />
            </svg>
          }
          name='Github'
        />
        <Icon
          svg={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMinYMin meet'
              viewBox='0 0 256 256'
              id='git'
            >
              <path
                fill='#DE4C36'
                d='M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324'
              />
            </svg>
          }
          name='Git'
        />
      </Icons>
    </Container>
  );
};

export default Technologies;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    padding: 20px 0;
    background: #569cd6;
    margin: 20px auto;
    width: 80%;
    border-radius: 10px;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0;
`;
