import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import RoomsPage from '../../containers/RoomsPage/RoomsPage';
import RoomPage from '../../containers/RoomPage/RoomPage';
import './app.css';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <Router>
    <div className="app">
      <AppRoute exact path="/" layout={MainLayout} component={RoomsPage} />
      <AppRoute path="/listings/:id" layout={MainLayout} component={RoomPage} />
    </div>
  </Router>
);

export default App;
