import React, {Component} from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "navBar"
        };
    }
    render() {
        return (
            <nav className={this.state.color}>
            <h3 className="navName">Gian Franco Vitola</h3>
                <ul className="navButtonsBox">
                    <li><a className="navButtons" href="#about">ABOUT ME</a></li>
                    <li><a className="navButtons" href="#projects">PROJECTS</a></li>
                    <li><a className="navButtons" href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}
