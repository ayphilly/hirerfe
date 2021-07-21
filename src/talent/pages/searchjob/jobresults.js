
import Singlejob from "../../components/singlejob/singlejob"
import {jobSearch} from "../../constants"
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react"
import {accordionFunc} from "../../../helper"
import { Empty } from "../../../generals/emptyresult/emptyresult";
import { Searchcontainer } from "./searchcontainer"
import { post,get} from "../../../requests";
import "./jobresults.scss"
export const Jobresult = () => {

    const [myjobs, setJobs]= useState()
    const [status, setStatus] = useState(null);
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

    var jobs = jobSearch.map (job=> {
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
            >

            </Singlejob>
        )
    })

    const searchJobs = () => {
        get('/v1/talent/job/')
          .then((response) => {
  
              if (response.status) {
  
                  setJobs(response.data.data.jobs)
                  
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

    var saveJob = (event, id)=> {
        event.preventDefault();
       
       
       post('/v1/talent/job/', {
           id :1
       })
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
        setAddr(commits.results[0].address_components[3].long_name)
        
    }

    useEffect(()=> {
       
        accordionFunc();
        getLocation();
    },[])
    useEffect(()=> {
       const timer = setTimeout(() => {
        getAddress ();
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [userloc])

    if (jobs.length < 1 ) {
        return(
            <div className="job-results-container">
                <div className="job-results-inner">
                    <Searchcontainer
                        userloc={userloc}
                        address={addr}
                    >
                        <Empty></Empty>
                    </Searchcontainer>
                </div>
    
            </div>
        )

    } else {

        return(
            <div className="job-results-container">
                <div className="job-results-inner">
                    <Searchcontainer
                        userloc={userloc}
                        address={addr}
                    >
                       { jobs}
                    </Searchcontainer>
    
                </div>
    
            </div>
        )

    }
    
}