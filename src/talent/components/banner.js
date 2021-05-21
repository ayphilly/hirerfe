import "./banner.scss";
import netflix from "../talentassets/logo-netflix.svg"
import target from "../talentassets/logo-target.svg"
import verizon from "../talentassets/logo-verizon.svg"
import search from "../talentassets/searching.svg"
import Jobsearch from "./jobsearch/jobsearch"

import {useEffect} from "react"
import {slideUp} from "../../helper.js"
function Banner () {

    

    useEffect(()=>{
        slideUp();
    }, [])
    return (
        <div className="talent-banner-container">
            <div className="banner-inner">
                <div className="banner-inner left">
                    <div className="left-top">
                        <span className="top-title slide-up" > Let <strong>Our AI</strong> Find You Your Next Job </span>
                        <p> Few roles you could not fill anywhere else </p>

                    </div>
                    <div className="left-bottom">
                        <p>We are trusted by companies of all sizes.</p>
                        <div className="bottom-brands">
                            <img src={netflix} alt="Netflix"></img>
                            <img src={verizon} alt="Verizon"></img>
                            <img src={target} alt="target"></img>
                            <img src={netflix} alt="Netflix"></img>
                            <img src={verizon} alt="verizon"></img>

                        </div>

                    </div>

                </div>

                <div className="banner-inner right">
                    <img src={search} alt="Job Search"></img>

                </div>

                <div className="banner-inner bottom">
                    
                    <Jobsearch></Jobsearch>
                </div>
            </div>

        </div>
    )
}

export default Banner;