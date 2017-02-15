import React, {Component} from 'react'
import Skill from './skill'
import SingleTitle from './single-title'

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

    return (
        <div className="aboutMe">
            <Skill itd={skInfo} />
        </div>
    )
}
