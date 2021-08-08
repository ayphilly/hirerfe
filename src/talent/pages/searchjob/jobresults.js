
import Singlejob from "../../components/singlejob/singlejob"
import {jobSearch} from "../../constants"
import {useParams, useLocation, useHistory} from "react-router-dom";
import {useState, useEffect} from "react"
import {accordionFunc} from "../../../helper"
import { Empty } from "../../../generals/emptyresult/emptyresult";
import { Searchcontainer } from "./searchcontainer"
import { post,get} from "../../../requests";
import "./jobresults.scss"
import { Loading } from "../../../generals/loading/loading";
export const Jobresult = () => {

    var history = useHistory();
    const [myjobs, setJobs]= useState({})
    const [status, setStatus] = useState(null);

    const [load, setLoad] = useState(true)
    const [response, setResponse] = useState({
        status: null,
        message: ''
    })
    
    const [error, setError] = useState({
        status: null,
        message: ''
    })
    const [userloc, setLoc]= useState({})
    const [addr, setAddr]= useState()
    let { jobtitle, location } = useParams();

    var openAction =()=> {
        var mor = document.querySelectorAll(".vertical-icon");
        var action = document.querySelectorAll(".job-action");
        for (var i =0; i<mor.length; i++) {
            mor[i].addEventListener('click', function() {
                

                if (this.nextSibling.style.display) {
                    this.nextSibling.style.display="none";

               } else {
                this.nextSibling.className += ' moreactive'
                this.style.color ="black";

               }
                
                
            })

        }
        
    }

    var goToJob = (name, id)=> {
        history.push(`/talent/jobdescription?name=${name}&id=${id}`);
    }

    


    const searchJobs = (jobtitle,location) => {
        get(`/v1/job/search?title=${jobtitle}&location=${location}`)
          .then((response) => {
  
              if (response.status) {
  
                  setJobs(response.data)
                  setLoad(false);
                  
              } else {
                 setResponse({
                      status: response.data.status,
                      message: response.data.message
                  })
                  setLoad(false);
              }
              
          }, (error) => {
              setError({
                  status: error.response.data.status,
                  message: error.response.data.message
              })
              setLoad(false);
          });
 
    }

    var saveJob = (id)=> {
        // event.preventDefault();
       
       
       post(`/v1/talent/job/${id}`)
        .then((response) => {

            if (response.status) {

                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
                
            } else {
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
            }
            
        }, (error) => {
            setError({
                status: error.response.data.status,
                message: error.response.data.message
            })
        });

    }

   
    const getLocation = () => {
        if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
        } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLoc({lat:position.coords.latitude, lon:position.coords.longitude});
           
            // setLng(position.coords.longitude);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
        }
    }
    var getAddress = async () => {

        let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userloc.lat},${userloc.lon }&key=AIzaSyCUKKnD6wpJJHyENK1BkYSqQgM2u9i-XOM`);

        let commits = await response.json();
        // setAddr(commits.results[0].address_components[3].long_name)
        
    }

    var jobs = myjobs.data ? myjobs.data.jobs.map (job=> {
        return (
            <Singlejob
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                days={job.days}
                location={job.location}
                type={job.type}
                click ={openAction}
                save = {saveJob}
                goto = {goToJob}
            >

            </Singlejob>
        )
    }):{}

    useEffect(()=> {
       
        accordionFunc();
        getLocation();
    },[])
    useEffect(()=> {
       const timer = setTimeout(() => {
        getAddress ();
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [userloc])

  
    if (load) {
        return(
            <div className="job-results-container">
                { response.message && <div className= {`job-results-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}
                <div className="job-results-inner">
                    <Searchcontainer
                        userloc={userloc}
                        address={addr}
                        jobsearch={searchJobs}
                        totalResults = {myjobs.links && myjobs.links.total}
                    >
                        <Loading></Loading>
                    </Searchcontainer>
                </div>
    
            </div>
        )
    }
    else if (jobs.length < 1 ) {
        return(
            <div className="job-results-container">
                <div className="job-results-inner">
                    <Searchcontainer
                        userloc={userloc}
                        address={addr}
                        jobsearch={searchJobs}
                        totalResults = {myjobs.links ? myjobs.links.total : 0}
                    >
                        <Empty></Empty>
                    </Searchcontainer>
                </div>
    
            </div>
        )

    } else {

        return(
            <div className="job-results-container">
                { response.message && <div className= {`job-results-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}
                <div className="job-results-inner">
                    <Searchcontainer
                        userloc={userloc}
                        address={addr}
                        jobsearch={searchJobs}
                        totalResults = {myjobs.links ? myjobs.links.total : 0}
                    >
                       { jobs}
                    </Searchcontainer>
    
                </div>
    
            </div>
        )

    }
    
}