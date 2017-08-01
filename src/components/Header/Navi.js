import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes List</Link>
      </li>
      <li>
        <Link to="/recipes/new">Add new recipe</Link>
      </li>
    </ul>
  </StyledNavi>
);

export default Navi;
