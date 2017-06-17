import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import * as firebase from 'firebase'

import App from './components/App'

import './styles/screen.scss'

var config = {
  apiKey: 'AIzaSyC8Sdhm5hP1vk9z8ZL0Fg2c77fa2BwAzrU',
  authDomain: 'my-firebase-project-171019.firebaseapp.com',
  databaseURL: 'https://my-firebase-project-171019.firebaseio.com',
  projectId: 'my-firebase-project-171019',
  storageBucket: '',
  messagingSenderId: '1030102437725'
}

firebase.initializeApp(config)

const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(<App />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
