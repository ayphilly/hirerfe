import "./searchjob.scss";
import  { Dropdown, Option }  from "../../../generals/inputs/dropdown/dropdown"
import  MapContainer  from "../../../generals/map/googlemap"
import {Creatjobalert} from "../../components/jobalert/createjobalert"
import {Jobfilter} from "../../components/jobfilter/jobfilter"
import {useParams, useLocation} from "react-router-dom";
import queryString from 'query-string'
import {useState, useEffect} from "react"
import Jobsearch from "../../components/jobsearch/jobsearch";
import { get } from "../../../requests";
export const Searchcontainer = (props) => {
  
    let { jobtitle, location } = useParams();
    const { search } = useLocation()
    const values = queryString.parse(search)

    const [formState, setForm ] = useState({
        jobtitle: values.title,
        location: values.location
       
    })
    const [optionValue, setOptionValue] = useState("");

    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
       
    };
    
    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
       setForm({...formState,[name]:value});
       
    }
    const handleUserLocation = (location) => {
        // setForm({...formState, location:location});
        alert("Hi");
    }

    useEffect(()=> {
        props.jobsearch(formState.title, formState.location);
    },[])

    
    

    return (
        <div className="searchjob-container">
            <div className="searchjo-inner-col">
                <div className="searchjob-left">
                    <div className="searchjob-left-top">
                        
                        <form className="searchjob-form">
                            <div className="search-input">
                                <Jobsearch
                                    handleUserInput={handleUserInput}
                                    formState={formState}
                                    address = {props.address}
                                    myFunction={props.jobsearch}
                                    handleUserLocation ={handleUserLocation }
                                />
                            </div>
                            
                            <div className = "form-dropdown">
                                <div className="dropdown-box">
                                    <Dropdown
                                        // formLabel="Number of hirers"
                                        buttonText="Send form"
                                        onChange={handleSelect}
                                        width={200}
                                    >
                                        <Option selected value="Job Type" />
                                        <Option value="fulltime" />
                                        <Option value="remote" />
                                        <Option value="contract" />
                                    </Dropdown>
                                </div>
                                <div className="dropdown-box">
                                    <Dropdown
                                        // formLabel="Number of hirers"
                                        buttonText="Send form"
                                        onChange={handleSelect}
                                        width={200}
                                    >
                                        <Option selected value="Location" />
                                        <Option value="lagos" />
                                        <Option value="ibadan" />
                                        <Option value="abuja" />
                                    </Dropdown>
                                </div>
                                <div className="dropdown-box">
                                    <Dropdown
                                        // formLabel="Number of hirers"
                                        buttonText="Send form"
                                        // onChange={handleSelect}
                                        width={200}
                                    >
                                        <Option selected value="Salary" />
                                        <Option value="<$1000" />
                                        <Option value=">$4000" />
                                        <Option value=">$5000" />
                                    </Dropdown>
                                </div>
                                <div className="dropdown-box">
                                    <Dropdown
                                        // formLabel="Number of hirers"
                                        buttonText="Send form"
                                        // onChange={handleSelect}
                                        width={200}
                                    >
                                        <Option selected value="Date Posted" />
                                        <Option value="recent" />
                                        <Option value="old" />
                                        <Option value="10-20" />
                                    </Dropdown>
                                </div>
                            </div>
                        </form>
                    </div>

                    <hr/>

                    <div className="searchjob-left-bottom">
                        <div className="left">
                            <div className="left-inner">
                                <Creatjobalert></Creatjobalert>
                                

                                <div className="left-filter">
                                    <div className="single-filter">
                                        <button className="accordion">
                                            Employment Type
                                        </button>
                                        <ul className="panel">
                                            
                                            <li> <Jobfilter label="Remote" result = {5} ></Jobfilter> </li>
                                            <li> <Jobfilter label="Contract" result = {0} ></Jobfilter> </li>
                                            <li> <Jobfilter label="Full time" result = {3} ></Jobfilter> </li>
                                        </ul>

                                    </div>

                                    <div className="single-filter">
                                        <button className="accordion">Locations</button>
                                        <ul className="panel">
                                            
                                            <li> <Jobfilter label="Lagos" result = {1} ></Jobfilter> </li>
                                            <li> <Jobfilter label="Abuja" result = {0} ></Jobfilter> </li>
                                            <li> <Jobfilter label="Ibadan" result = {4} ></Jobfilter> </li>
                                        </ul>

                                    </div>

                                    <div className="single-filter">
                                        <button className="accordion">Salary Range</button>
                                        <ul className="panel">
                                            
                                            <li> <Jobfilter label="$5-$10" result = {2} ></Jobfilter> </li>
                                            <li> <Jobfilter label="$50-$100" result = {3} ></Jobfilter> </li>
                                            <li> <Jobfilter label=">$1000" result = {0} ></Jobfilter> </li>
                                        </ul>

                                    </div>

                                    
                                </div>
                                

                            </div>

                        </div>
                        <div className="right">
                            <p className="search-text">Showing results for <strong>{formState.location} </strong>• <strong>{props.totalResults ? props.totalResults : 0}</strong> jobs</p>
                            <div className="right-inner">
                                {
                                    props.children
                                }


                            </div>

                        </div>

                    </div>

                </div>


                <div className="searchjob-right">
                    <div className="searchjob-right-inner">
                        <MapContainer
                            loc ={props.userloc}
                        ></MapContainer>
                    </div>
                    
                </div>

            </div>

        </div>
    )
    
}