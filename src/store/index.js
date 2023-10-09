import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// 使redux插件在浏览器中能使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
