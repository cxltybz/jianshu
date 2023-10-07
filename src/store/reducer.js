import { combineReducers } from 'redux';
import headerReducer from '../common/Header/store';

const reducer = combineReducers({ header: headerReducer });

export default reducer;
