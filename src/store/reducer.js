import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';
import { reducer as homeReducer } from '../pages/home/store';

// 分散store里的数据，分类来管理数据。不会造成数据堵塞
const reducer = combineReducers({ header: headerReducer, home: homeReducer });

export default reducer;
