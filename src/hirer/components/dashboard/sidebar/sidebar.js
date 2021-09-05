import dashboard from "../../../hirerassets/dashboard.svg"
import chat from "../../../hirerassets/chat.svg"
import talents from "../../../hirerassets/talents.svg"
import jobs from "../../../hirerassets/suitcase.svg"
import account from "../../../hirerassets/account.svg"
import add from "../../../hirerassets/add.svg"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useEffect } from "react"
import "./sidebar.scss"

const bars = [
    {
        id: 1,
        image: add,
        name: 'Add Job',
        link:'postjob'
    },
    {
        id: 2,
        image: dashboard,
        name: 'Dashboard',
        link:'home'
    },
    {
        id: 3,
        image: chat,
        name: 'Messages',
        link:''
    },
    {
        id: 4,
        image: jobs,
        name: 'My Jobs',
        link:'myjobs'
    },
    {
        id: 5,
        image: talents,
        name: 'Talents',
        link:''
    },
    {
        id: 6,
        image: account,
        name: 'Account',
        link:'account'
    },
];
export const Sidebar = (props) => {
    const history = useHistory();
    var page = props.page;

    var chng = (e,link) => {
        e.preventDefault();
        var btnContainer = document.getElementById("sidebar-inner");
        var current = btnContainer.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        e.target.className += " active";
        history.push(`/dashboard/hirer/${link}`);
        
    }

    var sides = bars.map((side)=>  {
        return (
            <Singlebar
                key={side.id}
                image = {side.image}
                name ={side.name}
                link={side.link}
                click = {chng}
                page={page}
            />
        )
        }
    )

    return (
        <div className="sidebar-container">
            <div className="sidebar-inner" id="sidebar-inner">
                {sides}
            </div>
        </div>
    )
}

const Singlebar = (props) => {
    const history = useHistory();
    

    return (
        <div className="singlebar-container" onClick={(event)=> props.click(event,props.link)}>
            <div className="singlebar-inner" >
                <div className={`single-bar ${
                                    props.page == props.link ? 'active' : 
                                    props.page =='myjob' & props.link =='myjobs'? 'active': ''}`}> 
                    <img src={props.image}/>
                    <p>{props.name}</p>
                </div>
                
            </div>

        </div>
    )

}