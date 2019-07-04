import React,{Component} from 'react';
import {Button} from 'antd';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    // const a=['1'];
    // console.error(a.name);
    ajax()
    console.log('Home： Home已加载')
  }
  render(){

    return (
      <div className="Home">this is home222
        <Button type="primary">Click3</Button>
      </div>
    )
  }
}

export default Home;