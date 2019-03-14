import React from 'react';
import { Container } from './Grid';
import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div id="main-layout">
    <Header />
    <Container id="main-layout-body">{children}</Container>
  </div>
);

export default MainLayout;
