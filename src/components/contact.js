import React, {Component} from 'react'
import ContactMethod from './contact-method'
import TitleDescription from './title-description'

export default function(props) {
    const contacts = [
        {
            src: "img/icons/email.png",
            title: "E-mail",
            contactRef: "mailto:gfv450@gmail.com",
            contactDesc: "gfv450@gmail.com"
        },
        {
            src: "img/icons/phone.png",
            title: "Phone",
            contactRef: "tel:+14157549603",
            contactDesc: "415-754-9603"
        },
        {
            src: "img/icons/linkedin.png",
            title: "Linkedin",
            contactRef: "https://www.linkedin.com/in/gfvitola/",
            contactDesc: "Profile"
        },
        {
            src: "img/icons/github.png",
            title: "GitHub",
            contactRef: "https://github.com/GFV450",
            contactDesc: "Profile"
        },
        {
            src: "img/icons/resume.png",
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
