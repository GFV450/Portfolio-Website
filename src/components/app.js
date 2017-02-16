import React, { Component } from 'react';
import FirstScreen from './first-screen'
import AboutMe from './about-me'
import navBar from './nav-bar'
import Intellihome from './intellihome'

export default class App extends Component {

  render() {
    return (
        <div className="App">
            <navBar />
            <FirstScreen />
            <AboutMe />
            <Intellihome />
        </div>
    );
  }
}
