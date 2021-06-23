import "./profile.scss"
import profile from "../../../talentassets/profile_image.png"
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import Textarea from "../../../../generals/inputs/textarea"
import {Singleprofile} from "../../../components/singleprofile/singleprofile"
import {Changepassword} from "../../../components/changepassword/changepassword"
import {Changeaccount} from "../../../components/changeaccountype/changeaccount"
import {Changeavailability} from "../../../components/changeavailability/changeavailability"
import {openProfile, closeProfile} from "../../../../helper"
import { useEffect, useState } from "react"
import { post } from "../../../../requests"
import { useSelector,useDispatch } from 'react-redux'
import { setAvatar } from "../../../../slices/avatarSlice"
export const Profile = () => {
    
    const talentAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const talentAvatar = useSelector((state) => state.avatar.avatar);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});

    const [avi, setAvi] = useState({
        status: '',
        message: '',
        data: ''
    });
    
    useEffect(()=> {
        openProfile();
    })

    var setInput = (e) => {
         setInputs({...inputs,
             [e.target.name] : [e.target.value]
         }, [inputs])
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
           uploadAvi(reader.result);
            // alert(reader.result.base64)
          }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    const uploadAvi = (result) => {

        post('/v1/talent/avatar-upload', {
            file: result
        })
        .then((response) => {
            console.log(response);
            dispatch(setAvatar(response.data));
            setAvi({
                status: response.status,
                message: response.message,
                data: response.data
            })
            
            
        }, (error) => {
            
            
        });

    }

    useEffect(()=> {
        setAvi({...avi, data:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'})
    }, [])

   
    
    return (
        <div className="user-profile-container" id="user-profile-container">

            <p>Profile</p>
            <div className="user-profile-inner">

                <div className="profile-picture-container">
                    <div className="profile-picture-top">
                        <p>Change Profile Picture</p>
                        <p>Choose a new avatar to be used across Coven</p>
                    </div>
                    <div className="profile-picture-bottom">
                        {talentAvatar ? <img src={talentAvatar} alt="user profile"/> :<img src={talentAvi} alt="user profile"/>  }
                        {/* <img src={data} alt="user profile"/> */}
                        {/* <button id="btnopendialog">Upload New Picture</button> */}
                        {/* onChange={this.imageHandler} */}
                        <input type="file" accept="image/*" name="image-upload" id="inputavi"  hidden onChange={imageHandler}/>
                        <label htmlFor="inputavi" className="image-upload" id="image-upload">Upload New Picture</label>
                        <a href="#" className="profile-picture-delete">Delete</a>

                    </div>

                </div>

                <div className="personal-details-container">
                    <p>Personal Details</p>
                    <form>
                        <Singleinputlabel
                            type="text"
                            label ="Full Name"
                            name="fullname"
                            value="Ajibade Thomas"
                            disabled= {false}
                            onChange={setInput}
                        />

                        <Singleinputlabel
                            type="text"
                            label ="email"
                            name="email"
                            value="ajibadethomas@gmail.com"
                            disabled= {false}
                            onChange={setInput}
                          
                        />
                        <Singleinputlabel
                            type="text"
                            label ="Phone Number"
                            name="pnumber"
                            value="+234811586199"
                            disabled= {false}
                            onChange={setInput}
                        />
                        <Singleinputlabel
                            type="text"
                            label ="Location"
                            name="location"
                            value="Lagos"
                            disabled= {false}
                            onChange={setInput}
                        />

                        <Textarea
                            type="text"
                            label ="Bio"
                            name="bio"
                            value="enter your bio"
                            // width= {605}
                        />
                    
                    </form>

                </div>

                <Singleprofile
                    headline = "Password"
                    title = "Update Your Password"
                    subtitle="Change and reset your password"
                    link ="Change Your Password"
                    className ="c-password"
                >

                </Singleprofile>
   
                <Singleprofile
                    headline = "Availability"
                    title = "Set your available time"
                    subtitle="set interviews to only available hours"
                    link ="Set Availability"
                    className ="c-availability"
                >

                </Singleprofile>

                <Singleprofile
                    headline = "Account Type"
                    title = "Set your account type"
                    subtitle="set interviews to only available hours"
                    link ="Set Account Type"
                    className ="c-account"
                >

                </Singleprofile>
            
                <button className="save-changes">Save Changes</button>
            </div>



            
            <div className="c-passworddiv hidden">
                <Changepassword close={closeProfile} setInput={setInput} ></Changepassword>
            </div>
            <div className="c-accountdiv hidden">
                <Changeaccount close={closeProfile}></Changeaccount>
            </div>
            <div className="c-availabilitydiv hidden">
                <Changeavailability close={closeProfile}></Changeavailability>
            </div>
            <div className="overlay hidden"></div>
           

        </div>
    )
}