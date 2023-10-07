import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style';

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  // 绑定搜索动画ref
  const slideRef = React.createRef();

  return (
    <>
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa" />
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
              nodeRef={slideRef}
            >
              <NavSearch
                ref={slideRef}
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? 'focused iconfont icon-fangdajing'
                  : 'iconfont icon-fangdajing'
              }
            />
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont icon-line-quillpenyumaobi" />
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    </>
  );
};

// 传递的参数
const mapStateProps = (state) => {
  return { focused: state.get('header').get('focused') };
};

// 修改store里的参数数据
const mapDispatchProps = (dispatch) => {
  return {
    // 搜索光标聚焦事件
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    // 搜索光标离开事件
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateProps, mapDispatchProps)(Header);
