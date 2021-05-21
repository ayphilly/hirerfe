import "./createaccount.scss"
import Hirercreate from "./hirercreate"
import Talentcreate from "./talentcreate"
import {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const Createaccount = (props)=> {


    var openLink = () => {
        var link = document.querySelectorAll(".create-account-link");

        for (var i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function(){

                // getting the controller links and link pages/section
                var links = document.querySelector('.create-account-link-col')
                var linkPage = document.querySelector('.create-account-user')

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

    return (
        <div className="create-account-container hidden">
            <div className="create-account-inner">
                <div className="create-account-close">
                    <FontAwesomeIcon icon={faTimes} className="asterisk-icon"/>
                </div>
                <div className="create-account-inner-col">
                    <div className="create-account-link-col">
                        <p className="create-account-link hirer active">Hirer</p>
                        <p className="create-account-link talent">Talent</p>
                    </div>

                    <div className="create-account-user" id="conts">
                        <Hirercreate></Hirercreate>
                        <Talentcreate></Talentcreate>
                    </div>


                </div>
                <div className="create-account-notes"> 
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

export default Createaccount;
