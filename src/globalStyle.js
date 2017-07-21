import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  body, input, textarea, button {
    font-family: 'Raleway', sans-serif;
  }

  ul, ol {
    padding: 0;
    margin: 0;
  }
`;

export default injectGlobal;
