import { Reducer } from 'redux';
import produce from 'immer';
import { ICartState, ActionTypes } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  likes: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      case ActionTypes.removeFromCart: {
        const { productId } = action.payload;
        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === productId,
        );

        if (productInCartIndex >= 0) {
          draft.items.splice(productInCartIndex, 1);
        }
        break;
      }
      case ActionTypes.updateQuantitySuccess: {
        const { productId, quantity } = action.payload;
        const productIndex = draft.items.findIndex(
          item => item.product.id === productId,
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity = Number(quantity);
        }
        break;
      }
      case ActionTypes.likeProductRequest: {
        const { product } = action.payload;

        const productInLikeIndex = state.likes.findIndex(
          item => item.product.id === product.id,
        );

        if (productInLikeIndex >= 0) {
          draft.likes.splice(productInLikeIndex, 1);
        } else {
          draft.likes.push({ product });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
