import React from 'react';

import Catalog from '../../components/Catalog';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Catalog />
    </Container>
  );
};

export default Home;
