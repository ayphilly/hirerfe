import "./register.scss"
import Hirercreate from "./hirercreate"
import Talentcreate from "./talentcreate"
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {slideDown} from "../../helper.js"
const Register = (props)=> {
    const [show, setShow] = useState(false)
    const [created, setCreated] = useState({})
    var openLink = () => {
        var link = document.querySelectorAll(".register-link");

        for (var i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function(){

                // getting the controller links and link pages/section
                var links = document.querySelector('.register-link-col')
                var linkPage = document.querySelector('.register-user')

                // getting the current selected Link and its subsequent value
                var currentLink = links.getElementsByClassName('active')
                var linkValue = currentLink[0].className.split(" ")[1]
                
                // getting the current page
                var currentPage =  linkPage.getElementsByClassName(linkValue)
                currentPage[0].className = currentPage[0].className.replace(" active", " hide")

                currentLink[0].className = currentLink[0].className.replace(" active", " ")
            

                var newLink = this.className.split(" ")[1];
                // alert(newAc)
                var newPage = linkPage.getElementsByClassName(newLink);
                newPage[0].className  = newPage[0].className.replace(" hide", " active")
                
                this.className += " active";
                
                

            })
        }

    }
    const showAlert = () => {
        setShow(show ? false: true)
    }
    const clearAlert = () => {
        setShow(false)
    }

    const setUpCreated = (data) => {
        setCreated(data);
    }
    var closeLink = () => {
        var close = document.querySelector(".create-account-close");
        close.addEventListener("click", function () {
            props.closePage();
        })

    }
    
    useEffect (()=> {
        openLink()
        closeLink();
        
        
    })
    useEffect (()=> {
        slideDown();
    }, [show])

    return (
        <div className="register-container">
            <div className="register-inner">
                { show && <div className= {`register-success slide-down ${created.errors ? 'error' : 'success'}`}>
                    <p>{created.message}, { created.errors ? created.errors.email ? created.errors.email[0] : created.errors.name[0] : " "} </p>
                </div>}
               
                <div className="register-inner-col">
                    <div className="register-link-col">
                        <p className="register-link hirer active">Hirer</p>
                        <p className="register-link talent">Talent</p>
                    </div>

                    <div className="register-user" id="conts">
                        <Hirercreate showAlert ={showAlert} clearAlert={clearAlert} setUpCreated={setUpCreated}></Hirercreate>
                        <Talentcreate showAlert ={showAlert} clearAlert={clearAlert} setUpCreated={setUpCreated}></Talentcreate>
                    </div>


                </div>
                <div className="register-notes"> 
                    <p>
                    By creating an account, you agree to Hirer's Terms of Service, Cookie Policy and Privacy Policy. 
                    You consent to receiving marketing messages from Hirer and may opt out from receiving such messages
                    by following the unsubscribe link in our messages, or as detailed in our terms.
                    </p>

                </div>

            </div>
            

        </div>

    )

}

export default Register;
