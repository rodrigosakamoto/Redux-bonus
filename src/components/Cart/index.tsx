import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FiTrash, FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import { Container, ProductTable, Total } from './styles';
import {
  removeFromCart,
  updateQuantityRequest,
} from '../../store/modules/cart/actions';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((totalSum, product) => {
    return totalSum + product.product.price * product.quantity;
  }, 0);

  const handleRemoveFromCart = useCallback(
    id => {
      dispatch(removeFromCart(id));
    },
    [dispatch],
  );

  const handleIncrement = useCallback(
    (item: ICartItem) => {
      dispatch(updateQuantityRequest(item.product.id, item.quantity + 1));
    },
    [dispatch],
  );

  const handleDecrement = useCallback(
    (item: ICartItem) => {
      dispatch(updateQuantityRequest(item.product.id, item.quantity - 1));
    },
    [dispatch],
  );

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <td className="p-image">
                <img src={item.product.image} alt={item.product.title} />
              </td>
              <td>{item.product.title}</td>
              <td>
                R$
                {item.product.price}
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => handleDecrement(item)}>
                    <FiMinusCircle size={20} color="#2d3748" />
                  </button>

                  <input type="number" readOnly value={item.quantity} />

                  <button type="button" onClick={() => handleIncrement(item)}>
                    <FiPlusCircle size={20} color="#2d3748" />
                  </button>
                </div>
              </td>
              <td>
                R$
                {(item.product.price * item.quantity).toFixed(2)}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(item.product.id)}
                >
                  <FiTrash size={24} color="#e60012" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>
            R$
            {total}
          </strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
