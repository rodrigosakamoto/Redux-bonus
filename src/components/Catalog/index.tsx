import React, { useState, useEffect, useCallback } from 'react';

import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import CatalogItem from '../CatalogItem';

import {
  Container,
  Filter,
  DsIcon,
  SwitchIcon,
  GamecubeIcon,
  Product,
} from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const ds = 'ds';
  const cube = 'cube';
  const nswitch = 'switch';

  useEffect(() => {
    async function loadCatalog() {
      const response = await api.get<IProduct[]>('products');

      setCatalog(response.data);
    }

    loadCatalog();
  }, []);

  const handleFilter = useCallback(async type => {
    const response = await api.get<IProduct[]>('products');

    setCatalog(response.data.filter(product => product.type === type));
  }, []);

  return (
    <Container>
      <Filter>
        <button type="button" onClick={() => handleFilter(ds)}>
          <DsIcon />
          <span>Nintendo DS</span>
        </button>
        <button type="button" onClick={() => handleFilter(nswitch)}>
          <SwitchIcon />
          <span>Nintendo Switch</span>
        </button>
        <button type="button" onClick={() => handleFilter(cube)}>
          <GamecubeIcon />
          <span>Nintendo GameCube</span>
        </button>
      </Filter>
      <h2>Produtos</h2>
      <Product>
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Product>
    </Container>
  );
};

export default Catalog;
