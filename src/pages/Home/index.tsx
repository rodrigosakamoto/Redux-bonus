import React from 'react';
import {
  SiNintendoswitch,
  SiNintendo3Ds,
  SiNintendogamecube,
} from 'react-icons/si';
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
