import styled from 'styled-components';

export const Container = styled.header`

  color: ${(props) => props.theme.logoFontColor};
  font-size: 1.5rem;



  padding: 20px;

  h1{
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

`;
