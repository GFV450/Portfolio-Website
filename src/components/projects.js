import React, {Component} from 'react'
import Project from './single-project'

export default function(props) {
    const projectInfo = [
            {
                projectName: "intellihome",
                src: "../img/project/intellihome.jpg",
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
                buttonRef: "https://github.com/GFV450/iChallenge",
                buttonDesc: "In Review"
            },
            {
                projectName: "ButterflyKnifeFight",
                src: "../img/project/BKF.png",
                title: "Butterfly Knife Fight",
                text: "A local multiplayer arena-style combat game, with butterflies... And knives! (in development)",
                buttonRef: "https://drive.google.com/file/d/0B24DfMDOOKV3cE1nTS1LdjBuU3M/view?usp=sharing",
                buttonDesc: "Download"
            },
            {
                projectName: "LOTR",
                src: "../img/project/LOTR.png",
                title: "Tweet Gen",
                text: "A Lord of the Rings tweet generator built with data structures and natural language processing",
                buttonRef: "https://github.com/GFV450/Tweet-Generator",
                buttonDesc: "Coming soon"
            }
        ]

    return (
        <div className="projectsBox" id="projects" >
            <Project projectArray={projectInfo} />
        </div>
    )
}
