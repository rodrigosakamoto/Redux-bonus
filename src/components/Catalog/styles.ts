import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin: 20px 0;
  }
`;

export const Filter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 0 auto;
  list-style: none;
  height: 200px;
  div {
    background: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    button {
      border: 0;
      background: none;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      span {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
      }
    }
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 0 auto;
`;
