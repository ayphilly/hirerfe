import "./personalized.scss";
import Step from "./step";

import { personal } from "../../constants";
const Personalized = () => {
  var personalized = personal.map((persona) => {
    return (
      <Step
        key={persona.icao}
        number={persona.number}
        title={persona.title}
        subtitle={persona.subtitle}
      ></Step>
    );
  });
  return (
    <div className="personalized-container">
      <div className="personalized-innner-col">
        <div className="personalized-inner-top">
          <p> Begin your personalized experience in 3,2,1…</p>
          <p className="personalized-subtitle">
            {" "}
            Sign up in minutes and take your financial partner wherever you go,
            wherever you spend..{" "}
          </p>

          <div className="personalized-list">{personalized}</div>
        </div>
      </div>
    </div>
  );
};

export default Personalized;
