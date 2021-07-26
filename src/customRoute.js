import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboardnav from "./talent/components/dashboardnavbar/dashboardnav";
import Hirerdashnav from "./hirer/components/dashboard/navbar/dashboardnavbar";

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

export const CustomRoute = props => {
  const [returnedRoute, setReturnedRoute] = useState("");
  const user = useSelector((state) => state.auth.authData);
  useEffect(() => {
    switch (props.condition) {
      case "talent":
        return setReturnedRoute(
          user.role === "talent" ? (
            // <Route {...props} />
            <DashboardWithNavbar
                exact
                path={props.path}
                component = {props.component}
                // component={Dashboardhome}
            />
          ) : (
            <Redirect to="/signin" />
          )
        );
      case "hirer":
        return setReturnedRoute(
         user.role === "hirer" ? (
            <HirerDashWithNavbar
                exact
                path={props.path}
                component = {props.component}
                // component={Dashboardhome}
            />
          ) : (
            <Redirect to="/signin" />
          )
        );
    //   case "signedIn":
    //     return setReturnedRoute(
    //       props.user.isSignedIn ? <Route {...props} /> : <Redirect to="/index" />
    //     );
      default:
        return setReturnedRoute(<Route {...props} />);
    }
  }, [props.user]);
  return <>{returnedRoute}</>;
};

const mapStateToProps = state => ({
  user: state.userReducer
});
