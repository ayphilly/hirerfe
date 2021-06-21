import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
// import axios from "axios"
import {validateForm, validation } from "../../helper";
import apiClient from "../../api";
import "./talentcreate.scss";

const Talentcreate = (props) => {
    const [formState, setForm ] = useState({
        email: '',
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
        errors: { email: '', name: '', phone: '', password: ''}
    })

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        let errors = formState.errors;
        errors = validation(name,value,errors)
       setForm({...formState, [name]: value, errors});
       
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(formState.errors)) {

            apiClient.post('v1/auth/talent/register', {
                email: formState.email,
                name: formState.name,
                phone :'08115861199',
                password : formState.password,
                password_confirmation : formState.password,
            })
            .then((response) => {
                console.log(response.status);
                if (response.status) {

                    props.setUpCreated(response.data)
                    props.showAlert();
                    setTimeout(()=> {
                        props.clearAlert();

                    }, 10000)

                } else {
                    props.setUpCreated(response)
                    props.showAlert();
                    setTimeout(()=> {
                        props.clearAlert();

                    }, 5000)
                }
                
            }, (error) => {
                setForm({...formState, errors:error.response.data.errors})
                props.setUpCreated(error.response.data)
                props.showAlert();
                setTimeout(()=> {
                    props.clearAlert();

                }, 10000)
            });

           
        }else{
          alert('Invalid Form')
        }
    }
    return (
        <div className="talent-account-container talent hide">
            <div className="talent-account-inner">
                <div className="create-account-texts">
                    <p>Create Your Talent Account</p>
                    <p>Reach top talent and find the right candidate today.</p>
                    <div className="create-account-note">
                        <FontAwesomeIcon icon={faAsterisk} className="asterisk-icon" size="xs"/>
                        <p> Denotes Mandatory Fields </p>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="talent-details">

                        <div className="talent-details-name">
                            <Singleinput
                                type="text"
                                placeholder ="Full Name"
                                label ="Full Name"
                                subtext="Enter your full name"
                                name="name"
                                width= {285}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.name}
                            >

                            </Singleinput>
                        </div>
                        <div className="talent-details-phone">
                            <Singleinput
                                type="text"
                                placeholder ="Phone Number"
                                label ="Phone Number"
                                subtext="Enter your phone number"
                                name="phone"
                                width= {285}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.phone}

                            >

                            </Singleinput>
                        </div>

                        

                        

                    </div>
                    <Singleinput
                            type="text"
                            placeholder ="Email Address"
                            label ="Your Email"
                            subtext="Enter your email address"
                            name="email"
                            width= {585}
                            onChange={(event) => handleUserInput(event)}
                            error = {formState.errors.email}
                        >

                    </Singleinput>

                    <Singleinput
                            type="password"
                            placeholder ="Create your password"
                            label ="Your Password"
                            subtext="Enter your 8 digits password"
                            name="password"
                            width= {585}
                            onChange={(event) => handleUserInput(event)}
                            error = {formState.errors.password}
                        >

                    </Singleinput>

                    <button type="submit" className="create-submit" disabled={validateForm(formState.errors) ? false : true}> Create </button>

                    
                    
                </form>

            </div>

        </div>

    )
    

}

export default Talentcreate;