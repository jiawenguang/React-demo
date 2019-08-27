import ReactDOM from 'react-dom';
import Routers from './router/routers'
import './assets/less/common.less';
import * as serviceWorker from './serviceWorker';
import './axios'
ReactDOM.render(Routers, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
