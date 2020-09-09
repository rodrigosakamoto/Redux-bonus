import styled from 'styled-components';
import {
  SiNintendo3Ds,
  SiNintendoswitch,
  SiNintendogamecube,
} from 'react-icons/si';

export const Container = styled.div`
  h2 {
    margin: 20px 0;
  }
`;

export const Filter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: none;
    background: #f3f3f3;
    border-radius: 8px;
    padding: 10px;

    span {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const DsIcon = styled(SiNintendo3Ds)`
  width: 46px;
  height: 46px;
`;

export const SwitchIcon = styled(SiNintendoswitch)`
  width: 46px;
  height: 46px;
`;

export const GamecubeIcon = styled(SiNintendogamecube)`
  width: 46px;
  height: 46px;
`;

export const Product = styled.div`
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media (min-width: 1120px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;
