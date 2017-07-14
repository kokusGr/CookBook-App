import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Verdana, Arial, sans-serif;
    margin: 0;
  }
`;

export default injectGlobal;
