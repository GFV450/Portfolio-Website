import React, {Component} from 'react'
import ContactMethod from './contact-method'
import TitleDescription from './title-description'

export default function(props) {
    const contacts = [
        {
            src: "img/email.png",
            title: "E-mail",
            contactRef: "mailto:gfv450@gmail.com",
            contactDesc: "gfv450@gmail.com"
        },
        {
            src: "img/phone.png",
            title: "Phone",
            contactRef: "tel:+14159632531",
            contactDesc: "415-963-2531"
        },
        {
            src: "img/linkedin.png",
            title: "Linkedin",
            contactRef: "https://www.linkedin.com/in/gfvitola/",
            contactDesc: "Profile"
        },
        {
            src: "img/github.png",
            title: "GitHub",
            contactRef: "https://github.com/GFV450",
            contactDesc: "Profile"
        },
        {
            src: "img/resume.png",
            title: "Resume",
            contactRef: "https://drive.google.com/file/d/0B24DfMDOOKV3UC1rb2ZwaVUwUTQ/view?usp=sharing",
            contactDesc: "PDF"
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
            <div className="contactBox">
                <TitleDescription {...tdInfo} />
                <ContactMethod contactArray={contacts} />
            </div>
        </div>
    )
}
