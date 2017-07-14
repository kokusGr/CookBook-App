import React from 'react';
import styled from 'styled-components';
import Image from '../common/Image';
import Navi from './Navi';
import Logo from './Logo';
import Wrapper from '../common/Wrapper';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.mainBlack};

  &  nav {
    float: right;
  }

  &  img {
    float: left;
  }

  &:after {
    clear: both;
    display: table;
    content: "";
  }
`;

/* eslint-disable global-require */
const Header = () => (
  <HeaderContainer>
    <Wrapper wide>
      <Logo>
        <Image src={require('../../images/logo.svg')} />
      </Logo>
      <Navi />
    </Wrapper>
  </HeaderContainer>
);

export default Header;
