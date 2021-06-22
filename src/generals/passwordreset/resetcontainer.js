import "./resetcontainer.scss"
import {useEffect, useState} from "react";
export const Resetcontainer = (props)=> {

    
    return (

        <div className="passwordreset-container" style={{height: props.height +'px'}}>
            { props.response.message && <div className= {`passwordreset-message ${props.response.status ? 'success' : 'error'}`}>
                        <p>{props.response.message}</p>
                </div>}
            <div className="progress"></div>
            <div className="passwordreset-inner-col">
                <div className="passwordreset-inner-top">
                    <p>Reset Your Password for {props.email} </p>
                    <p>
                        {
                            props.subtitle
                        }
                    </p>
                </div>

                {
                    props.children
                }

            </div>

        </div>
    )

}