import { useState, useEffect } from "react"
import {useParams} from "react-router-dom";
import { Showcontainer } from "../../components/dashboard/showcontainer"
import { Sidebar } from "../../components/dashboard/sidebar/sidebar";
import { get } from "../../../requests";
import { useSelector, useDispatch } from "react-redux";
import { setDashboard } from "../../../slices/companySlice";
import { Loading } from "../../../generals/loading/loading";
import "./home.scss"


export const Home = () => {

    const [step, navigation] = useState(0)
    let { page } = useParams();
    const [data, setData] = useState({})
    const [load, setLoad] = useState(true)
    const dispatch = useDispatch()

    var next = ()=> {
        navigation(step => step +1 );
    }



    var getEmpData = async () => {
        try {
            const {data} = await get(`/v1/employer/dashboard`);
            setData(data);
            dispatch(setDashboard(data));
            setLoad(false)
            return data;
        } catch (err) {
            console.log(err.message);
            setLoad(false)
        }
    }
    
   
    useEffect(()=> {
        getEmpData();
    }, [])

    const props = {next, step, page};
    if (load) {
        return (
            <div className="hirer-home-container">
            <div className="hirer-home-inner">
                <div className="hirer-home-inner left" >
                    <Sidebar {...props}></Sidebar>
                </div>
                <div className="hirer-home-inner load" >
                    <Loading></Loading>
                </div>
            </div>

        </div>
        )
    }
    else {
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
    
}