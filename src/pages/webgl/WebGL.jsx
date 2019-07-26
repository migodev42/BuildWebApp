import './WebGL.less';
import React, { Component } from 'react';

class WebGL extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  }
  componentDidMount(){
    console.log('webgl:已加载')
  }
  render() {
    return (
      <div className="WebGL">WebGL</div>
    )
  }
}

export default WebGL;