import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IState } from '../../store';

import { Container, ProductImage, ProductInfo, HeartIcon } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleDetails = useCallback(id => {
    console.log(id);
  }, []);

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container key={product.id}>
      <ProductImage>
        <img src={product.image} alt={product.title} />
      </ProductImage>
      <ProductInfo>
        <div>
          <strong>{product.title}</strong>
          <span>
            R$
            {'  '}
            {product.price}
          </span>
        </div>
        <button type="button">
          <HeartIcon />
        </button>
        {/* <button className="buy" type="button" onClick={handleAddProductToCart}>
          Comprar
        </button> */}
      </ProductInfo>
      <button onClick={() => handleDetails(product.id)} type="button">
        Detalhes
      </button>
    </Container>
  );
};

export default CatalogItem;
