import React, {Component} from 'react'
import Typewriter from './typewriter'
import NavBar from "./nav-bar"

export default function(props) {
const text = "WELL ARCHITECTED \n FLAWLESSLY DESIGNED \n PRODUCT ENGINEERING"

    return (
        <div className="firstScreen">
            <div className="gradient">
                <Typewriter typewriterCN="bigTW" speed={60} delay={700} tag="pre" text={text} randomSpeed={true} />
            </div>
        </div>
    )
}
