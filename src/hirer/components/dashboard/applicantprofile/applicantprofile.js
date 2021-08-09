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

    const [profile, setProfile] = useState({})
    const [load, setLoad] = useState(true)
    const [talent, setTalent] = useState(props.id)

    var getApplicant = ()=> {

        get(`/v1/employer/talent-profile/${props.id}`)
          .then((response) => {
              if (response.status) {
                  console.log(response.data)
                  setProfile(response.data);
                  setLoad(false)
              } else {
                //  setError({
                //       status: response.data.status,
                //       message: response.data.message
                //   })
              }
              
          }, (error) => {
                setProfile(error.response.data);
                setLoad(false)
              console.log("Somethign went wrong");
          });
    }

    var setTalentId = () => {
        setTalent(props.id)
    }
    useEffect(()=> {
        // if (props.id) {
        //     setTalentId();
        // } else {
        //     console.log('nothing to show')
        // }
        setTalentId();
        
    },[])
    useEffect(() => {

        // if (talent) {
        //     getApplicant();
        // } else {
        //     // setTalent(null)
        //     console.log('nothing to show')
        // }

        getApplicant();

        
    }, [talent])

    var skills = ['adobe','microsoft', 'figma', 'reactjs']
    
    if (load) {
        return (
            <div className="single-applicant-profile-container">
                <div className="applicant-profile-inner">
                    <Loading></Loading>

                </div>
             </div>
        )
    }
    else if (talent === null) {
        return (
            <div className="single-applicant-profile-container">
                <div className="applicant-profile-nothing">
                    <Empty
                        text="Talent does not have a profile"
                    ></Empty>
                </div>
            </div>
            
        )
        

    } 
    else {
        return (
            <div className="single-applicant-profile-container">
                <div className="applicant-profile-inner">
                    <div className="applicant-profile-inner top">
                        <p>{profile.data ? profile.data.profile.name : ''}</p>
                        <p>Available to work immediately • {profile.data ? profile.data.profile.location : ''}</p>
                    </div>
                    {profile.data.profile && <div className="applicant-profile-inner bottom">
                        <Applicantsingle
                            image={education}
                            title="Education"
                            data = {profile.data.profile.education}
                        />
                        <Applicantsingle
                            image={experience}
                            title="Experience"
                            data = {profile.data.profile.experience}
                        />
                        {/* <Applicantsingle
                            title="Licenses & Certificates"
                        /> */}
                    </div>}
                    <Skillset
                        title="Skillset"
                        // data = {profile.data ? profile.data.profile.skills.skill === null ? ['empty', 'skills']: profile.data.profile.skills.skill: ''}
                        data={skills}
                    />
                    <Contactdetals/>

                    <button type="button" className="button" onClick={() => props.close()}>Close</button>
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
                    image={props.image}
                />
            </div>
            
        </div>
    )
}

const Applicantdetail = (props)=> {

    return (
        <div className="detail-contents single-detail">
            <img src={props.image} alt="cv-image"/>
            <div className="single-detail-content">
                {props.title === "Experience" ? <p>{props.data.title}</p> : props.title === "Education" ?<p>{props.data.field}</p>: '' }
                {props.title === "Experience" ? <p>{props.data.company}</p> : props.title === "Education" ? <p>{props.data.school}</p> : '' }
                <p> {props.data && props.data.month_from + ','}{props.data && props.data.year_from + '-'}  { props.data && props.data.month_to + ',' }{props.data && props.data.year_to + '•'}{ props.data && props.data.location}</p>
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