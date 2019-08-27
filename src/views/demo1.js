import React, {Component} from 'react';
import logo from '../logo.svg';
class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:"render:react是优秀的前端三大框架之一"
    };
  }
  render(){
    return (
      <div className="zmz-react">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            我的第一个demo从react初始化开发
          </p>
          <span
            className="App-link"
            rel="noopener noreferrer"
            onClick={()=>this.click(this.state.data)}
          >
           点击准备起步==
        {this.state.data}
          </span>
        </header>
      </div>
    );
  }
   click=(data)=>{
    // alert("装载完毕！准备起飞");
    // alert(data);
    this.setState({
      data:"你说的对！！！"
    });
  };
  componentWillMount=()=>{
    console.log(1);
  };
  componentDidMount=()=>{
    console.log(2);
    console.log(this)
    console.log(React)
    var params = {
      url:'我是请求的参数'
    }
    React.$http.get('mymovie/movie/getCities',params).then(function(res) {
					console.log(res)
					if(res.data.Code === 0){
					}else{
					}
				})
  };
  componentWillReceiveProps=()=>{
    console.log(3);
  };
  shouldComponentUpdate=()=>{
    console.log(4);
    return true;
  };
  componentWillUpdate=()=>{
    console.log(5);
  };
  componentDidUpdate=()=>{
    console.log(6);
  };
  componentWillUnmount=()=>{
    console.log(7);
  };
}

export default Demo1;
