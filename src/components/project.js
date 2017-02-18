import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    return (
        <div className={props.projectName}>
            <img className="website" src={props.src} />
            <div>
                <TitleDescription tdCN={props.tdCN} titleCN={props.titleCN} descCN = {props.descCN} title={props.title} text={props.text} />
                <button className="intelliButton" type="button">Click Me!</button>
            </div>
        </div>
    )
}
