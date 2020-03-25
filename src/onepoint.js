import React, { Component } from 'react';
import { InputNumber,Button, Layout, Menu, Breadcrumb,Select,Table } from 'antd';
import './App.css';
import Sidebar from './Sidebar';
import { Cascader , Input  } from 'antd';
import axios from 'axios';
import { parse } from 'mathjs';
// import Plot from 'react-plotly.js';



const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


class Onepoint extends Component {
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
          onepoint:[],
          equation:"",
          check:null,
          xold:"",
           
          datatable:[]
        };
      }

componentDidMount()
    {
        axios.get('http://localhost/numerical/php/onepoint.php')
        .then(res=>{
            // console.log(res.data);
            let item =[];
            res.data.map(dataMap=>{
              item = item.concat(dataMap.equation);
              // console.log(item); 
            });
            this.setState({
                onepoint:item
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
  
  err(xold, xnew) {
    var er = ((Math.abs((xnew - xold) / xnew))*100)/100;
    return er;
  }
  
  onepoint=()=>{
    // console.log(this.state);
    var eq = this.state.equation;

    var xold = parseFloat(this.state.xold);
    let tabledata = [];
   
    var i=0;
    var xnew;
    var fixerror = 0.00001;
    var error=1;
    while(error >= fixerror)
        {
            xnew = this.Solve(eq,xold);
            // console.log(xnew);
            error= this.err(xold,xnew);
            let table = {};
            table.index = i;
            table.xold = xold;
            table.xnew = xnew;
            table.error = error;
            
            tabledata.push(table);
            xold=xnew;
            i++;
         }

        this.setState({check:xnew,datatable:tabledata})
  }

  handleChangeeq = (value) => {
    console.log('Selected',value);
    this.setState({
        equation:value
    });
  }
  
  handleChangexold = (value) => {
    console.log('x',value);
    this.setState({
        xold:value
    });
  }

 

showgraph = () =>{
        const columns = [
            {
                title: 'Iteration',
                dataIndex: 'index',
                key: 'index',
              },
              {
                title: 'X(i)',
                dataIndex: 'xold',
                key: 'xold',
              },
              {
                title: 'X(i+1)',
                dataIndex: 'xnew',
                key: 'xnew',
              },
              {
                title: 'Error',
                dataIndex: 'error',
                key: 'error'
              },
          ];
          
          if(this.state.check != null){
            return <Table dataSource={this.state.datatable} columns={columns} />;
          }
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
              <Breadcrumb.Item>One Point Iteration</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              ONE-POINT ITERATIONT<br/><br/>
              <div>
                <Select showSearch style={{ width: 200 }} placeholder="Select your Function" 
                onChange={this.handleChangeeq} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch} >
                {this.state.onepoint.map(e=>{
                  // console.log(e);
                  return <Option value={e}>{e}</Option>
                })}
                </Select>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(X)" style={{width:200}} value={this.state.xold} onChange={this.handleChangexold}/>
              </div>
              <br/>
        
              <div>
                <Button type="primary" onClick={this.onepoint}>Submit</Button>
              </div>
              <br />
                {this.showgraph()}
                        
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Onepoint;
