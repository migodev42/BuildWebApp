import React,{Component} from 'react';
import {Button} from 'antd';
import './Home.less';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    // const a=['1'];
    // console.error(a.name);
    console.log('Home：Home已加载')
  }
  render(){
    const {className} = this.props
    return (
      <div className={"Home "+className}>home
        {/* <Button type="primary">Click</Button> */}
      </div>
    )
  }
}

export default Home;