import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="navBar">
            <h3 className="navName">GFV</h3>
            <div className="navButtonsBox">
                <button className="navButtons" type="button">ABOUT ME</button>
                <button className="navButtons" type="button">PROJECTS</button>
                <button className="navButtons" type="button">CONTACT</button>
            </div>
        </div>
    )
}
