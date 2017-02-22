import React, {Component} from 'react'
import ContactMethod from './contact-method'
import TitleDescription from './title-description'

export default function(props) {
    const contacts = [
        {
            src: "img/email.png",
            title: "E-mail",
            contactRef: "shopintellihome.com",
            contactDesc: "gfv450@gmail.com"
        },
        {
            src: "img/phone.png",
            title: "Phone",
            contactRef: "shopintellihome.com",
            contactDesc: "415-963-2531"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        },
        {
            src: "img/github.png",
            title: "GitHub",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        }
    ]

    const tdInfo = {
        tdCN: "contactMe",
        titleCN: "contactTitle",
        descCN: "contactDesc",
        title: "Contact Me",
        text: "I'm looking forward to hearing from you. Please contact me anytime!"
    }

    return (
        <div className="contact" id="contact" >
            <TitleDescription {...tdInfo} />
            <ContactMethod contactArray={contacts} />
        </div>
    )
}
