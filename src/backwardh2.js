import React, { Component } from 'react';
import { InputNumber,Button, Layout, Menu, Breadcrumb,Select,Table } from 'antd';
import './App.css';
import Sidebar from './Sidebar';
import axios from 'axios';
import { parse,pow,derivative} from 'mathjs';
// import Plot from 'react-plotly.js';

const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;

const InputStyle = {
  background: "#08979c",
  color: "white", 
  fontWeight: "bold", 
  fontSize: "24px"

};

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


class Backwardh2 extends Component {
  state = {
    collapsed: false,  
  };
  // handleSizeChange = e => {
  //   this.setState({ size: e.target.value });
  // };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  constructor(props)
    {
        super(props);
        this.state={
          backwardh2:[],
          Error:"",
          x:"",
          h:"",
          n:"",
          Y:"",
          showOutput: false

        };
      }

componentDidMount()
    {
        axios.get('http://localhost/numerical/php/backward.php')
        .then(res=>{
            // console.log(res.data);
            let item =[];
            res.data.map(dataMap=>{
              item = item.concat(dataMap.equation);
              // console.log(item); 
            });
            this.setState({
              backwardh2:item
            });
        });
        
    }

Solve(Eq,xi) {
        const nEq = parse(Eq); 
        const Equation = nEq.compile();
    
        let scope = {
            x:xi
        }
        return Equation.eval(scope);
           
}

err(fx, ex) {
    var er = Math.abs((fx - ex) / fx)*100;
    return er;
}
  
backwardh2=()=>{
    // var Algebrite = require('algebrite')
    // evaluate(x:4)
    var eq = this.state.equation;
    
    var x = parseFloat(this.state.x);
    var h = parseFloat(this.state.h);
    var n = parseInt(this.state.n);
    var fx,error,exact;

    switch (n) {
        case 1:
            fx = (3*this.Solve(x) - 4*this.Solve(x-(1*h)) + this.Solve(x-(2*h))) / (2*h)
            
            break;
        case 2:
            fx = (2*this.Solve(x) - 5*this.Solve(x-(1*h)) + 4*this.Solve(x-(2*h)) - this.Solve(x-(3*h))) / pow(h, 2)
            break;
        case 3:
            fx = (5*this.Solve(x) - 18*this.Solve(x-(1*h)) + 24*this.Solve(x-(2*h)) - 14*this.Solve(x-(3*h)) + 3*this.Solve(x-(3*h))) / (2*pow(h, 3))
            break;
        default:
            fx = (3*this.Solve(x) - 14*this.Solve(x-(1*h)) + 26*this.Solve(x-(2*h)) - 24*this.Solve(x-(3*h)) + 11*this.Solve(x-(4*h)) - 2*this.Solve(x-(5*h))) / pow(h, 4)
    }
    exact = this.difffuncal();
    error= this.err(fx,exact);
    this.setState({Y:fx,Error:error,showOutput:true});
}
    
   
difffuncal=()=>{
    var eq = this.state.equation;
    var n = this.state.n;
    var x = this.state.x;
    var ans = parse(eq);
    for (var i = 0; i < n; i++) {
        ans = derivative(ans, 'x');
    }
    var expr = ans.compile(ans);
    let scope = {
        x: parseFloat(x)
    };
    return expr.eval(scope);
}

  handleChangeeq = (value) => {
    console.log('Selected',value);
    this.setState({
        equation:value
    });
  }
  
  handleChangex = (value) => {
    console.log('x',value);
    this.setState({
        x:value
    });
  }

  handleChangeh = (value) => {
    console.log('h',value);
    this.setState({
        h:value
    });
  }

  handleChangen = (value) => {
    console.log('n',value);
    this.setState({
        n:value
    });
  }

  
  render(){
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}></Header> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Backward O(h^2)</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            BACKWARD O(h^2)<br/><br/>
              <div>
                <Select showSearch style={{ width: 200 }} placeholder="Select your Function" 
                onChange={this.handleChangeeq} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch} >
                {this.state.backwardh2.map(e=>{
                  // console.log(e);
                  return <Option value={e}>{e}</Option>
                })}
                </Select>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(x)" style={{width:200}} value={this.state.x} onChange={this.handleChangex}/>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(h)" style={{width:200}} value={this.state.h} onChange={this.handleChangeh}/>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INPUT ODER DIFFERENTIAL(n)" style={{width:200}} value={this.state.n} onChange={this.handleChangen}/>
              </div>
              <br/>
        
              <div>
                <Button type="primary" onClick={this.backwardh2}>Submit</Button>
              </div>
              <br />
              {this.state.showOutput && <div style={InputStyle}>
                OUTPUT <br/>
                Fx :  {this.state.Y}<br/>
                Error:    {this.state.Error}
              </div>
              }
                       
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Backwardh2;
