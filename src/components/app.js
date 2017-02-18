import React, { Component } from 'react'
import FirstScreen from './first-screen'
import AboutMe from './about-me'
import NavBar from './nav-bar'
import Intellihome from './intellihome'

export default class App extends Component {

  render() {
    return (
        <div className="App">
            <NavBar />
            <FirstScreen />
            <AboutMe />
            <Intellihome />
        </div>
    );
  }
}
