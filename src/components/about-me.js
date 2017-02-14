import React, {Component} from 'react'
import TitleDescription from './title-description'
import SingleTitle from './single-title'

export default function(props) {
    return (
        <div className="aboutMe">
            <TitleDescription>
                title = "I’m glad you’re here. Let me tell you a bit about myself."
            </TitleDescription>
            {props.children}
        </div>
    )
}
