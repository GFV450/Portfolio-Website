import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    const skills = props.itd.map((item, i) => {
        return (
            <div className="skill" key={i}>
                <img className="icon" src={item.source} />
                <TitleDescription titleCN="skillTitle" descCN = "skillDesc" title={item.title} text={item.text} />
            </div>
        )
    });

    return <div className="skillsBox">{skills}</div>
}
