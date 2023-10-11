import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './common/Header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';

import { GlobalStyle } from './style.js';
import store from './store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/detail" exact element={<Detail />}></Route>
          </Routes>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
