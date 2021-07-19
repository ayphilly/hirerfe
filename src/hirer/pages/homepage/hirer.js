import "./hirer.scss";

import { workList } from "../../constants";
import quality from "../../hirerassets/quality.svg";
import visibility from "../../hirerassets/visibility.svg";
import perfect from "../../hirerassets/perfect.svg";
import payroll from "../../hirerassets/payroll.svg";

<<<<<<< HEAD
import Hirernav from "../../components/navbar/navbar"
import Banner from "../../components/banner/banner"
import Savetime from "../../components/backed/savetime"
import Personalized from "../../components/personalized/personalized"
// import Feedback from "../../components/feedback/feedback"
import Feedback from "../../../talent/components/feedback/feedback"
import Postajob from "../postjob/postajob"
import Howitworks from "../../../generals/howitworks/howitworks"
import Createaccount from "../../../generals/createaccount/createaccount"
import {useEffect} from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import {openPage, closePage} from "../../../helper"
=======
import Hirernav from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import Savetime from "../../components/backed/savetime";
import Personalized from "../../components/personalized/personalized";
import Feedback from "../../components/feedback/feedback";
import Howitworks from "../../../generals/howitworks/howitworks";
import { useEffect } from "react";
import { openPage } from "../../../helper";
>>>>>>> 8007ad382bd7a9f787874a8bad72b6ebfd55e456

const Hirer = (props) => {
  var images = [quality, visibility, perfect, payroll];

  useEffect(() => {
    openPage();
  });
  return (
    <div className="hirer-homepage">
      {/* <Hirernav></Hirernav> */}
      <Banner></Banner>

      <Howitworks worklist={workList} images={images}></Howitworks>
      <Personalized></Personalized>
      <Feedback></Feedback>
      <Savetime></Savetime>
      {/* <div className="overlay hidden"></div>
            <Createaccount closePage={closePage}></Createaccount> */}
      {/* <Postajob></Postajob> */}
    </div>
  );
};

export default Hirer;
