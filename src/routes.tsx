import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import LikedProducts from './pages/LikedProducts';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/favorites" component={LikedProducts} />
    </Switch>
  );
};

export default Routes;
