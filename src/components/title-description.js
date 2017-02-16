import React, {Component} from 'react'

export default function(props) {
    return (
        <div className="titleDescription">
            <h3 className={props.titleCN}>{props.title}</h3>
            <p className={props.descCN}>{props.text}</p>
        </div>
    )
}
