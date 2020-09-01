import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    height: 80px;
    color: #2d3748;

    & + a {
      margin-top: 10px;
    }

    img {
      max-height: 80px;
      max-width: 80px;
    }

    h2 {
      margin-left: 10px;
    }
  }
`;
