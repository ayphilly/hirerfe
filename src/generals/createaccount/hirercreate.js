import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import "./hirercreate.scss"
import { useState} from "react";
import { validateForm, validation } from "../../helper";
import {post} from "../../requests"
import { Socialoption } from "./socialsoption";
import axios from "axios";
import { useHistory } from "react-router";
const Hirercreate = (props) =>  {

   
    const [formState, setForm ] = useState({
        email: '',
        name: '',
        company_name: '',
        password: '',
        password_confirmation: '',
        errors: { email: '', name: '', company_name: '', password: ''}
    })
    const history = useHistory();

    const disableBtn = () => {
       return validateForm(formState.errors) ? (formState.email === '' || formState.name ==='' ||formState.company_name ==='' || formState.password === '') ? true: false : true;
    }

    
    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        let errors = formState.errors;

        errors = validation(name,value,errors);
       
        setForm({...formState, [name]: value, password_confirmation:formState.password , errors});
       
    }

    const socials = (event) => {
        event.preventDefault();
      
        axios.get('https://hirer-be.herokuapp.com/auth/login/company/google')
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
    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm(formState.errors)) {
            
            post('/v1/auth/company/register', {
                email: formState.email,
                name: formState.name,
                company_name :'covenworks',
                password : formState.password,
                password_confirmation : formState.password,
              })
            .then((response) => {
                console.log(response);
                if (response.status) {

                    props.setUpCreated(response.data)
                    props.showAlert();
                    setTimeout(()=> {
                        props.clearAlert();

                    }, 2000)
                    setForm(
                        {
                            email: '',
                            name: '',
                            company_name: '',
                            password: '',
                            password_confirmation: '',
                            errors: { email: '', name: '', company_name: '', password: ''}
                        }
                    )
                    history.push(`/checmail`);

                } else {

                    
                    props.setUpCreated(response)
                    props.showAlert();
                    setTimeout(()=> {
                        props.clearAlert();

                    }, 2000)
                }
                // alert(response.data)
                
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

                <Socialoption
                 title="Sign Up"
                 glink ={socials}
               ></Socialoption>
                
                <form onSubmit={handleSubmit}>
                    <div className="company-details">
                        <div className="c-name">
                            <Singleinput
                                type="text"
                                placeholder ="Company Name"
                                label ="Company Name"
                                subtext="Enter your company name"
                                name="company_name"
                                value={formState.company_name}
                                width= {285}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.company_name}
                                
                            >
                            </Singleinput>
                        </div>

                        <div className="c-person">
                            <Singleinput
                                type="text"
                                placeholder ="Contact Person"
                                label ="Contact Person"
                                subtext="Enter your name"
                                name="name"
                                width= {285}
                                value={formState.name}
                                onChange={(event) => handleUserInput(event)}
                                error = {formState.errors.name}
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

                    <button type="submit" className="create-submit" disabled={disableBtn()}> Create </button>
                    
                </form>

            </div>

        </div>
    )

}

export default Hirercreate