import React from 'react';

import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <a
          href="https://github.com/rodrigosakamoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={24} color="#2d3748" />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-sakamoto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={24} color="#2d3748" />
        </a>
      </div>
      <p>By Rodrigo Sakamoto</p>
    </Container>
  );
};

export default Footer;
