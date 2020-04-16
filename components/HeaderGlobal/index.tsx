import * as React from 'react';
import Link from 'next/link';

const HeaderGlobal: React.FC = () => (
  <header>
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
  </header>
);

export default HeaderGlobal;
