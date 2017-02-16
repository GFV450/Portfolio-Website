import React, {Component} from 'react'
import Skill from './skill'
import TitleDescription from './title-description'

export default function(props) {
    const skInfo = [
        {
            source: "../img/icons/Ideation.png",
            title:"Ideation & Validation",
            text:"I brainstorm creative ideas and validate them through prospective user interviewing, user narratives, \
                  market fit analysis, among other things."
        },
        {
            source: "../img/icons/Concept.png",
            title:"Conceptualizing",
            text:"I take ideas and transform them into a concept of their own. Then, I layout the design specification required \
                  to create a great product."
        },
        {
            source: "../img/icons/UIUX.png",
            title:"UX/UI Design",
            text:"I create wireframes with tools like Sketch and InVision to define the content structure, while accounting for \
                  the desired user experience."
        },
        {
            source: "../img/icons/Code.png",
            title:"Code Execution",
            text:"I use a wide array of languages, frameworks and developer tools relevant to the product in order to craft \
                  efficient, clean, and well documented code."
        },
        {
            source: "../img/icons/Growth.png",
            title:"Metrics & Growth",
            text:"I develop growth through metrics analysis by generating product awareness, acquiring and retaining users, and \
                  experimenting with referral models."
        }
    ];

    const ti = "I’m glad you’re here. Let me tell you a bit about myself."
    const desc = "My name is Gian Franco Vitola, and I’m a developer in the San Francisco Bay Area. I’m a multidisciplinary \
                  individual who strives to architect, design, execute, and grow engaging products across a wide spectrum of \
                  fields in software engineering."

    return (
        <div className="aboutMe">
            <TitleDescription titleCN="aboutTitle" descCN="aboutDesc" title={ti} text={desc} />
            <h3 className="aboutTitle">These are some of my areas of expertise:</h3>
            <Skill itd={skInfo} />
        </div>
    )
}
