import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import {
  addProductToCartRequest,
  addProductToCartSuccess,
  addProductToCartFailure,
  updateQuantityRequest,
  updateQuantitySuccess,
  likeProductRequest,
} from './actions';
import { IState } from '../..';
import api from '../../../services/api';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
type UpdateQuantityRequest = ReturnType<typeof updateQuantityRequest>;
type LikeProductRequest = ReturnType<typeof likeProductRequest>;
interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select(
    (state: IState) =>
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0,
  );

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    toast.error('Quantidade solicitada fora de estoque');
    yield put(addProductToCartFailure(product.id));
  }
}

function* updateQuantity({ payload }: UpdateQuantityRequest) {
  const { productId, quantity } = payload;
  if (quantity <= 0) return;

  const stock = yield call(api.get, `stock/${productId}`);
  const stockAmount = stock.data.quantity;

  if (quantity > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque!');
    return;
  }

  yield put(updateQuantitySuccess(productId, quantity));
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
  takeLatest(ActionTypes.updateQuantityRequest, updateQuantity),
]);
