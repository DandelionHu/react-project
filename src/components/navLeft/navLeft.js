import React, {Component} from 'react'
import menuList from "../../config/menuConfig";
import {Menu, Icon, Button} from 'antd';
import './navLeft.less'

const {SubMenu} = Menu;

class NavLeft extends Component {
  state = {
    collapsed: false,
    menuTreeNode:''
  };
  componentWillMount() {
    const menuTreeNode=this.InitMenu(menuList)
    console.log(menuTreeNode)
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  InitMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return(
            <SubMenu title={<span><Icon type={item.icon}/><span>{item.title}</span></span>} key={item.key}>
              {this.InitMenu(item.children)}
            </SubMenu>
        )
      }
      return (
          <Menu.Item key={item.key}>
            <Icon type={item.icon}/>
            <span>{item.title}</span>
          </Menu.Item>
      )
    })
  }
  render() {
    return (
        <div className='navLfet'>
          <div className='logo'>
            <img src="/assets/logo.png" alt=""/>
          </div>
          <Button type="primary" onClick={this.toggleCollapsed}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
          </Button>
          <Menu mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
            {this.state.menuTreeNode}
          </Menu>
        </div>
    )
  }
  //收起菜单
  toggleCollapsed=()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }

}

export default NavLeft