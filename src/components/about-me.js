import React, {Component} from 'react'
import Skill from './skill'
import SingleTitle from './single-title'

export default function(props) {
    const tds = [
        {title:"AAAA", text:"111111"},
        {title:"BBBB", text:"222222"},
        {title:"CCCC", text:"333333"},
        {title:"DDDD", text:"444444"},
        {title:"EEEE", text:"555555"}
    ];

    return (
        <div className="aboutMe">
            <Skill titleDescriptions={tds} />
        </div>
    )
}
