import React, {Component} from 'react';
import logo from '../logo.svg';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:"构造函数:react是优秀的前端三大框架之一"
    };
  }
  render(){
    console.log(React)
    let datatwo = "render:react是优秀的前端三大框架之一"
    return (
      <div className="zmz-react">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            我的第一个demo从react初始化开发
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            准备起步
          </a>
         <span>{this.state.data}</span>
         <span>{datatwo}</span>
         <span onClick={()=>this.click()}>点击跳转到demo4</span>
        </header>
      </div>
    );
  }
   click=()=>{
    this.props.history.push("/demo4");
  };
}

export default Home;
