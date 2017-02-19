import React, {Component} from 'react'
import Project from './project'

export default function(props) {
    const projectInfo = {
            projectName: "intelliProject",
            src: "../img/project/intellihome.png",
            title: "IntelliHome",
            text: "A curated smart home marketplace where you shop based on features you desire instead of products",
            tdCN: "intelliTD",
            titleCN: "intelliTitle",
            descCN: "intelliDesc",
            buttonCN: "intelliButton",
            buttonRef: "shopintellihome.com",
            buttonDesc: "Website"
        }

    return (
        <div className="intellihome" id="intelliProject" >
            <Project {...projectInfo} />
        </div>
    )
}
