import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="titleDiv">
            <h2 className="ordinaryLine">{props.lineOne}</h2>
            <h2 className="ordinaryLine">{props.lineTwo}</h2>
            <h1 className="specialLine">{props.lineThree}</h1>
        </div>
    )
}
