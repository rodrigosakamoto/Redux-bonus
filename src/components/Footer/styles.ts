import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > div {
    display: flex;
    align-items: center;

    a + a {
      margin-left: 10px;
    }
  }
`;
