import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import './Header.less';

const { SubMenu } = Menu;



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
    };


  }


  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { className } = this.props;

    return (
      <div className={"Header " + className}>
        <div className="Header-MenuContainer">
          <Menu onClick={this.handleClick} className="Header-Menu" selectedKeys={[this.state.current]} mode="horizontal">
            <Icon
              className="Header-Icon"
              type="thunderbolt"
              theme="twoTone"
              style={{ fontSize: '32px' }}
              onClick={(e) => e.stopPropagation()}
            />
            <Menu.Item key="mail">
              <Icon type="read" />
              读书笔记
            </Menu.Item>
            <Menu.Item key="app" >              
              <Icon type="project" />
              项目
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="area-chart" />
                  可视化 {"  "}
                  <Icon type="down" />
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>

      </div>
    )
  }
}

export default Header;