import React, {Component} from 'react'
import Project from './single-project'

export default function(props) {
    const projectInfo = [
            {
                projectName: "intellihome",
                src: "../img/project/intellihome.png",
                title: "IntelliHome",
                text: "A curated smart home marketplace where you shop based on features you desire instead of products",
                buttonRef: "http://shopintellihome.com",
                buttonDesc: "Website"
            },
            {
                projectName: "iChallenge",
                src: "../img/project/iChallenge.png",
                title: "iChallenge",
                text: "An app made for challenging your friends to have new experiences and break their day to day routines",
                buttonRef: "https://itunes.apple.com/us/genre/ios-social-networking/id6005?mt=8",
                buttonDesc: "In Review"
            }
        ]

    return (
        <div className="projectsBox" id="projects" >
            <Project projectArray={projectInfo} />
        </div>
    )
}
