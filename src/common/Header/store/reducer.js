import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({ focused: false });

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // 搜索光标聚焦
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 设置的值，返回一个全新的对象
      return state.set('focused', true);
    // 搜索光标消失
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      break;
  }
  return state;
};

export default reducer;
