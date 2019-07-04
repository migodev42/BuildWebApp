import React,{Component} from 'react';
import Home from '@pages/home/Home.jsx';
import imgUlr from '@assets/imgs/bg.jpg';

import './App.less';

class App extends Component{
  
  render(){
    return (
      <div className="App">
        <h1>Hello, self build React App</h1>
        <img src={imgUlr} alt=""/>
        <Home></Home>
      </div>
    )
  }
}

export default App;