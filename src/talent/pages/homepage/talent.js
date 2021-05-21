import "./talent.scss"
import Talentnav from "../../components/navbar"
import Banner from "../../components/banner"
import Popular from "../../components/popular"
import Howitworks from "../../../generals/howitworks/howitworks"
import Feedback from "../../components/feedback/feedback"
import Tryhirer from "../../components/tryhirer/tryhirer"
import Topjobs from "../../components/topjobs/topjobs"
import {workList} from "../../constants"

import job from "../../talentassets/jobs.svg"
import review from "../../talentassets/review.svg"
import boost from "../../talentassets/boost.svg"
import suitcase from "../../talentassets/suitcase.svg"
import Createaccount from "../../../generals/createaccount/createaccount"
import {useEffect} from "react";
import {openPage, closePage} from "../../../helper"

const Homepage = (props) => {
    var images = [job, review, boost, suitcase]

    useEffect(()=> {
        openPage();
    })
    return (
        <div className="talent-homepage">
            {/* <Talentnav></Talentnav> */}
            <Banner></Banner>
            <Popular></Popular>
            <Howitworks
                worklist= {workList}
                images ={images}
            
            ></Howitworks>
            <Feedback></Feedback>
            <Topjobs></Topjobs>
            <Tryhirer
                title="Try Hirer Now!"
                subtitle="Start applying for jobs in just 30 minutes"
            ></Tryhirer>
            
        </div>
    )

}

export default Homepage;