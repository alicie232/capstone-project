import {createGlobalStyle} from 'styled-components';

const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
