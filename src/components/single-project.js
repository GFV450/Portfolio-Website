import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    const projects = props.projectArray.map((item, i) => {
        return (
            <div className={item.projectName}>
                <img className="projectImage" src={item.src} />
                <div className ="infoBox">
                    <TitleDescription tdCN="projectTD" titleCN="projectTitle" descCN ="projectDesc" title={item.title} text={item.text} />
                    <a className="projectButton" href={item.buttonRef}>{item.buttonDesc}</a>
                </div>
            </div>
        )
    });

    return <div className="projects">{projects}</div>
}
