import "./applicantprofile.scss"
import experience from "../../../hirerassets/experience.svg"
import education from "../../../hirerassets/education.svg"
import skill from "../../../hirerassets/skill.svg"
import contact from "../../../hirerassets/contact.svg"
import mailbox from "../../../hirerassets/mailbox.svg"
import license from "../../../hirerassets/license.svg"
import {useState, useEffect} from "react"
import { get } from "../../../../requests"
import { Loading } from "../../../../generals/loading/loading"
import { Empty } from "../../../../generals/emptyresult/emptyresult"
export const Applicantprofile=(props) => {

    
    if (props.load) {
        <Loading></Loading>
    } else if (Object.keys(props.data.profile.education).length < 1 || Object.keys(props.data.profile.experience).length < 1) {
        <Empty
            text="Talent Profile Not Available"
        >
        </Empty>

    } else {

        return (
            <div className="applicant-profile-container">
                <div className="applicant-profile-inner">
                    <div className="applicant-profile-inner top">
                        <p>{props.data ? props.data.profile.name : ''}</p>
                        <p>Available to work immediately • {props.data ? props.data.profile.location : ''}</p>
                    </div>
                    <div className="applicant-profile-inner bottom">
                        <Applicantsingle
                            title="Education"
                            data = {props.data.profile.education}
                        />
                        <Applicantsingle
                
                            title="Experience"
                            data = {props.data.profile.experience}
                        />
                        <Applicantsingle
                            title="Licenses & Certificates"
                        />
                    </div>
                    <Skillset
                        title="Skillset"
                        data = {props.data.profile.skills.skill}
                    />
                    <Contactdetals/>
                    <button className="applicant-profile-inner button" onClick={props.close}>Close</button>
                </div>
            </div>
        )

    }
    
}

const Applicantsingle = (props)=> {
    return (
        <div className="detail">
            <p>{props.title}</p>
            <div className="detail-contents">
                <Applicantdetail
                    data = {props.data}
                    title={props.title}
                />
                <Applicantdetail/>
                
            </div>
            
        </div>
    )
}

const Applicantdetail = (props)=> {

    return (
        <div className="detail-contents single-detail">
            <img src={experience} alt="cv-image"/>
            <div className="single-detail-content">
                {props.title === "Experience" ? <p>{props.data.title}</p> : <p>{props.data.field}</p> }
                {props.title === "Experience" ? <p>{props.data.company}</p> : <p>{props.data.school}</p> }
                <p>{props.data.month_from},{props.data.year_from} - {props.data.month_to},{props.data.year_to} • {props.data.location}</p>
                {props.title === "Experience" && <p>{props.data.description}</p>}
                <hr/>
            </div>
        </div>
    )

}

const Skillset = (props) => {
    var string = props.data.join(",")
    return (
        <div className="applicant-profile-inner skills">
            <p>Skills</p>
            <div className="skill-content">
                <img src={skill} alt="Skill-image"/>
                <p>
                    {string}
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
                    aphilemon.aa@gmail.com
                </p>
            </div>
            <div className="contact-phone">
                <img src={contact} alt="contact-svg"/>
                <p>
                    +(234) 81 1581199
                </p>
            </div>

        </div>
    )
}