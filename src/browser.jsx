import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Root from './Root';
import App from './components/App/App';
import GlobalStyle from './styles/global';
import * as serviceWorker from './serviceWorker';

render(
  <Root>
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>
  </Root>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
