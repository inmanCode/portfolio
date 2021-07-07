import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
const Nav = () => {
  return (
    <NavContainer>
      <img src='./images/wave.png' alt='' />
      <Logo>A-Aymane portfolio</Logo>
      <Options>
        <Option>
          <a href='u'>about</a>
        </Option>
        <Option>
          <a href='u'>Projects</a>
        </Option>
        <Option>
          <a href='u'>contact me</a>
        </Option>
        <Option>
          <a href='u'>
            <GitHubIcon />
          </a>
        </Option>
      </Options>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  flex: 1;
  z-index: 2;
`;
const Options = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;
const Option = styled.div`
  a {
    color: white;
    text-decoration: none;

    :hover {
      text-shadow: 0px 5px 9px rgba(255, 255, 255, 1);
    }
  }
`;
