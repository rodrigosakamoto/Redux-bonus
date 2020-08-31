import styled from 'styled-components';
import { darken } from 'polished';
import { FiHeart } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: transparent;
  padding: 20px;

  a {
    padding: 14px;
    border-radius: 8px;
    border: 0;
    background: #e60012;
    color: #f3f3f3;
    font-weight: bold;
    text-decoration: none;
    text-align: center;

    &:hover {
      background: ${darken(0.03, '#e60012')};
    }
  }
`;

export const ProductImage = styled.div`
  height: 200px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 180px;
    max-height: 180px;
  }
`;

export const ProductInfo = styled.div`
  strong {
    font-size: 5px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  div {
    width: 200px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      margin: 6px 0;
    }
  }

  button {
    background: none;
    border: 0;
  }
`;

export const HeartIcon = styled(FiHeart)`
  width: 24px;
  height: 24px;
  color: #333;

  &:hover {
    color: #e60012;
  }
`;
