/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button>login</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}

export default App
