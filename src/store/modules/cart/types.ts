export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  removeFromCart = 'REMOVE_FROM_CART',
  updateQuantityRequest = 'UPDATE_QUANTITY_REQUEST',
  updateQuantitySuccess = 'UPDATE_QUANTITY_SUCCESS',
  likeProductRequest = 'LIKE_PRODUCT_REQUEST',
  likeProductSuccess = 'LIKE_PRODUCT_SUCCESS',
}

export interface IProduct {
  id: number;
  title: string;
  type: string;
  price: number;
  image: string;
  description: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ILikeItem {
  product: IProduct;
}

export interface ICartState {
  items: ICartItem[];
  likes: ILikeItem[];
  failedStockCheck: number[];
}
