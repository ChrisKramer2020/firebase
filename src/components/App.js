import React, { Component } from 'react'
import * as firebase from 'firebase'

class App extends Component {
  constructor () {
    super()
    this.state = {
      speed: null
    }
  }

  componentDidMount () {
    const rootRef = firebase.database().ref().child('react')
    const speedRef = rootRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }

  render () {
    return <div className='App'>
      <h1>{this.state.speed}</h1>
      <p>What type of app is this</p>
    </div>
  }
}

export default App
