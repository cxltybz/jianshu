import { legacy_createStore as createStore, compose } from 'redux';
import reducer from './reducer';
// 使redux插件在浏览器中能使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
