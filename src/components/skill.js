import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    const icons = props.icons.map((item,i) => {
        return <img className="icon" src={props.source} height={props.height} width={props.width} />;
    });

    const titleDescriptions = props.titleDescriptions.map((item, i) => {
        return <TitleDescription key={i} title={item.title} text={item.text} />;
    });

    return (
        <div className="skill">
            {icons}
            {titleDescriptions}}
        </div>
    )
}
