import React,{Component} from 'react';
import Home from '@pages/home/Home.jsx';
import Header from '@components/header/Header';

import './App.less';

class App extends Component{
  componentDidMount(){
    console.log("App: app已启动");
  }
  render(){
    


    return (
      <div className="App">        
        <Header className="App-Header"></Header>
        <Home className="App-Home"></Home>
      </div>
    )
  }
}

export default App;