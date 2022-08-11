import {createGlobalStyle} from 'styled-components';

const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  :root {
    --color-highlight: #333333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
