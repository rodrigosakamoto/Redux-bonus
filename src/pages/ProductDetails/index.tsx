import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { IProduct, ILikeItem } from '../../store/modules/cart/types';
import {
  addProductToCartRequest,
  likeProductRequest,
} from '../../store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ProductInfo,
  ProductPrice,
  HeartIcon,
} from './styles';
import { IState } from '../../store';

const ProductDetails: React.FC = () => {
  const like = useSelector<IState, ILikeItem[]>(state => state.cart.likes);
  const dispatch = useDispatch();

  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`products/${id}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [id]);

  const liked = like.find(
    likedProduct => likedProduct.product.id === product?.id,
  );
  const handleAddProductToCart = useCallback(
    item => {
      dispatch(addProductToCartRequest(item));
    },
    [dispatch],
  );

  const handleLike = useCallback(
    item => {
      dispatch(likeProductRequest(item));
    },

    [dispatch],
  );

  return (
    <Container>
      <ProductImage>
        <img src={product?.image} alt={product?.title} />
      </ProductImage>
      <ProductInfo>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <ProductPrice>
          <div>
            <span>Preço:</span>
            <strong>
              R$
              {'  '}
              {product?.price}
            </strong>
          </div>
          <button
            type="button"
            onClick={() => handleLike(product)}
            className="fav"
          >
            {liked ? <HeartIcon color="#e60012" /> : <HeartIcon />}
          </button>
          <button
            className="cart"
            type="button"
            onClick={() => handleAddProductToCart(product)}
          >
            Adicionar carrinho
          </button>
        </ProductPrice>
      </ProductInfo>
    </Container>
  );
};

export default ProductDetails;
