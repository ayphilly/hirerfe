import "./singlefeedback.scss";
import quote from "../../hirerassets/quote.svg";
import profile from "../../hirerassets/profile.png";
const Singlefeed = () => {
  return (
    <div className="singlefeed-container">
      <div className="singlefeed-inner">
        <div className="singlefeed-inner left">
          <img src={profile} alt="Profile Picture" />
        </div>
        <div className="singlefeed-inner right">
          <p>
            After being laid off due to COVID-19, I wasn't sure what would
            happen. Then, Shisi found my profile on Hirer and recruited me. I'm
            starting at a company with fantastic people who are doing really
            interesting things with technology in their space.
          </p>
          <div className="bottom">
            <p>Dapo,</p>
            <p>Hired by Softcom</p>

            <img src={quote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlefeed;
