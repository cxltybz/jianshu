import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.slideRef = React.createRef();
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
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
              {/* <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
              nodeRef={this.slideRef}
            > */}
              <NavSearch
                ref={this.slideRef}
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
              {/* </CSSTransition> */}

              <i
                className={
                  this.state.focused
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
  }
  // 搜索光标聚焦事件
  handleInputFocus() {
    this.setState({ focused: true });
  }
  // 搜索光标离开事件
  handleInputBlur() {
    this.setState({ focused: false });
  }
}

export default Header;
