import { useState, useEffect } from "react"
import {useParams} from "react-router-dom";
import { Showcontainer } from "../../components/dashboard/showcontainer"
import { Sidebar } from "../../components/dashboard/sidebar/sidebar";
import "./home.scss"


export const Home = () => {

    const [step, navigation] = useState(0)
    let { page } = useParams();

    var next = ()=> {
        navigation(step => step +1 );
    }
    

    const props = {next, step, page};

    return (
        <div className="hirer-home-container">
            <div className="hirer-home-inner">
                <div className="hirer-home-inner left" >
                    <Sidebar {...props}></Sidebar>
                </div>
                <div className="hirer-home-inner right" >
                    <Showcontainer {...props}></Showcontainer>
                </div>
            </div>

        </div>
    )
}