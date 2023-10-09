import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

// 头部样式
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
// 左侧logo样式
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`;
// 头部中间样式
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;
// 头部中间分类样式
export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
// 头部搜索框整体样式
export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

// 头部搜索框样式
export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

// 搜索框弹窗布局
export const SearchInfo = styled.div`
  position: absolute;
  left: 0px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
// 搜索框弹窗标题布局
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

// 搜索框弹窗切换下一批布局
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 14px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

// 搜索框弹窗列表布局
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`;

// 头部右侧按钮样式
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
// 头部右侧详细样式
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
