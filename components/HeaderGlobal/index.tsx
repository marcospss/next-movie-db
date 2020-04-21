import * as React from 'react';
import Link from 'next/link';

import { Header, Logo, Nav, List, NavItem } from './styles';

const HeaderGlobal: React.FC = () => (
  <Header>
    <Logo>The Movie Database (TMDb)</Logo>
    <Nav>
      <List>
        <NavItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        {/* <NavItem>
          <Link href="/discover">
            <a>Discover</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
        </NavItem> */}
      </List>
    </Nav>
  </Header>
);

export default HeaderGlobal;
