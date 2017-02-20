import React, { Component } from 'react'
import FirstScreen from './first-screen'
import AboutMe from './about-me'
import NavBar from './nav-bar'
import Projects from './projects'
import Contact from './contact'

export default class App extends Component {

  render() {
    return (
        <div className="App">
            <NavBar />
            <FirstScreen />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
  }
}
