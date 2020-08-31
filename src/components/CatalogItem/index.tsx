import React from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../store/modules/cart/types';

import { Container, ProductImage, ProductInfo } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
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
      </ProductInfo>
      <Link to={`/product/${product.id}`}>Detalhes</Link>
    </Container>
  );
};

export default CatalogItem;
