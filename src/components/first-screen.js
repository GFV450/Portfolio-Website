import React, {Component} from 'react'
import ScreenTitle from './intro-title'
import SingleTitle from './single-title'

export default function(props) {
    return (
        <div className="FirstScreen">
            <SingleTitle singleTitle="Full Stack | Web | Mobile | Video Games | Internet of Things" />
            <ScreenTitle lineOne="WELL ARCHITECTED" lineTwo="FLAWLESSLY DESIGNED" lineThree="PRODUCT ENGINEERING"/>
        </div>
    )
}
