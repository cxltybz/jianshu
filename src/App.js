import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/Header/index.js';
import { GlobalStyle } from './style.js';
import store from './store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
      </Provider>
    </Fragment>
  );
};

export default App;
