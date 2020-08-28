import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  cartSize?: number;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  box-shadow: 0 4px 6px -8px #333;
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const Nav = styled.nav``;

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
    color: #333;

    content: '${props => props.cartSize && props.cartSize}';
    display: ${props =>
      props.cartSize && props.cartSize > 0 ? 'inline' : 'none'};
  }
`;

export const Favorite = styled(Link)`
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
    color: #333;
    content: '1';
  }
`;
