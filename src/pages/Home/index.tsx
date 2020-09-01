import React from 'react';

import Catalog from '../../components/Catalog';

import { Container } from './styles';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Catalog />
      <Footer />
    </Container>
  );
};

export default Home;
