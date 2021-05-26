import "./talentprofile.scss"
import {Profilecard} from "../../components/singleprofilecard/profilecard"
import aspire from "../../../talent/talentassets/aspire.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast, faPhone, faMailBulk, faInfoCircle, faFileAlt, faComment, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import {certifications, education, experience} from "../../constants"
import {useEffect, useState} from 'react'
export const Talentprofile = () => {

    const exp = experience.map((experience, key)=> {
        return (
            <div className="profile-details">
                <Profilecard
                    company={experience.company}
                    jobtitle = {experience.jobtitle}
                    date = {experience.date}
                    state= {experience.state}
                    type={experience.type}
                />
                <hr/>
            </div>
            
        )

    })
    const edu = education.map((education, key)=> {
        return (
            <div className="profile-details">
                <Profilecard
                    school={education.school}
                    date = {education.date}
                    degree= {education.degree}
                />
                <hr/>
            </div>
        )
    })
    const certy = certifications.map((certifications, key)=> {
        return (
            <div className="profile-details">
                <Profilecard
                    school={certifications.school}
                    date = {certifications.date}
                    degree= {certifications.degree}
                />
                <hr/>
            </div>
            
        )

    })

    const openMore = ()=> {

        var button = document.getElementsByClassName("more-talent")
        button[0].addEventListener("click", function() {
            var moreContainer = document.querySelector(".profile-box-more")
            moreContainer.className= moreContainer.className.replace(" hidden", " ");
        })
        
    }
    const closeMore = () => {

        var container= document.getElementsByClassName("talent-profile-container")
        container[0].addEventListener("click", function() {
            var moreContainer = document.querySelector(".profile-box-more")
            moreContainer.className= moreContainer.className.replace(" ", " hidden");
        })

    }
    useEffect(()=> {
        openMore();
    })
    return (
        <div className="talent-profile-container" onClick={closeMore}>

            <div className="talent-profile-inner-col">

                <div className="talent-profile-inner-left">
                    <div className="talent-profile-top">
                        <img src={aspire} alt="Talent Profile Image"/>
                        <div className="profile-top-right">
                            <p>Ademola Okon</p>
                            <p>Digital Marketer</p>
                            <p>Lagos </p>
                            <div className="profile-top-btn">
                                <button className="ping-talent"> 
                                    <FontAwesomeIcon icon={faPodcast} className="ping-icon" size="lg"/>
                                    Ping 
                                </button>
                                <button className="more-talent"> 
                                    <FontAwesomeIcon icon={faInfoCircle} className="more-icon" size="lg"/>
                                    More
                                </button>
                                <More></More>

                            </div>
                            
                        </div>

                    </div>
                    <div className="talent-profile-about">
                        <div className="about-inner">
                            <p>
                                About
                            </p>
                            <p>
                                Hi! I believe design is more than creating products and services that are understandable 
                                and usable, it also needs to bring joy, excitement, pleasure and beauty to people's lives. 
                            </p>

                        </div>
                    </div>

                    <div className="talent-profile-box">
                        <div className="talent-profile-box-inner">
                            <Box
                                title="Experience"
                            >
                                {
                                    exp
                                }

                            </Box>

                            <Box
                                title="Education"
                            >
                                {
                                    edu
                                }

                            </Box>
                            <Box
                                title="Licenses & Certifications"
                            >
                                {
                                    certy
                                }

                            </Box>
                        </div>

                    </div>
                
                    <div className="talent-profile-contact">
                        <div className="profile-contact-inner">
                            <p>Contact</p>
                            <p>
                                <FontAwesomeIcon icon={faMailBulk} className="mail-icon" size="lg"/>
                                ashimolowo92@gmail.com@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="mail-icon" size="lg"/>
                                +(234) 81 123 546 89
                            </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export const Box = (props)=> {

    return (
        <div className="profile-box-experience">
            <p>{props.title}</p>
            {props.children}
            
        </div>
    )
}

export const More = (props)=> {

    return (
        <div className="profile-box-more hidden">
            <div className="more-inner">
                <p><FontAwesomeIcon icon={faFileAlt} className="icon" size="lg"/>Check CV</p>
                <p><FontAwesomeIcon icon={faComment} className="icon" size="lg"/> Request Interview</p>
                <p> <FontAwesomeIcon icon={faCommentDots} className="icon" size="lg"/> Reccommend</p>
            </div>
            
        </div>
    )
}