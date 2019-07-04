import React,{Component} from 'react';
import Home from '@pages/home/Home.jsx';

import './App.less';

class App extends Component{
  
  render(){
    return (
      <div className="App">
        <h1>Hello, self build React App</h1>
        <Home></Home>
      </div>
    )
  }
}

export default App;