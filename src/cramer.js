import React, { Component } from 'react';
import { InputNumber,Button, Layout, Menu, Breadcrumb,Select,Table,Card } from 'antd';
import './App.css';
import Sidebar from './Sidebar';
import { Cascader , Input  } from 'antd';
import axios from 'axios';
import { parse,derivative,det } from 'mathjs';
// import Plot from 'react-plotly.js';

const { Header, Content, Footer, Sider } = Layout;

var A = [], B = [], answer = [], matrixA = [], matrixB = []
class Cramer extends Component {
  constructor()
    {
        super();
        this.state={
            row:"",
            column:"",
            check:null,
            x0:"",
            showInput: true,
            showOutput: false,
            showMatrix: false,
            showButtonMatrix:false
           
        };
       
      }


createMatrix(row, column) {
    for (var i=1 ; i<=row ; i++) {
        for (var j=1 ; j<=column ; j++) {
            matrixA.push(<Input style={{
                width: "10%",
                height: "50%", 
                backgroundColor:"#Gray", 
                marginInlineEnd: "5%", 
                marginBlockEnd: "5%",
                color: "Black",
                fontSize: "14px",
                fontWeight: "bold"
            }} 
            id={"a"+i+""+j} key={"a"+i+""+j} placeholder={"a"+i+""+j} />)  
        }
        matrixA.push(<br/>)
        matrixB.push(<Input style={{
            width: "10%",
            height: "50%", 
            backgroundColor:"black", 
            marginInlineEnd: "5%", 
            marginBlockEnd: "5%",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold"
        }} 
        id={"b"+i} key={"b"+i} placeholder={"b"+i} />)
    }

    this.setState({
        showInput: false,
        showMatrix: true,
        showButtonMatrix:true
     
    })
}
handleChangerow = (value) => {
    console.log('Selected',value);
    this.setState({
        row:value
    });
  }
  
  handleChangecolum = (value) => {
    console.log('a',value);
    this.setState({
        column:value
    });
  }

  cramer() {
    this.initMatrix();
    var counter=0; 
    // eslint-disable-next-line eqeqeq
    while (counter != this.state.row) { 
        var transformMatrix = JSON.parse(JSON.stringify(A));//Deep copy
        for (var i=0 ; i<this.state.row ; i++) {
            for (var j=0 ; j<this.state.column ; j++) {
                if (j === counter) {
                    transformMatrix[i][j] = B[i]
                    break;
                }
                
            }
        
        } 
        counter++;
        answer.push(<h2>X<sub>{counter}</sub>=&nbsp;&nbsp;{Math.round(det(transformMatrix))/Math.round(det(A))}</h2>)
    }
    this.setState({
        showOutput: true,
        showButtonMatrix:false
    });

  
}
initMatrix() {
    for(var i=0 ; i<this.state.row ; i++) {
        A[i] = []
        for(var j=0 ; j<this.state.column ; j++) {
            A[i][j] = (parseFloat(document.getElementById("a"+(i+1)+""+(j+1)).value));
        }
        B.push(parseFloat(document.getElementById("b"+(i+1)).value));
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
              <Breadcrumb.Item>Cramer's Rule</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                CRAMER'S RULE<br/><br/>
              
            {this.state.showInput && <div>Create your Matrix:
              
              <div>
                <InputNumber placeholder="INITIAL NUMBER(row)" style={{width:200}} value={this.state.row} onChange={this.handleChangerow} />
              </div><br/>
              <div>
                <InputNumber placeholder="INITIAL NUMBER(column)" style={{width:200}} value={this.state.column} onChange={this.handleChangecolum}/>
              </div>
              <br/>
        
              <div>
                <Button type="primary" onClick= {()=>this.createMatrix(this.state.row, this.state.column)}  >Submit</Button>
              </div>
              <br />
            </div>
            }

              {this.state.showMatrix && 
                <div><h2>Matrix [A]</h2>{matrixA}<br/><h2>Vector [B]<br/></h2>{matrixB}<br/><br/>
                
                </div>
              }
              {this.state.showButtonMatrix && 
               
               <div>
                 
                <Button type="primary" onClick= {()=>this.cramer()}  >Submit</Button>
               </div>
              }
            <br/>

            {this.state.showOutput && <div ><b  style={{ fontSize:"20px" ,color:"#f5222d"}}>OUTPUT </b><br/><p>{answer}</p></div>}
                     
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Cramer;
