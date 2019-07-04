import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.1.jsx';

async function testAsync(){
  return false
}
testAsync()
ReactDOM.render(<App/>,document.getElementById("root"));