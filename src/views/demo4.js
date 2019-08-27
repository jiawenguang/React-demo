import React,{ Component } from 'react'
import Demo2 from './demo2.js'
class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo4Data:"主组件的数据",
      demo4Data2:"父子传值",
      demo4Data3:"我是动态传值"
    };
  }
  render() {
    return (
      <div style={{width:"100%",height:"300px",fontSize:"20px",textAlign:"center",backgroundColor:"#ccc"}}>
      Demo4
      <Demo2 data={this.state.demo4Data2} id="demo2"
          ref={ref => this.datademo4 = ref}
          dataMyScreen={this.state.datademo4}/>
      <span id="demo4" onClick={()=>this.demo4Click()}>动态传值点击</span>
      </div>
    )
  }
  demo4Click=()=>{

    this.datademo4.setdatademo4(this.state.demo4Data3);
  };
  componentDidMount=()=>{
    console.log(2);
    sessionStorage.setItem("demo4Data",this.state.demo4Data);
  };
}
export default Demo4
