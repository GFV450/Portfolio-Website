import React, {Component} from 'react'
import Typewriter from './typewriter'

export default function(props) {
    return (
        <div className="firstScreen">
            <div className="typewriterBox">
                <Typewriter typewriterCN="smallTW" speed={50} delay={0} tag="pre" text={lineOne} randomSpeed={true} />
                <Typewriter typewriterCN="smallTW" speed={50} delay={1750} tag="pre" text={"FLAWLESSLY DESIGNED"} randomSpeed={true} />
                <Typewriter typewriterCN="bigTW" speed={50} delay={3600} tag="pre" text={"PRODUCT ENGINEERING"} randomSpeed={true} />
            </div>
        </div>
    )
}
