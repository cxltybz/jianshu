import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
class List extends Component {
  render() {
    return (
      <ListItem>
        <img
          className="pic"
          alt="列表图片"
          src="https://lupic.cdn.bcebos.com/20191203/3018229229_14.jpg"
        />
        <ListInfo>
          <h3 className="title">
            胡歌12年后首谈车祸:既然活下来了，就不能白白活着
          </h3>
          <p className="desc">
            文/麦大人 01
            胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...
          </p>
        </ListInfo>
      </ListItem>
    );
  }
}

export default List;
