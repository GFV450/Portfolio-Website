import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="navBar">
            <h1>{props.text}</h1>
            <h2>{props.texts}</h2>
        </div>
    )
}
