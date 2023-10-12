import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://sg-upload-images.jianshu.io/admin_banners/web_images/5011/a6f28eafe7b8b3dfa634b80f51300a1568d72ba1.png?imageMogr2/quality/50',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://sg-upload-images.jianshu.io/admin_banners/web_images/5011/a6f28eafe7b8b3dfa634b80f51300a1568d72ba1.png?imageMogr2/quality/50',
    },
  ],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
