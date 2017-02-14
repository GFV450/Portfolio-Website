import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="">
            <h1>{props.title}</h1>
            <div>{props.text}</div>
        </div>
    )
}
