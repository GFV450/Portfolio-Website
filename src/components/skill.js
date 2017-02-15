import React, {Component} from 'react'
import TitleDescription from './title-description'

export default function(props) {
    const skills = props.itd.map((item, i) => {
        return (
            <div styles={styles} className="skill" key={i}>
                <img className="icon" src={item.source} />
                <TitleDescription title={item.title} text={item.text} />
            </div>
        )
    });

    return <div>{skills}</div>
}


const styles = {
    fontSize: "22px",
    fontFamily: "Georgia"
};
