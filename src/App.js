import React, { Fragment } from 'react';
import Header from './common/Header/index.js';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
