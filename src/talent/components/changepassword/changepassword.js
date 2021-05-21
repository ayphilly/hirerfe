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
                        name="oldpassword"
                        value=""
                        disabled= {false}
                        onChange={props.setInput}
                    />

                    <Singleinputlabel
                        type="password"
                        label ="New Password"
                        name="newpassword"
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