import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0 auto;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
