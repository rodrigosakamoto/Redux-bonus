import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { IState } from '../../store';
import { ILikeItem } from '../../store/modules/cart/types';

const LikedProducts: React.FC = () => {
  const like = useSelector<IState, ILikeItem[]>(state => state.cart.likes);

  return (
    <Container>
      <h1>Lista de favoritos</h1>
      {like.map(item => (
        <Link to={`/product/${item.product.id}`}>
          <img src={item.product.image} alt={item.product.title} />
          <h2>{item.product.title}</h2>
        </Link>
      ))}
    </Container>
  );
};

export default LikedProducts;
