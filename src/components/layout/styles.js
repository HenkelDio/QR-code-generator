import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  font-weight: 600;

  @media(max-width: 700px) {
    width: 100%;
  }
`;
