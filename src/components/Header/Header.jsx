import React from 'react';
import { HeaderPage, NavLink, Heading } from './HeaderStyles';

const Header = () => (
  <HeaderPage className="site-header">
    <NavLink to="/">
      <Heading>Rent room</Heading>
    </NavLink>
  </HeaderPage>
);

export default Header;
