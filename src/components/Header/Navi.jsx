import React from 'react';
import styled from 'styled-components';

const StyledNavi = styled.nav`
  padding: 30px 50px;

  & ul {
    padding: 0;
    margin: 0;

    &:after {
      clear: both;
      display: table;
      content: "";
    }
  }

  & li {
    float: left;
    list-style: none;
    padding: 0 1rem;
  }

  & a {
    color: #FFF;
  }
`;

const Navi = () => (
  <StyledNavi>
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Recipes List</a>
      </li>
      <li>
        <a>Add new recipe</a>
      </li>
      <li>
        <a>Categories</a>
      </li>
    </ul>
  </StyledNavi>
);

export default Navi;
