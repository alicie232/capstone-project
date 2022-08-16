import {createGlobalStyle} from 'styled-components';

const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  :root {
    --color-highlight: #333333;
    --fontsize-small: 1rem;
    --fontsize-medium: 1.3rem;
    --fontsize-large: 1.8rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin-bottom: 100px;
    font-family: 'Open Sans', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
