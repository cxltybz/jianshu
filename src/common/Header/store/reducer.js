import { actionTypes } from './index';

const defaultState = { focused: false };

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    // 搜索光标聚焦
    case actionTypes.SEARCH_FOCUS:
      newState.focused = true;
      break;
    // 搜索光标消失
    case actionTypes.SEARCH_BLUR:
      newState.focused = false;
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
