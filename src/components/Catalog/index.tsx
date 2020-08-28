import React, { useState, useEffect, useCallback } from 'react';
import {
  SiNintendo3Ds,
  SiNintendoswitch,
  SiNintendogamecube,
} from 'react-icons/si';
import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import CatalogItem from '../CatalogItem';

import { Container, Filter, Product } from './styles';

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
        <div>
          <button type="button" onClick={() => handleFilter(ds)}>
            <SiNintendo3Ds size={120} />
            <span>Nintendo DS</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleFilter(nswitch)}>
            <SiNintendoswitch size={120} />
            <span>Nintendo Switch</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleFilter(cube)}>
            <SiNintendogamecube size={120} />
            <span>Nintendo GameCube</span>
          </button>
        </div>
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
