import "./singleprofile.scss";

export const Singleprofile = (props) => {
  return (
    <div className="profile-details-container">
      <p>{props.headline}</p>
      <div className="profile-information">
        <div className="profile-information-inner">
          <p>{props.title}</p>
          <p> {props.subtitle}</p>
        </div>
        <a href={() => false} className={`change-profile ${props.className}`}>
          {props.link}
        </a>
      </div>
    </div>
  );
};
