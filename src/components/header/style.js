import styled from 'styled-components';

export const Container = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  font-family: 'Rubik', sans-serif;
  color: ${(props) => props.theme.logoFontColor};
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  h1{
    margin: 0;
  }

  button{
    background-color: #E0FBFC;
    border: none;
    height: 30px;
    width: 100px;
    border-radius: 8px;

    cursor: pointer;
    color: #000;
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
  }
`;
