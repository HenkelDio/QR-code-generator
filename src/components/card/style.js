import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;

  display: flex;
  flex-direction: column;

  min-height: 550px;
  margin: 50px auto;
  padding: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  background-color: #fff;

  input {
    border: 2px solid #ccc;
    border-radius: 5px;
    height: 40px;
    outline: none;
    padding-left: 10px;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px;
  }

  p {
    opacity: 0.8;
    margin-bottom:10px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  button {
    background-color: #3D5A80;
    color: white;
    font-weight: bold;
    border: none;
    height: 60px;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

`;
