import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.less'
import './assets/css/iconfont.css'
import AppRouter from './router/index'
import {Provider} from 'react-redux'
import store from './redux/store'
import './utils/init'

ReactDOM.render(
  <Provider store={store}> 
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);


