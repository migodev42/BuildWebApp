import React, { Component } from 'react';
import Header from '@components/header/index';
import AppRouter from '@routers/router';

import './App.less';

class App extends Component {
  componentDidMount() {
    console.log("App: app已加载");
  }
  render() {



    return (
      <div className="App">
       
        {/* <Home className="App-Home"></Home> */}
        {/* <WebGL></WebGL> */}
             
        <AppRouter className="App-Router">                
          <Header className="App-Header"></Header>
        </AppRouter>
      </div>
    )
  }
}

export default App;