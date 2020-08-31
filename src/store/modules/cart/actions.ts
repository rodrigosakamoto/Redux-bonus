import { IProduct, ActionTypes } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}

export function removeFromCart(productId: number) {
  return {
    type: ActionTypes.removeFromCart,
    payload: {
      productId,
    },
  };
}

export function updateQuantityRequest(productId: number, quantity: number) {
  return {
    type: ActionTypes.updateQuantityRequest,
    payload: {
      productId,
      quantity,
    },
  };
}

export function updateQuantitySuccess(productId: number, quantity: number) {
  return {
    type: ActionTypes.updateQuantitySuccess,
    payload: {
      productId,
      quantity,
    },
  };
}

export function likeProductRequest(product: IProduct) {
  return {
    type: ActionTypes.likeProductRequest,
    payload: {
      product,
    },
  };
}

export function likeProductSuccess(product: IProduct) {
  return {
    type: ActionTypes.likeProductSuccess,
    payload: {
      product,
    },
  };
}
