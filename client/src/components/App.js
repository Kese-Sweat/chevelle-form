import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Routes from './Routes';
import Form from './Form'
export default () => <div>
  <Provider store={store}>
    <Form/>
  </Provider>
</div>
