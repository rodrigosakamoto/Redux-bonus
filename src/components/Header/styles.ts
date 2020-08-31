import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  cartsize?: number;
  likesize?: number;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  box-shadow: 0 4px 6px -8px #2d3748;
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const Cart = styled(Link)<Props>`
  margin-right: 20px;
  position: relative;

  &::after {
    background-color: #f3f3f3;
    width: 16px;
    height: 16px;

    position: absolute;
    right: -8px;
    top: -12px;
    border-radius: 50%;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: #2d3748;

    content: '${props => props.cartsize && props.cartsize}';
    display: ${props =>
      props.cartsize && props.cartsize > 0 ? 'inline' : 'none'};
  }
`;

export const Favorite = styled(Link)<Props>`
  position: relative;

  &::after {
    background-color: #f3f3f3;
    width: 16px;
    height: 16px;

    position: absolute;
    right: -8px;
    top: -12px;
    border-radius: 50%;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: #2d3748;
    content: '${props => props.likesize && props.likesize}';
    display: ${props =>
      props.likesize && props.likesize > 0 ? 'inline' : 'none'};
  }
`;
