import React, { Component } from 'react';
import logo from '../../logo.svg';
import {NavLink} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="zmz-react-header">
        <div className="zmz-react-header__box">
          <div className="zmz-react-header__left">
            <a href="#/bug"><img src={logo} className="zmz-react-logo" alt=""/></a>
          </div>
          <div className="zmz-react-header__right">
            <button className="zmz-react-button"><span>=</span></button>
            <div className="zmz-react-nav">
              <ul className="zmz-nav__demo">
                <li className="nav-item"><NavLink exact to='/' className="blue">变量的定义和初始化</NavLink></li>
                <li className="nav-item"><NavLink  to='/Demo' className="blue">事件的定义和使用</NavLink></li>
                <li className="nav-item"><NavLink  to='/Demo2' className="blue">组件使用的场景</NavLink></li>
                <li className="nav-item"><NavLink  to='/Demo4' className="blue">组件的数据传递</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
