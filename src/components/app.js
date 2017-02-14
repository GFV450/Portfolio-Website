import React, { Component } from 'react';
import FirstScreen from './first-screen'
import AboutMe from './about-me'
import navBar from './nav-bar'

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <navBar text="Hello there" />
            <FirstScreen />
            <AboutMe>
            </AboutMe>
        </div>
    );
  }
}
