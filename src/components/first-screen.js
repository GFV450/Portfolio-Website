import React, {Component} from 'react'
import ScreenTitle from './intro-title'

export default function(props) {
    return (
        <div className="FirstScreen">
            <h3 className="title2">"Full Stack | Web | Mobile | Video Games | Internet of Things"</h3>
            <ScreenTitle lineOne="WELL ARCHITECTED" lineTwo="FLAWLESSLY DESIGNED" lineThree="PRODUCT ENGINEERING"/>
        </div>
    )
}
