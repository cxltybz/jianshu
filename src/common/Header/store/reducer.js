import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

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
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANdGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};

export default reducer;
