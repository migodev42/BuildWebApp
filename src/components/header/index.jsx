import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';

const { SubMenu } = Menu;



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
    };


  }

  componentDidMount() {
    console.log('Header: 已加载')
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
          <span className="Header-Icon">
            <Link to='/'>
              <Icon
                type="thunderbolt"
                theme="twoTone"
                style={{ fontSize: '32px' }}

              />
            </Link>
          </span>

          <Menu onClick={this.handleClick} className="Header-Menu" selectedKeys={[this.state.current]} mode="horizontal">

            <SubMenu
              title={
                (
                  <span>
                    <Icon type="area-chart" />
                    项目
                  <Icon type="down" />
                  </span>
                )
              }
            >
              <Menu.Item key="project-mindmap" >
                <Link to={'/mindmap'}>
                  mindmap
                </Link>
              </Menu.Item>
              <Menu.Item key="project-blog" >
                <Link to={'/blog'}>
                  blog
                </Link>
              </Menu.Item>

            </SubMenu>

          </Menu>
        </div>

      </div>
    )
  }
}

export default Header;