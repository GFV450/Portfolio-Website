import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    return (
        <div className={props.projectName}>
            <img className="website" src={props.src} />
            <div className ="infoBox">
                <TitleDescription tdCN={props.tdCN} titleCN={props.titleCN} descCN = {props.descCN} title={props.title} text={props.text} />
                <a className={props.buttonCN} href={props.buttonRef}>{props.buttonDesc}</a>
            </div>
        </div>
    )
}
