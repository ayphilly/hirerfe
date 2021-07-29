import "./applicantprofile.scss"
import experience from "../../../hirerassets/experience.svg"
import education from "../../../hirerassets/education.svg"
import skill from "../../../hirerassets/skill.svg"
import contact from "../../../hirerassets/contact.svg"
import mailbox from "../../../hirerassets/mailbox.svg"
import license from "../../../hirerassets/license.svg"
import {useState, useEffect} from "react"

export const Applicantprofile=(props) => {

    return (
        <div className="applicant-profile-container">
            <div className="applicant-profile-inner">
                <div className="applicant-profile-inner top">
                    <p>{props.name ? props.name : ''}</p>
                    <p>Available to work immediately • Lagos</p>
                </div>
                <div className="applicant-profile-inner bottom">
                    <Applicantsingle
                        title="Experience"
                    />
                    <Applicantsingle
                        title="Education"
                    />
                    <Applicantsingle
                        title="Licenses & Certificates"
                    />
                </div>
                <Skillset/>
                <Contactdetals/>
                <button className="applicant-profile-inner button" onClick={props.close}>Close</button>
            </div>
        </div>
    )
}

const Applicantsingle = (props)=> {
    return (
        <div className="detail">
            <p>{props.title}</p>
            <div className="detail-contents">
                <Applicantdetail
                   
                />
                <Applicantdetail/>
                
            </div>
            
        </div>
    )
}

const Applicantdetail = ()=> {

    return (
        <div className="detail-contents single-detail">
            <img src={experience} alt="cv-image"/>
            <div className="single-detail-content">
                <p>Desktop Admin</p>
                <p>Afrinn Solutions - Contract</p>
                <p>Jun 2020 - Jul 2020 • Lagos</p>
                <hr/>
            </div>
        </div>
    )

}

const Skillset = () => {

    return (
        <div className="applicant-profile-inner skills">
            <p>Skills</p>
            <div className="skill-content">
                <img src={skill} alt="Skill-image"/>
                <p>
                    html • css • css5 • pyhton • reactjs • vuejs • graphQL • javascript
                </p>
            </div>
        </div>
    )
}

const Contactdetals = () => {
    return (
        <div className="applicant-profile-inner contact">
            <p>Contacts</p>
            <div className="contact-mail">
                <img src={mailbox} alt="mail-svg"/>
                <p>
                    ashimolowo92@gmail.com
                </p>
            </div>
            <div className="contact-phone">
                <img src={contact} alt="contact-svg"/>
                <p>
                    +(234) 81 123 546 89
                </p>
            </div>

        </div>
    )
}