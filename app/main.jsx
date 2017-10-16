'use strict'
import React from 'react'
import {render} from 'react-dom'
// import { Provider } from 'react-redux'

// import store from './store'
import App from './components/App.js'

render (
  // <Provider store={store}> //saving commented out redux to try out a redux version later
  <App/>,
  // </Provider>,
  document.getElementById('main')
)