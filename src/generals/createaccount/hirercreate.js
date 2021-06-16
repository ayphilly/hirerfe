import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import "./hirercreate.scss"
import { useState, useEffect } from "react";
import axios from "axios"
import { validateForm, validation } from "../../helper";

const Hirercreate = () =>  {

    const [formState, setForm ] = useState({
        email: '',
        name: '',
        company_name: '',
        password: '',
        password_confirmation: '',
        errors: { email: '', name: '', company_name: '', password: ''}
    })

    
    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        let errors = formState.errors;

        errors = validation(name,value,errors);
       
       setForm({...formState, [name]: value, password_confirmation:formState.password , errors});
       
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(formState.errors)) {
          alert(JSON.stringify(formState))
        }else{
          alert('Invalid Form')
        }
    }
    return (
        <div className="hirer-account-container hirer active">
            <div className="hirer-account-inner">
                <div className="create-account-texts">
                    <p>Create Your Hirer Account</p>
                    <p>Reach top talent and find the right candidate today.</p>
                    <div className="create-account-note">
                        <FontAwesomeIcon icon={faAsterisk} className="asterisk-icon" size="xs"/>
                        <p> Denotes Mandatory Fields </p>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="company-details">
                        <div className="c-name">
                            <Singleinput
                                type="text"
                                placeholder ="Company Name"
                                label ="Company Name"
                                subtext="Enter your company name"
                                name="name"
                                value={formState.name}
                                width= {285}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.name}
                            >
                            </Singleinput>
                        </div>

                        <div className="c-person">
                            <Singleinput
                                type="text"
                                placeholder ="Contact Person"
                                label ="Contact Person"
                                subtext="Enter your name"
                                name="company_name"
                                width= {285}
                                value={formState.company_name}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.company_name}

                            >

                            </Singleinput>

                        </div>
                       

                        

                        

                    </div>
                    <Singleinput
                            type="text"
                            placeholder ="Company Email"
                            label ="Company Email"
                            subtext="Enter your company email"
                            name="email"
                            width= {590}
                            value={formState.email}
                            onChange={(event) => handleUserInput(event)}
                            error = {formState.errors.email}
                        >

                    </Singleinput>
                    <Singleinput
                            type="password"
                            placeholder ="Create your password"
                            label ="Company Password"
                            subtext="Enter your company email"
                            name="password"
                            width= {585}
                            value={formState.password}
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

export default Hirercreate