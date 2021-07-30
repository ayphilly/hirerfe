import "./signin.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState} from "react"
import axios from "axios"
import {post, get} from "../../requests"
import {useDispatch } from 'react-redux'
import { setAuthData } from "../../slices/authSlice"
import { setDashboard } from "../../slices/companySlice"
import {useHistory} from "react-router";
import { Link } from 'react-router-dom';
import {Socialoption} from "../createaccount/socialsoption"
import { useSelector } from "react-redux";
export const Signin =()=> {

    const dispatch = useDispatch()
    const authdata = useSelector((state) => state.auth.authData);
    let history = useHistory();
    const [formState, setFormstate] = useState({
        email: '',
        password: ''
    })

    const [response, setResponse] = useState({
        status: null,
        message: ''
    })

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

       setFormstate({...formState, [name]: value});
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // alert(JSON.stringify(formState))
    //     post('/v1/auth/login', formState)
    //     .then((response) => {
    //         // console.log(response);

    //         if (response.status) {
    //             // console.log(response.data.status);
    //             // console.log(response.data.data.name);
    //             dispatch(setAuthData(response.data.data));
                
    //             setResponse({
    //                 status: response.data.status,
    //                 message: response.data.message
    //             })

    //             setTimeout(()=> {
    //                 response.data.data.role === "company" ? history.push("/dashboard/hirer/home") :history.push("/dashboard/talent");
    //             }, 2000)
                
                
                

    //         } else {

    //             console.log(response);
    //             setResponse({
    //                 status: response.status,
    //                 message: response.message
    //             })
    //         }
            
    //     }, (error) => {
    //         // console.log(error.response.data.status)
    //         setResponse({
    //             status: error.response.data.status,
    //             message: error.response.data.message
    //         })
           
    //     })
    // }

    var getUserData = async () => {
        try {
            const {data} = await post('/v1/auth/login', formState);
            dispatch(setAuthData(data.data));
            setResponse({
                status: data.status,
                message: data.message
            })
            setTimeout(()=> {
                data.data.role === "company" ? history.push("/dashboard/hirer/home") :history.push("/dashboard/talent");
            }, 2000)
            // return data;
        } catch (err) {
            console.log(err.message);
        }
    }
    var getEmpData = async () => {
        try {
            const {data} = await get(`/v1/employer/dashboard`);
            dispatch(setDashboard(data.data));
            // return data;
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formState))
        getUserData();
        if (authdata.role === "company") {
            getEmpData();
        }
        

    }
    

    const socials = (event) => {
        event.preventDefault();
      
        axios.get('https://hirer-be.herokuapp.com/auth/login/talent/google')
        .then((response) => {
            console.log(response.status);
            if (response.status) {
                console.log(response.data);
                
                setResponse(response.data)
                window.location.href = response.data.data;

            } else {
                // props.setUpCreated(response)
                // props.showAlert();
                // setTimeout(()=> {
                //     props.clearAlert();

                // }, 5000)
            }
            
        }, (error) => {
            
            console.log(error.response.data);
            setResponse(error.response.data)
        });

    }
    return (
        <div className="signin-container">
            
            <div className="signin-inner">
                { response.message && <div className= {`signin-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}
                <div className="signin-texts">
                    <p>Welcome Back</p>
                    <p>Reach top talent and find the right candidate today.</p>
                   
                </div>
                <div className="socials-options">
                    <Socialoption
                        title="Continue"
                        glink ={socials}
                    ></Socialoption>
                </div>
                    
                
                
                <form onSubmit={handleSubmit}>
                    <div className="form-inner">
                        <Singleinputlabel
                            type="text"
                            placeholder ="Continue with your email"
                            label ="Email"
                            name="email"
                            onChange={(event) => handleUserInput(event)}
                            // width= {520}
                        >

                        </Singleinputlabel>

                        <Singleinputlabel
                            type="password"
                            placeholder ="Continue with your password"
                            label ="Password"
                            name="password"
                            onChange={(event) => handleUserInput(event)}
                            // width= {520}
                        >

                        </Singleinputlabel>

                        <p> Forgotten password ? <Link className="" to="/forgotpassword" style={{textDecoration:'none'}}>Reset Here</Link> </p>
                        <button type="submit" className="signin-submit"  disabled={formState.email && formState.password ? false : true} > Sign In </button>

                        <p> New member ?  <Link className="" to="/createaccount" style={{textDecoration:'none'}}>Create your free account now </Link> </p>

                    </div>
                    
                    

                    
                    
                </form>

            </div>

        
          
      </div>
      
    );
}
