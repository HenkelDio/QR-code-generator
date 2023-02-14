import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  font-family: 'Rubik', sans-serif;

  display: flex;
  flex-direction: column;

  width: 400px;
  height: 550px;
  margin: 100px auto;
  padding: 20px;

  box-shadow: 2px 2px 10px 2px #ccc;
  border-radius: 10px;

  background-color: #fff;

  input {
    border: 2px solid #ccc;
    border-radius: 5px;
    height: 30px;
    outline: none;
    padding-left: 10px;
    font-size: 1.2rem;

    margin-bottom: 20px;
  }

  label {
    text-align: left;
    opacity: 0.8;
    margin-bottom: 5px;

  }

  button {
    background-color: #3D5A80;
    color: white;
    font-weight: bold;
    border: none;
    height: 40px;
    cursor: pointer;
    margin-top: 20px;
  }

`;
