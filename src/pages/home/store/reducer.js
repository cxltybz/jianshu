import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{ id: 1, title: '社会热点' }],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;