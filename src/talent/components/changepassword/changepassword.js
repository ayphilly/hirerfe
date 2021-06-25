import "./changepassword.scss"
import Singleinputlabel from "../../../generals/inputs/singleinputlabel";
export const Changepassword = (props)=> {

    var closeBox = (event)=> {

        event.preventDefault();
        props.close();
        
    }


    
    return (
        <div className="changepassword-container">
            <div className="changepassword-inner">
                <form>
                    <Singleinputlabel
                        type="password"
                        label ="Old Password"
                        name="password"
                        value=""
                        disabled= {false}
                        onChange={props.setInput}
                    />

                    <Singleinputlabel
                        type="password"
                        label ="New Password"
                        name="confirm_password"
                        value=""
                        onChange={props.setInput}
                        disabled= {false}
                    /> 

                   <div className="form-buttons">
                       <button type="cancel" onClick = {closeBox}
                        > Cancel </button>
                       <button> Change Password </button>
                   </div>    
                        
                </form>
            </div>
        </div>
    )
}