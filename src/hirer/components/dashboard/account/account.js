import "./account.scss"
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import { Singleprofile } from "../../../../talent/components/singleprofile/singleprofile"
import { Changepassword } from "../../../../talent/components/changepassword/changepassword"
import { Dropdown, Option } from "../../../../generals/inputs/dropdown/dropdown"
import {openProfile, closeProfile} from "../../../../helper"
import { useEffect, useState } from "react"
import { post, get } from "../../../../requests"
import { useSelector,useDispatch } from 'react-redux'
import { updateEmpAccount, updateAvatar, updateEmpProfile } from "../../../../slices/companySlice"
import Singleinputlocation from "../../../../generals/location/location"
export const Account = () => {
    
    const empAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const empAvatar = useSelector((state) => state.company.dashboard);
    const userAccount = useSelector((state) => state.company.dashboard);

    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        location: '',
        website : '',
        availability: {
            id:'',
            value:''
        }
    });
    const [show, setShow] = useState(false)
    const [response, setResponse] = useState({
        status: null,
        message: ''
    })

    const showAlert = () => {
        setShow(show ? false: true)
    }
    const clearAlert = () => {
        setShow(false)
    }
    
    useEffect(()=> {
        openProfile();
    })

    var setInput = (e) => {
        setInputs({...inputs,
            [e.target.name] : [e.target.value]
        })

        if (e.target.name == "website" || e.target.name == "location") {
            dispatch(updateEmpProfile({name:e.target.name,value:e.target.value}))
        } else {
            dispatch(updateEmpAccount({name:e.target.name,value:e.target.value}))

        }
        
    }
    
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
           uploadAvi(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    const uploadAvi = (result) => {

        post('/v1/employer/avatar-upload', {
            file: result
        })
        .then((response) => {
            dispatch(updateAvatar(response.data.data));
            
            setResponse({
                status: response.data.status,
                message: response.data.message
            })
            showAlert();
            setTimeout(()=> {
                clearAlert();

            }, 2000)
        }, (error) => {
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
            showAlert();
            setTimeout(()=> {
                clearAlert();

            }, 3000)
            
        });

    }
    
    const handleUserLocation = (location) => {
        setInputs({...inputs, location:location});
    }

    const handleSubmt=(event)=> {
        event.preventDefault();
        
        post('/v1/employer/account', {
            name:userAccount.name,
            email: userAccount.email,
            website: userAccount.profile.website,
            location: userAccount.profile.location,
            latitude: 45.49494949,
            longitude: 33.030303,
            // availability: userAccount.profile.availability.id
        })
        .then((response) => {
            console.log(response.status);
            if (response.status) {

                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
                showAlert();
                setTimeout(()=> {
                    clearAlert();

                }, 3000)

            } else {
                console.log("errorrrrrr")
            }
            
        }, (error) => {
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
            showAlert();
            setTimeout(()=> {
                clearAlert();

            }, 3000)
        });
    }
   
    
    return (
        <div className="employer-profile-container" id="user-profile-container">
            { show && <div className= {`employer-account-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
            </div>}
            {/* <p>Profile</p> */}
            <div className="employer-profile-inner">

                <div className="profile-picture-container">
                    <div className="profile-picture-top">
                        <p>Change Profile Picture </p>
                        <p>Choose a new avatar to be used across Hirer</p>
                    </div>
                    <div className="profile-picture-bottom">
                        {empAvatar.data.company_data.avatar ? <img src={empAvatar.data.company_data.avatar} alt="user profile"/> :<img src={empAvi} alt="user profile"/>  }
                        {/* <img src={empAvi} alt="user profile"/>  */}
                        <input type="file" accept="image/*" name="image-upload" id="inputavi"  hidden onChange={imageHandler}/>
                        <label htmlFor="inputavi" className="image-upload" id="image-upload">Upload New Picture</label>
                        <a href={() => false} className="profile-picture-delete">Delete</a>

                    </div>

                </div>

                <div className="employer-details-container">
                    
                    <form onSubmit={handleSubmt}>
                        <div className="form-employer-details">
                            <p>Personal Details</p>
                            <div className="form-account-inputs">
                                <Singleinputlabel
                                    type="text"
                                    label ="Contact Name"
                                    name="name"
                                    value={userAccount.data.company_data ? userAccount.data.company_data.name : ''}
                                    disabled= {false}
                                    
                                />

                                <Singleinputlabel
                                    type="text"
                                    label ="email"
                                    name="email"
                                    value={userAccount.data.company_data ? userAccount.data.company_data.email : ''}
                                    disabled= {false}
                                />
                                
                                <Singleinputlocation

                                    label ="Location"
                                    subtext="Enter State"
                                    name="location"
                                    value={ userAccount.data.company_data? userAccount.data.company_data.profile.location : ''}
                                    handleUserLocation ={handleUserLocation }
                                    

                                />

                                <Singleinputlabel
                                    type="text"
                                    label ="Company Name"
                                    name="companyname"
                                    value={userAccount.data.company_data ? userAccount.data.company_data.profile.company_name : ''}
                                    disabled= {true}
                                    
                                />
                                <Singleinputlabel
                                    type="text"
                                    label ="Contact Website"
                                    name="website"
                                    value={userAccount.data.company_data ? userAccount.data.company_data.profile.website : ''}
                                    disabled= {false}
                                    
                                />
                            </div>
                        </div>
                        <Singleprofile
                            headline = "Password"
                            title = "Update Your Password"
                            subtitle="Change and reset your password"
                            link ="Change Your Password"
                            className ="c-password"
                        >

                        </Singleprofile>
            
                        <button type="submit"  className="save-changes">Save Changes</button>
                    </form>

                </div>
            </div>



            
            <div className="c-passworddiv hidden">
                <Changepassword close={closeProfile} setInput={setInput} ></Changepassword>
            </div>
            <div className="overlay hidden"></div>
        </div>
    )
}