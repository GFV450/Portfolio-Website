import React, {Component} from 'react'

export default function(props) {
    const contact = props.contactArray.map((item, i) => {
        return (
            <div className="contactMethod">
                <img className="methodImage" src={item.src} />
                <h6 className="methodTitle">{item.title}</h6>
                <a className="methodHL" href={item.contactRef}>{item.contactDesc}</a>
            </div>
        )
    });

    return <div className="methodBox">{contact}</div>
}
