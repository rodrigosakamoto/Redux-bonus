import styled from 'styled-components';
import { darken } from 'polished';
import { FiHeart } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  img {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: 20px;
  p {
    margin: 20px 0;

    color: #a0aec0;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: #a0aec0;
    margin-bottom: 5px;
  }

  strong {
    font-size: 24px;
  }

  button.fav {
    background: none;
    margin-left: auto;
    border: none;
  }

  button.cart {
    margin-left: 20px;
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

export const HeartIcon = styled(FiHeart)`
  height: 24px;
  width: 24px;

  &:hover {
    color: #e60012;
  }
`;
