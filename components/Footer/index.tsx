import * as React from 'react';
import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <h2>Let's talk about TMDb</h2>
    <p>
    The Movie Database (TMDb) is a community built movie and TV database.
    </p>
    <p>
      <a href="https://www.themoviedb.org/account/signup" target="_blank">
        <b>Sign up for an account</b>
      </a>
    </p>
  </Container>
);

export default Footer;
