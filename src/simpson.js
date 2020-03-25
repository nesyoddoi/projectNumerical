import React, { Component } from 'react';
import { InputNumber,Button, Layout, Menu, Breadcrumb,Select,Table } from 'antd';
import './App.css';
import Sidebar from './Sidebar';
import { Cascader , Input  } from 'antd';
import axios from 'axios';
import { parse} from 'mathjs';
// import Plot from 'react-plotly.js';
var Algebrite = require('algebrite')
// import Algebrite from 'mathjs-simple-integral';


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


class Simpson extends Component {
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
            simpson:[],
            equation:"",
            check:null,
            a:"",
            b:"",
            I:"",
            error:"",
            exact:"",
            showOutput:false
        };
      }

componentDidMount()
    {
        axios.get('http://localhost/numerical/php/simpson.php')
        .then(res=>{
            // console.log(res.data);
            let item =[];
            res.data.map(dataMap=>{
              item = item.concat(dataMap.equation);
              // console.log(item); 
            });
            this.setState({
                simpson:item
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

  err(cal, exact) {
    var er = ((Math.abs((exact - cal) / exact))*100)/100;
    return er;
  }
  
  exact(Eq,xi) {
    const node = parse(Eq); 

    var expr = node.compile(Algebrite.integral(node));
    let scope = {
      x:xi
    }
    return expr.eval(scope) ;

  } 
  
  simpson=()=>{
    // var Algebrite = require('algebrite')
    // evaluate(x:4)
    var eq = this.state.equation;
    
    var a = parseFloat(this.state.a);
    var b = parseFloat(this.state.b);
    var h=(b-a)/2;
    var x= a+h;

    
    var cal = (h/3)*((this.Solve(eq,b)+4*(this.Solve(eq,x))+this.Solve(eq,a)));
    var exact = this.exact(eq,b)-this.exact(eq,a);
    var error = this.err(cal,exact);
    this.setState({I:cal,error:error,exact:exact,showOutput:true})
    // var t = Algebrite.integral('e^x', 'x');
    // console.log(t);
  }

  handleChangeeq = (value) => {
    console.log('Selected',value);
    this.setState({
        equation:value
    });
  }
  
  handleChangea = (value) => {
    console.log('a',value);
    this.setState({
        a:value
    });
  }

  handleChangeb = (value) => {
    console.log('b',value);
    this.setState({
        b:value
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
              <Breadcrumb.Item>Simpson's Rule</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              SIMPSON'S RULE<br/><br/>
              <div>
                <Select showSearch style={{ width: 200 }} placeholder="Select your Function" 
                onChange={this.handleChangeeq} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch} >
                {this.state.simpson.map(e=>{
                  // console.log(e);
                  return <Option value={e}>{e}</Option>
                })}
                </Select>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(a)" style={{width:200}} value={this.state.a} onChange={this.handleChangea}/>
              </div><br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(b)" style={{width:200}} value={this.state.b} onChange={this.handleChangeb}/>
              </div>
              <br/>
        
              <div>
                <Button type="primary" onClick={this.simpson}>Submit</Button>
              </div>
              <br />
              {this.state.showOutput && <div style={InputStyle}>
                OUTPUT <br/>
                I :  {this.state.I}<br/>
                EXACT :  {this.state.exact}<br/>
                ERROR :  {this.state.error}

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

export default Simpson;
