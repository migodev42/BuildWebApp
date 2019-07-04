import React,{Component} from 'react';
import Home from '@pages/home/Home.jsx';

import './App.less';

class App extends Component{
  componentDidMount(){
    console.log("App: app已启动");
  }
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