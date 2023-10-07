import { actionTypes } from './index';

// 搜索光标聚焦
export const searchFocus = () => ({ type: actionTypes.SEARCH_FOCUS });
// 搜索光标消失
export const searchBlur = () => ({ type: actionTypes.SEARCH_BLUR });
