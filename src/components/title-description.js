import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="titleDescription">
            <h1 className="skillTitle">{props.title}</h1>
            <p className="skillDescription">{props.text}</p>
        </div>
    )
}
