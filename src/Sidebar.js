import { Menu, Switch } from 'antd';
import React,{Component} from 'react';
import {Link} from "react-router";
import { Layout, Breadcrumb } from 'antd';

import {
    CloudTwoTone,
    FireTwoTone,
    PushpinTwoTone,
    StarTwoTone,
    HeartTwoTone,
    ThunderboltTwoTone
  } from '@ant-design/icons';

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

class Sidebar extends Component{
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
  render() {
    return (

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark"  mode="inline">
          <Menu.Item key="1">
          <StarTwoTone />
            <Link to="/"/><span>HOME</span>
            
          </Menu.Item>
          
          <SubMenu
            key="sub1"
            title={
              <span>
               <CloudTwoTone />
                <span>ROOT OF EQUATIONS</span>
              </span>
            }
          >
           
            <Menu.Item key="2"><PushpinTwoTone />BISECTION METHOD<Link to="/bisection"/></Menu.Item>
            <Menu.Item key="3"><PushpinTwoTone />FALSE-POSITON METHOD<Link to="/falseposition"/></Menu.Item>
            <Menu.Item key="4"><PushpinTwoTone />ONE-POINT ITERATION METHOD<Link to="/onepoint"/></Menu.Item>
            <Menu.Item key="5"><PushpinTwoTone />NEWTON-RAPSHON METHOD<Link to="/newton"/></Menu.Item>
            <Menu.Item key="6"><PushpinTwoTone />SECANT METHOD<Link to="/secant"/></Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <FireTwoTone />
                <span>LINEAR ALGEBRAIC EQUATION</span>
              </span>
            }
          >
            <Menu.Item key="7"><PushpinTwoTone />CRAMER'S RULE<Link to="/cramer"/></Menu.Item>
            
          </SubMenu>

         
          <SubMenu
            key="sub3"
            title={
              <span>
                <HeartTwoTone />
                <span>NUMERICAL INTEGRATION</span>
              </span>
            }
          >
            <Menu.Item key="8"><PushpinTwoTone />TRAPEZOIDAL'S RULE<Link to="/trapezoidal"/></Menu.Item>
            <Menu.Item key="9"><PushpinTwoTone />COMPOSITE TRAPEZOIDAL'S RULE<Link to="/comtrapezoidal"/></Menu.Item>
            <Menu.Item key="10"><PushpinTwoTone />SIMPSON'S RULE<Link to="/simpson"/></Menu.Item>
            <Menu.Item key="11"><PushpinTwoTone />COMPOSITE SIMPSON'S RULE<Link to="/comsimpson"/></Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub4"
            title={
              <span>
                <ThunderboltTwoTone />
                <span>NUMERICAL DIFFERENTIATION</span>
              </span>
            }
          >
            <Menu.Item key="12"><PushpinTwoTone />FIRST FORWARD<Link to="/firstforward"/></Menu.Item>
            <Menu.Item key="13"><PushpinTwoTone />BACKWARD<Link to="/backward"/></Menu.Item>
            <Menu.Item key="14"><PushpinTwoTone />CENTRAL<Link to="/central"/></Menu.Item>
            <Menu.Item key="15"><PushpinTwoTone />MORE ACCURATE FIRST FORWARD<Link to="/firstforwardh2"/></Menu.Item>
            <Menu.Item key="16"><PushpinTwoTone />MORE ACCURATE BACKWARD<Link to="/backwardh2"/></Menu.Item>
            <Menu.Item key="17"><PushpinTwoTone />MORE ACCURATE CENTRAL<Link to="/centralh2"/></Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>

    );
  }
}
export default Sidebar;