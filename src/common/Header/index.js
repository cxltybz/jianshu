import React, { Component } from 'react';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends Component {
  slideRef = React.createRef();

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouserEnter,
      handleMouserLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouserEnter}
          onMouseLeave={handleMouserLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.iconSpin)}
            >
              <i
                ref={(icon) => {
                  this.iconSpin = icon;
                }}
                className="iconfont icon-spin spin"
              />{' '}
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;

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
                nodeRef={this.slideRef}
              >
                <NavSearch
                  ref={this.slideRef}
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i
                className={
                  focused
                    ? 'focused iconfont icon-fangdajing zoom'
                    : 'iconfont icon-fangdajing zoom'
                }
              />
              {this.getListArea()}
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
}

// 传递的参数
const mapStateProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  };
};

// 修改store里的参数数据
const mapDispatchProps = (dispatch) => {
  return {
    // 搜索光标聚焦事件
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    // 搜索光标离开事件
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    // 搜索弹窗移入事件
    handleMouserEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    // 搜索弹窗移出事件
    handleMouserLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    // 点击换一批事件
    handleChangePage(page, totalpage, spin) {
      const originAngle = +spin.style.transform.replace(/[^0-9]/gi, '');
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalpage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(mapStateProps, mapDispatchProps)(Header);
