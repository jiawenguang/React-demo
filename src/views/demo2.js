import React,{ Component } from 'react'
import Demo3 from './demo3.js'
class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo4Data:''
    };
  }
  render() {
    return (
      <div style={{width:"100%",height:"300px",fontSize:"20px",textAlign:"center",backgroundColor:"#ccc"}}>
      Demo2[接受来自demo4的数据({this.state.demo4Data})]
      <Demo3/>
      Demo2[接受来自demo4的父子传值数据({this.props.data})]
      </div>
    )
  }

  //方法名应该与主组件上的一致
  setdatademo4=(data)=>{
    this.setState({
      demo4Data:data
    });
  };
  componentDidMount=()=>{
    let demo4Data=sessionStorage.getItem("demo4Data");
    console.log(demo4Data);
    this.setState({
      demo4Data:demo4Data
    });
  };
}
export default Demo2
