import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Homepage from "./talent/pages/homepage/talent";
import { Dashboardhome } from "./talent/pages/dashboard/homepage/homepage";
import { Myjobs } from "./talent/pages/dashboard/myjobs/myjobs";
import { Account } from "./talent/pages/dashboard/account/account";
import { Searchjob } from "./talent/pages/searchjob/searchjob";
import { Searchtalent } from "./hirer/pages/searchtalents/searchtalent";
import Hirer from "./hirer/pages/homepage/hirer";
// import { Createjob } from "./hirer/pages/postjob/createjob";
import Footer from "./generals/footer";
import { Signin } from "./generals/signin/signin";
import { Error } from "./generals/error/error";
import Talentnav from "./talent/components/navbar";
import Dashboardnav from "./talent/components/dashboardnavbar/dashboardnav";
import Hirernav from "./hirer/components/navbar/navbar";
import Createaccount from "./generals/createaccount/createaccount";
import Forgotpassword from "./generals/pages/resetpassword/forgotpassword";
import Changeoldpassword from "./generals/pages/resetpassword/changeoldpassword";
import { Jobdescription } from "./generals/pages/jobdescription/jobdescription";
import { Redirect } from "./generals/pages/redirection/redirect";
import { Auth } from "./generals/pages/auth/auth";
import { closePage } from "./helper";
import PostJob from "./hirer/pages/PostJob";
import CreateProfile from "./talent/CreateProfile";
import { Talentprofile } from "./hirer/pages/talentprofile/talentprofile";
import { Notification } from "./talent/pages/notification/notification";
import DashboardSide from "./talent/pages/DashboardSide";
import Accountverification from "./generals/verifyaccount/accountverification";

import { Review } from "./talent/pages/review/review";
import { Jobresult } from "./talent/pages/searchjob/jobresults";
import { CustomRoute } from "./customRoute";
import Register from "./generals/createaccount/register";
import { Home } from "./hirer/pages/dashboard/home";
import Hirerdashnav from "./hirer/components/dashboard/navbar/dashboardnavbar";
import { Profiletalent } from "./talent/pages/dashboard/talentProfile/talentprofile";
const TalentWithNavbar = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Talentnav {...routeProps} />
            <Component {...routeProps} />{" "}
          </>
        );
      }}
    />
  );
};

const HirerWithNavbar = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Hirernav {...routeProps} />
            <Component {...routeProps} />{" "}
          </>
        );
      }}
    />
  );
};

const HirerDashWithNavbar = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Hirerdashnav {...routeProps} />
            <Component {...routeProps} />{" "}
          </>
        );
      }}
    />
  );
};


const DashboardWithNavbar = ({
  exact,
  path,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Dashboardnav {...routeProps} />
            <Component {...routeProps} />{" "}
          </>
        );
      }}
    />
  );
};

function App() {
  
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" render = { (props)=> <Homepage {...props} closePage={closePage} openPage ={openPage}/> }   />
        <Route path="/searchjob" component={Searchjob} />  */}

        {/* Verify User Email */}
        <Route path={`/verifyemail`}>
          <Accountverification />
        </Route>

        <Route path="/forgotpassword" component={Forgotpassword} />
        <Route
          path="/resetpassword/:token/:hash"
          component={Changeoldpassword}
        />

        <TalentWithNavbar exact path="/" component={Homepage} />
        <TalentWithNavbar
          exact
          path="/talent/searchjob"
          component={Jobresult}
        />
        <HirerWithNavbar
          exact
          path="/talent/createprofile"
          component={CreateProfile}
        />

        <TalentWithNavbar
          exact
          path="/talent/jobdescription"
          component={Jobdescription}
        />
        <TalentWithNavbar
          exact
          path="/talent/notification"
          component={Notification}
        />

        {/* <Route path="/hirer" render = { (props)=> <Hirer {...props} closePage={closePage} openPage ={openPage}/> } /> 
        <Route path="/postjob" component={Createjob} /> 
        <Route path="/searchtalent" component={Searchtalent} />  */}

        <HirerWithNavbar exact path="/hirer" component={Hirer} />
        <HirerWithNavbar exact path="/hirer/postjob" component={PostJob} />
        <HirerWithNavbar
          exact
          path="/hirer/searchtalent"
          component={Searchtalent}
        />
        <HirerWithNavbar
          exact
          path="/hirer/talentprofile"
          component={Talentprofile}
        />
        <HirerDashWithNavbar
          exact
          path="/dashboard/hirer/:page"
          component={Home}
        />
       

        <Route exact path="/createaccount" component={Register} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Redirect} />
        <Route path="/auth" component={Auth} />

        {/* Dashboard Talent */}

        <DashboardWithNavbar
          exact
          path="/dashboard/talent/home"
          component={Dashboardhome}
        />
       
       <DashboardWithNavbar
          exact
          path="/dashboard/talent/myjobs"
          component={Myjobs}
        />
        <DashboardWithNavbar
          exact
          path="/dashboard/talent/profile"
          component={Profiletalent}
        />
        
         {/* <DashboardWithNavbar
          exact
          path="/dashboard/talent/account"
          component={Account}
        /> */}
        {/* <DashboardWithNavbar
          exact
          path="/dashboard/company"
          component={Review}
        /> */}

        {/* Only logged in talent can access routes */}
         {/* <CustomRoute
          condition="talent"
          exact
          path="/dashboard/talent/home"
          component={Dashboardhome}
        />
        <CustomRoute
          condition="talent"
          exact
          path="/dashboard/talent/myjobs/:id"
          component={Myjobs}
        /> */}
        
        <CustomRoute
          condition="talent"
          exact
          path="/dashboard/talent/account"
          component={Account}
        />
        <CustomRoute
          condition="talent"
          exact
          path="/dashboard/talent/company"
          component={Review}
        />

        {/* Hirer Dashboard links */}
        {/* <CustomRoute
          condition="hirer"
          exact
          path="/hirer/dashboard/:page"
          component={Home}
        />
        */}
        <DashboardWithNavbar
          exact
          path="/dashboard/hirer"
          component={DashboardSide}
        />


        <Route component={Error} />
      </Switch>
      <div className="overlay hidden"></div>
      <Createaccount closePage={closePage}></Createaccount>

      <Footer></Footer>
    </div>
  );
}

export default App;
