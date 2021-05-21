import logo from './logo.svg';
import './App.scss';
import {Route, Switch } from 'react-router-dom';
import Homepage from "./talent/pages/homepage/talent"
import {Dashboardhome} from "./talent/pages/dashboard/homepage/homepage"
import {Myjobs} from "./talent/pages/dashboard/myjobs/myjobs"
import {Profile} from "./talent/pages/dashboard/profile/profile"
import {Searchjob} from "./talent/pages/searchjob/searchjob"
import {Searchtalent} from "./hirer/pages/searchtalents/searchtalent"
import Hirer from "./hirer/pages/homepage/hirer"
import {Createjob} from "./hirer/pages/postjob/createjob"
import Footer from "./generals/footer"
import {Signin} from "./generals/signin/signin"
import Talentnav  from "./talent/components/navbar"
import Dashboardnav  from "./talent/components/dashboardnavbar/dashboardnav"
import Hirernav from "./hirer/components/navbar/navbar"
import Createaccount from "./generals/createaccount/createaccount"
import {closePage} from "./helper"
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

const TalentWithNavbar = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
     return <><Talentnav {...routeProps}/><Component {...routeProps}/> </>
  }}
  />
}

const HirerWithNavbar = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
     return <><Hirernav {...routeProps}/><Component {...routeProps}/> </>
  }}
  />
}

const DashboardWithNavbar = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
     return <><Dashboardnav {...routeProps}/><Component {...routeProps}/> </>
  }}
  />
}

function App() {
  
  

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" render = { (props)=> <Homepage {...props} closePage={closePage} openPage ={openPage}/> }   />
        <Route path="/searchjob" component={Searchjob} />  */}
        <TalentWithNavbar exact path='/' component={Homepage} />
        <TalentWithNavbar exact path='/talent/searchjob' component={Searchjob} />

        {/* <Route path="/hirer" render = { (props)=> <Hirer {...props} closePage={closePage} openPage ={openPage}/> } /> 
        <Route path="/postjob" component={Createjob} /> 
        <Route path="/searchtalent" component={Searchtalent} />  */}

        <HirerWithNavbar exact path='/hirer' component={Hirer} />
        <HirerWithNavbar exact path="/hirer/postjob" component={Createjob} />
        <HirerWithNavbar exact path="/hirer/searchtalent" component={Searchtalent} />

        <Route path="/signin" component={Signin} /> 
        
        {/* Dashboard Talent */}

        <DashboardWithNavbar exact path="/dashboard" component={Dashboardhome}/>
        <DashboardWithNavbar exact path="/dashboard/myjobs" component={Myjobs}/>
        <DashboardWithNavbar exact path="/dashboard/profile" component={Profile}/>
        
        {/* <Route component={Error} /> */}
      </Switch>
      <div className="overlay hidden"></div>
      <Createaccount closePage={closePage}></Createaccount>

      <Footer></Footer>
    </div>
  );
}

export default App;
