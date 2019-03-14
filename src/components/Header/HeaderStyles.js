import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const HeaderPage = styled.header`
  background: #003e60;
  text-align: left;
  padding: 0 40px;
  position: relative;
  height: 64px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Heading = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-size: 21px;
  line-height: 64px;

  @media only screen and (min-width: 650px) {
    font-size: 32px;
  }
`;

export { HeaderPage, NavLink, Heading };
