import "./account.scss"
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import Textarea from "../../../../generals/inputs/textarea"
import {Singleprofile} from "../../../components/singleprofile/singleprofile"
import {Changepassword} from "../../../components/changepassword/changepassword"
import {Changeaccount} from "../../../components/changeaccountype/changeaccount"
import {Changeschedule} from "../../../components/changeavailability/changeschedule"
import { Dropdown, Option } from "../../../../generals/inputs/dropdown/dropdown"
import RadioButton from "../../../../generals/inputs/radiobox"
import {openProfile, closeProfile} from "../../../../helper"
import { useEffect, useState } from "react"
import { post, get } from "../../../../requests"
import { useSelector,useDispatch } from 'react-redux'
// import { setAvatar } from "../../../../slices/avatarSlice"
import { setTalentData, updateTalent, setAvatar,updateTalentAvailability, updateTalentSchedule, updateTalentScheduleDays } from "../../../../slices/talentSlice"
export const Account = () => {
    
    const talentAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const talentAvatar = useSelector((state) => state.talent.avatar);
    const userAccount = useSelector((state) => state.talent.talentData);

    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        location: '',
        phone : '',
        bio: '',
        availability: {
            id:'',
            value:''
        },
        schedule: {
            from:'',
            to:'',
            days:[]
        },
        gender: userAccount.profile ? userAccount.profile.gender : ''
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
        
        dispatch(updateTalent({name:e.target.name,value:e.target.value}))
        
    }
    var setDropdown = (e) => {
        const index = e.target.selectedIndex;
        dispatch(updateTalentAvailability({id:index,value:e.target.value}))
       
    }
    var setScheduleTime= (e) => {
        setInputs({...inputs, schedule:{
            ...inputs.schedule,
            [e.target.name] : [e.target.value]
        }
        })
        dispatch(updateTalentSchedule({name:e.target.name,value:e.target.value}))
        console.log(e.target.name, e.target.value)
    }
    var dd = [];
    var setScheduleDate= (e) => {
        let filteredId = inputs.schedule.days.filter(id => id !== e);
        setInputs({...inputs, schedule:{
            ...inputs.schedule,
            days : [...filteredId, e]
        }
        },[inputs.schedule.days])
        // dd.push(e);
        dispatch(updateTalentScheduleDays(inputs.schedule.days))
        console.log(inputs.schedule.days)
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

        post('/v1/talent/avatar-upload', {
            file: result
        })
        .then((response) => {
            dispatch(setAvatar(response.data.data));
            
            setResponse({
                status: response.data.status,
                message: response.data.message
            })
            showAlert();
            setTimeout(()=> {
                clearAlert();

            }, 3000)
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
    const getTalent =() => {
        get('/v1/talent/account')
        .then((response) => {
            // console.log(response);
            if (response.status) {
                // console.log(response.data);
                dispatch(setTalentData(response.data.data));
                

            } else {
                alert("error lee")
            }
            // alert(response.data)
            
        }, (error) => {
            
            // alert(error.response.data)
            
        });
    }
    useEffect(()=> {
        getTalent();
    }, [])

    const handleSubmt=(event)=> {
        event.preventDefault();
        
        post('/v1/talent/account', {
            name:userAccount.name,
            email: userAccount.email,
            phone: userAccount.profile.phone,
            location: userAccount.profile.location,
            latitude: 45.49494949,
            longitude: 33.030303,
            gender: userAccount.profile.gender,
            availability: userAccount.profile.availability.id
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
        <div className="user-profile-container" id="user-profile-container">
            { show && <div className= {`talent-account-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
            </div>}
            {/* <p>Profile</p> */}
            <div className="user-profile-inner">

                <div className="profile-picture-container">
                    <div className="profile-picture-top">
                        <p>Change Profile Picture </p>
                        <p>Choose a new avatar to be used across Coven</p>
                    </div>
                    <div className="profile-picture-bottom">
                        {talentAvatar ? <img src={talentAvatar} alt="user profile"/> :<img src={talentAvi} alt="user profile"/>  }
                       
                        <input type="file" accept="image/*" name="image-upload" id="inputavi"  hidden onChange={imageHandler}/>
                        <label htmlFor="inputavi" className="image-upload" id="image-upload">Upload New Picture</label>
                        <a href={() => false} className="profile-picture-delete">Delete</a>

                    </div>

                </div>

                <div className="personal-details-container">
                    
                    <form onSubmit={handleSubmt}>
                        <div className="form-personal-details">
                            <p>Personal Details</p>
                            <div className="form-account-inputs">
                                <Singleinputlabel
                                    type="text"
                                    label ="Full Name"
                                    name="fullname"
                                    value={userAccount ? userAccount.name : ''}
                                    disabled= {true}
                                    
                                />

                                <Singleinputlabel
                                    type="text"
                                    label ="email"
                                    name="email"
                                    value={userAccount ? userAccount.email : ''}
                                    disabled= {true}
                                />
                                <Singleinputlabel
                                    type="text"
                                    label ="Phone Number"
                                    name="phone"
                                    value={ userAccount.profile ? userAccount.profile.phone : ''}
                                    disabled= {false}
                                    onChange={ (event) => setInput(event) }
                                />
                                <Singleinputlabel
                                    type="text"
                                    label ="Location"
                                    name="location"
                                    // value={inputs.location}
                                    value={ userAccount.profile ? userAccount.profile.location : ''}
                                    disabled= {false}
                                    onChange={ (event) => setInput(event) }
                                />
                                <Textarea
                                type="text"
                                label ="Bio"
                                name="bio"
                                placeholder = "Write some stuff about your self"
                                value="enter your bio"
                                onChange={ (event) => setInput(event) }
                                // width= {605}
                            />
                            </div>
                            

                            

                            <div className="personal-details-gender">
                                <div className="gender-inner-top">
                                    <p>Gender</p>
                                    <p>How you would like to be identified</p>
                                </div>
                                <div className="gender-inner-radios">
                                    <RadioButton 
                                        changed={ (event) => setInput(event) } 
                                        id="1" 
                                        isSelected={ userAccount.profile && userAccount.profile.gender === "M" } 
                                        label="Male" 
                                        value="M" 
                                        name="gender"
                                    />

                                    <RadioButton 
                                        changed={ (event) => setInput(event)  } 
                                        id="2" 
                                        isSelected={ userAccount.profile && userAccount.profile.gender === "F" } 
                                        label="Female" 
                                        value="F" 
                                        name="gender"
                                    />
                                    <RadioButton 
                                        changed={ (event) => setInput(event) } 
                                        id="3" 
                                        isSelected={ userAccount.profile && userAccount.profile.gender === "O" } 
                                        label="Others" 
                                        value="O" 
                                        name="gender"
                                    />

                                </div>

                            </div>
                        </div>
                        
                        
                        <div className="talent-account-availaility">
                            <p>Change Availability</p>
                            <Dropdown
                                formLabel="availability"
                                onChange={setDropdown }
                                name = "availability"
                                id={ userAccount.profile ? userAccount.profile.availability.id : ''}
                                value={ userAccount.profile ? userAccount.profile.availability.value : ''}
                            >
                                <Option defaultValue value="Select availability" />
                                <Option id="1" value="I'm available to work" />
                                <Option id="2" value="I'm not available to work" />
                                <Option id="3" value="I'm partially available to work" />
                            </Dropdown>
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
                            headline = "Schedule"
                            title = "Set your schedule time"
                            subtitle="set interviews to only available hours"
                            link ="Set Schedule"
                            className ="c-schedule"
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
            
                        <button type="submit"  className="save-changes">Save Changes</button>
                    </form>

                </div>
            </div>



            
            <div className="c-passworddiv hidden">
                <Changepassword close={closeProfile} setInput={setInput} ></Changepassword>
            </div>
            <div className="c-accountdiv hidden">
                <Changeaccount close={closeProfile}></Changeaccount>
            </div>
            <div className="c-schedulediv hidden">
                <Changeschedule close={closeProfile} setTime={setScheduleTime} setDate={setScheduleDate}></Changeschedule>
            </div>
            <div className="overlay hidden"></div>
           

        </div>
    )
}