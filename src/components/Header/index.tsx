import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { Container, Logo, Nav, Cart, Favorite } from './styles';
import { IState } from '../../store';

const Header: React.FC = () => {
  const cartSize = useSelector<IState, number>(
    state => state.cart.items.length,
  );

  return (
    <Container>
      <Logo to="/">
        <img
          src="https://developer.nintendo.com/noa-theme/images/bkg/nintendo.png"
          alt="Nintendo"
        />
      </Logo>
      <Nav>
        <Cart to="/" cartSize={cartSize}>
          <FiShoppingCart size={24} color="#d3d3d3" />
          <span />
        </Cart>
        <Favorite to="/">
          <FiHeart size={24} color="#d3d3d3" />
        </Favorite>
      </Nav>
    </Container>
  );
};

export default Header;
