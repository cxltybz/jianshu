import { actionTypes } from './index';
import { fromJS } from 'immutable';
import axios from 'axios';

// 因为这里传递需要变成immutable的数组而不是js数组
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

// 搜索光标聚焦
export const searchFocus = () => ({ type: actionTypes.SEARCH_FOCUS });
// 搜索光标消失
export const searchBlur = () => ({ type: actionTypes.SEARCH_BLUR });

// 搜索弹窗移入
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});

// 搜索弹窗移出
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});

export const changePage = (page) => ({
  type: actionTypes.CHANdGE_PAGE,
  page,
});

// 获取搜索列表数据
export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log('erro');
      });
  };
};
