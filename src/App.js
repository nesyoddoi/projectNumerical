import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Link} from "react-router";
import { Layout, Menu, Breadcrumb } from 'antd';
import Sidebar from './Sidebar';
import {CaretRightOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}></Header> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
             
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,fontSize: "24px" ,color: "Black 85%",background: "#adc6ff"}}>
            <i>WELCOME TO NUMERICAL METHODS<br/><br/>
            &nbsp;&nbsp;&nbsp; <CaretRightOutlined />NIPAPORN DAOLOET (นิภาพร ดาวเลิศ) <br/>
            &nbsp;&nbsp;&nbsp; <CaretRightOutlined />5904062630292<br/>
            &nbsp;&nbsp;&nbsp; <CaretRightOutlined />SECTION : 1<br/>
            &nbsp;&nbsp;&nbsp; <CaretRightOutlined />PROFESSOR : ผู้ช่วยศาสตราจารย์ ดร. สุวัจชัย กมลสันติโรจน์ <br/><br/>
            COMPUTER SCIENCE<br/>
            FACULTY OF APPLIED SCIENCE<br/>
            KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK.</i>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
