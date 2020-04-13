import * as React from 'react';
import Link from 'next/link';

import { Header } from './styles';

const HeaderGlobal: React.FC = () => (
  <Header>
    <h1>The Movie Database (TMDb)</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/discover">
            <a>Discover</a>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Header>
);

export default HeaderGlobal;
