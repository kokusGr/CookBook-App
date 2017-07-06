import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Arial, sans-serif;
    margin: 0;
  }
`;

export default injectGlobal;
