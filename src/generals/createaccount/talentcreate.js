import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { useState} from "react";
import axios from "axios"
import {Socialoption} from "./socialsoption"
import {validateForm, validation } from "../../helper";
import {post, get} from "../../requests"
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

    const disableBtn = () => {
        return validateForm(formState.errors) ? (formState.email === '' || formState.name ==='' ||formState.phone ==='' || formState.password === '') ? true: false : true;
    }

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

            post('/v1/auth/talent/register', {
                email: formState.email,
                name: formState.name,
                phone :formState.phone,
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

    const socials = (event) => {
        event.preventDefault();
      
        axios.get('https://hirer-be.herokuapp.com/auth/login/talent/google')
        .then((response) => {
            console.log(response.status);
            if (response.status) {
                console.log(response.data);
                window.location.href = response.data.data;
                props.setUpCreated(response.data)
                props.showAlert();
                setTimeout(()=> {
                    props.clearAlert();
                }, 3000)

            } else {
                // props.setUpCreated(response)
                // props.showAlert();
                // setTimeout(()=> {
                //     props.clearAlert();

                // }, 5000)
            }
            
        }, (error) => {
            
            console.log(error.response.data);
            props.setUpCreated(error.response.data)
            props.showAlert();
            setTimeout(()=> {
                props.clearAlert();

            }, 3000)
        });

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

               <Socialoption
                 title="Sign Up"
                 glink ={socials}
               ></Socialoption>
                <form onSubmit={handleSubmit}>
                    <div className="talent-details">

                        <div className="talent-details-name">
                            <Singleinput
                                type="text"
                                placeholder ="Full Name"
                                label ="Full Name"
                                subtext="Enter your full name"
                                name="name"
                                value={formState.name}
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
                                value={formState.phone}
                                onChange={ (event) => handleUserInput(event) }
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
                            value={formState.email}
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
                            value={formState.password}
                            onChange={(event) => handleUserInput(event)}
                            error = {formState.errors.password}
                        >

                    </Singleinput>

                    <button type="submit" className="create-submit" disabled={disableBtn()}> Create </button>

                    
                    
                </form>

            </div>

        </div>

    )
    

}

export default Talentcreate;