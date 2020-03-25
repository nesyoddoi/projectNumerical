import React, { Component } from 'react';
import { InputNumber,Button, Layout, Menu, Breadcrumb,Select,Table } from 'antd';
import './App.css';
import Sidebar from './Sidebar';
import { Cascader , Input  } from 'antd';
import axios from 'axios';
import { parse,derivative } from 'mathjs';
// import Plot from 'react-plotly.js';



const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;
// const options = [];

function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

// function handleChange(value) {
//   console.log('selected', value);
//   this.setState({
//     calculateeq:value
//   });
// }

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


class Bisection extends Component {
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
            bisec:[],
            equation:"",
            xl:"",
            xr:"",
            Xm:null,
            datatable:[]
        };
    }

componentDidMount()
    {
        axios.get('http://localhost/numerical/php/bisecdata.php')
        .then(res=>{
            // console.log(res.data);
            let item =[];
            res.data.map(dataMap=>{
              item = item.concat(dataMap.equation);
              // console.log(item); 
            });
            this.setState({
                bisec:item
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
  
  err(xmold, xmnew){
      var er = ((Math.abs((xmnew - xmold) / xmnew)) * 100) / 100;
      return er;
  }
  
  bisection=()=>{
    // console.log(this.state);
    var eq = this.state.equation;
    var xl = parseFloat(this.state.xl);
    var xr = parseFloat(this.state.xr);
    var xm = (xl + xr) / 2;
    let tabledata = [];
    var xmold = xm;
    var fxl;
    var fxr;
    var fxm;
    var i = 0;
    var fixerror = 0.00001;
    var error=1;
    while (error >= fixerror) {
      fxl = this.Solve(eq,xl);
      fxr = this.Solve(eq,xr);
      if (i != 0) {
        xm = (xl + xr) / 2;
      }
      fxm = this.Solve(eq,xm);
      if ((fxm * fxl) > 0) {
        xl = xm;
      }
      else {
        xr = xm;          
      }
      if (i != 0) {
        error = this.err(xmold, xm);
        xmold = xm;
                       
      }
      let table = {};
      table.index = i;
      table.xl = xl;
      table.xr = xr;
      table.xm = xm;
      table.error = error;
      tabledata.push(table);
      i++;              
      }

      this.setState({Xm : xm,datatable:tabledata})
}

  handleChangeeq = (value) => {
    console.log('Selected',value);
    this.setState({
        equation:value
    })
  }
  handleChangexl = (value) => {
    console.log('xl',value);
    this.setState({
        xl:value
    })
  }
  handleChangexr = (value) => {
    console.log('xr',value);
    this.setState({
        xr:value
    })
  }
showgraph = () =>{
        const columns = [
            {
                title: 'Iteration',
                dataIndex: 'index',
                key: 'index',
              },
              {
                title: 'Xl',
                dataIndex: 'xl',
                key: 'xl',
              },
              {
                title: 'Xr',
                dataIndex: 'xr',
                key: 'xr',
              },
              {
                title: 'Xm',
                dataIndex: 'xm',
                key: 'xm',
              },
              {
                title: 'Error',
                dataIndex: 'error',
                key: 'error'
              },
          ];
          
          if(this.state.Xm != null){
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
              <Breadcrumb.Item>Bisection Method</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              BISECTION  METHOD<br/><br/>
              <div>
                <Select showSearch style={{ width: 200 }} placeholder="Select your Function" 
                onChange={this.handleChangeeq} onFocus={onFocus} onBlur={onBlur} onSearch={onSearch} >
                {this.state.bisec.map(e=>{
                  // console.log(e);
                  return <Option value={e}>{e}</Option>
                })}
                </Select>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(xl)" style={{width:200}} value={this.state.xl} onChange={this.handleChangexl}/>
              </div>
              <br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(xr)" style={{width:200}} value={this.state.xr} onChange={this.handleChangexr}/>
              </div>
              <br/>
              <div>
                <Button type="primary" onClick={this.bisection}>Submit</Button>
              </div>
              <br />
                {this.showgraph()}
                        {/* <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Bisection;
