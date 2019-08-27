import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.interceptors.request.use(//请求参数设置
  config => {
  	// console.log(config)
  	// if (localStorage.getItem('token')&&localStorage.getItem('token')!==undefined&&localStorage.getItem('token')!=='') {
  		    config.headers.common['token'] = localStorage.getItem('token');
  	// 	}else{
   //         window.location.href='/#/login'
   //    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
axios.interceptors.response.use(//响应请求
  config => {
        // console.log(config)

  	   // if (config.data.code==101046) {
      //      window.location.href='/#/login'
      //   }else{
      //     if (localStorage.getItem('token')&&localStorage.getItem('token')!==undefined&&localStorage.getItem('token')!=='') {
      //       localStorage.setItem('token', config.headers.token);
      //     }
      //   }
    return config
  },
  err => {

    return Promise.reject(err)
  })
export default axios
