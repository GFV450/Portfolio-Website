import React, {Component} from 'react'
import ContactMethod from './contact-method'
import TitleDescription from './title-description'

export default function(props) {
    const contacts = [
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "shopintellihome.com",
            contactDesc: "Profile"
        }
    ]

    const tdInfo = {
        tdCN: "contactMe",
        titleCN: "contactTitle",
        descCN: "contactDesc",
        title: "CONTACT ME",
        text: "I'm looking forward to hearing from you. Please contact me anytime!"
    }

    return (
        <div className="contact" id="contact" >
            <TitleDescription {...tdInfo} />
            <ContactMethod contactArray={contacts} />
        </div>
    )
}
