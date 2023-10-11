import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic" src="" />
          社会热点
        </TopicItem>
      </TopicWrapper>
    );
  }
}

export default Topic;