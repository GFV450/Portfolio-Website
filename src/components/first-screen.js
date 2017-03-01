import React, {Component} from 'react'
import Typewriter from './typewriter'

export default function(props) {
const text = "WELL ARCHITECTED \n FLAWLESSLY DESIGNED \n PRODUCT ENGINEERING"
const code = "/* Lets get this show on the road, shall we? */ "

    return (
        <div className="firstScreen">
            <pre>

            </pre>
            <Typewriter typewriterCN="bigTW" speed={60} delay={700} tag="pre" text={text} randomSpeed={true} />
        </div>
    )
}
