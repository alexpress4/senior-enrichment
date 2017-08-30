'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Root from './components/Root';
import Main from './components/Main';

ReactDOM.render (
  <Main/>,
  document.getElementById('main')
)
