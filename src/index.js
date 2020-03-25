import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {Router,Route,Link,browserHistory} from 'react-router'
import Bisection from './bisection';
import Falseposition from './false';
import Secant from './secant';
import Onepoint from './onepoint';
import Newton from './newton';
import Trapezoidal from './trape'
import Comtrapezoidal from './comtrape'
import Simpson from './simpson'
import Comsimpson from './comsimpson'
import Firstforward from './firstforward'
import Backward from './backward'
import Central from './central'
import Firstforwardh2 from './firstforwardh2'
import Backwardh2 from './backwardh2'
import Centralh2 from './centralh2'
import Cramer from './cramer'



import 'antd/dist/antd.css';

// import Bisection1 from './test2';


ReactDOM.render(
    <Router history={browserHistory}>
        <Router path="/" component={App}/>
        <Router path="/bisection" component={Bisection}/>
        <Router path="/falseposition" component={Falseposition}/>
        <Router path="/onepoint" component={Onepoint}/>
        <Router path="/newton" component={Newton}/>
        <Router path="/secant" component={Secant}/>
        <Router path="/trapezoidal" component={Trapezoidal}/>
        <Router path="/comtrapezoidal" component={Comtrapezoidal}/>
        <Router path="/simpson" component={Simpson}/>
        <Router path="/comsimpson" component={Comsimpson}/>
        <Router path="/firstforward" component={Firstforward}/>
        <Router path="/backward" component={Backward}/>
        <Router path="/central" component={Central}/>
        <Router path="/firstforwardh2" component={Firstforwardh2}/>
        <Router path="/backwardh2" component={Backwardh2}/>
        <Router path="/centralh2" component={Centralh2}/>
        <Router path="/cramer" component={Cramer}/>

    </Router>, document.getElementById('root')
);


