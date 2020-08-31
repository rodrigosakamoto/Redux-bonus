import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { Container, Logo, Cart, Favorite } from './styles';
import { IState } from '../../store';

const Header: React.FC = () => {
  const cartSize = useSelector<IState, number>(
    state => state.cart.items.length,
  );

  const likeSize = useSelector<IState, number>(
    state => state.cart.likes.length,
  );

  return (
    <Container>
      <Logo to="/">
        <img
          src="https://developer.nintendo.com/noa-theme/images/bkg/nintendo.png"
          alt="Nintendo"
        />
      </Logo>
      <nav>
        <Cart to="/cart" cartsize={cartSize}>
          <FiShoppingCart size={24} color="#a0aec0" />
        </Cart>
        <Favorite to="/" likesize={likeSize}>
          <FiHeart size={24} color="#a0aec0" />
        </Favorite>
      </nav>
    </Container>
  );
};

export default Header;
