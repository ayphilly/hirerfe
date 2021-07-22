import "./profile.scss";
import profile from "../../../talentassets/profile_image.png";
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel";
import Textarea from "../../../../generals/inputs/textarea";
import { Singleprofile } from "../../../components/singleprofile/singleprofile";
import { Changepassword } from "../../../components/changepassword/changepassword";
import { Changeaccount } from "../../../components/changeaccountype/changeaccount";
import { Changeavailability } from "../../../components/changeavailability/changeavailability";
import { openProfile, closeProfile } from "../../../../helper";
import { useEffect, useState } from "react";
export const Profile = () => {
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    openProfile();
  });
  var setInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: [e.target.value] }, [inputs]);
  };

  return (
    <div className="user-profile-container" id="user-profile-container">
      <p>Profile</p>
      <div className="user-profile-inner">
        <div className="profile-picture-container">
          <div className="profile-picture-top">
            <p>Change Profile Picture</p>
            <p>Choose a new avatar to be used across Coven</p>
          </div>
          <div className="profile-picture-bottom">
            <img src={profile} alt="user profile" />
            <button>Upload New Picture</button>
            <a href="#dummy;ink" className="profile-picture-delete">
              Delete
            </a>
          </div>
        </div>

        <div className="personal-details-container">
          <p>Personal Details</p>
          <form>
            <Singleinputlabel
              type="text"
              label="Full Name"
              name="fullname"
              value="Ajibade Thomas"
              disabled={false}
              onChange={setInput}
            />

            <Singleinputlabel
              type="text"
              label="email"
              name="email"
              value="ajibadethomas@gmail.com"
              disabled={false}
              onChange={setInput}
            />
            <Singleinputlabel
              type="text"
              label="Phone Number"
              name="pnumber"
              value="+234811586199"
              disabled={false}
              onChange={setInput}
            />
            <Singleinputlabel
              type="text"
              label="Location"
              name="location"
              value="Lagos"
              disabled={false}
              onChange={setInput}
            />

            <Textarea
              type="text"
              label="Bio"
              name="bio"
              value="enter your bio"
              // width= {605}
            />
          </form>
        </div>

        <Singleprofile
          headline="Password"
          title="Update Your Password"
          subtitle="Change and reset your password"
          link="Change Your Password"
          className="c-password"
        ></Singleprofile>

        <Singleprofile
          headline="Availability"
          title="Set your available time"
          subtitle="set interviews to only available hours"
          link="Set Availability"
          className="c-availability"
        ></Singleprofile>

        <Singleprofile
          headline="Account Type"
          title="Set your account type"
          subtitle="set interviews to only available hours"
          link="Set Account Type"
          className="c-account"
        ></Singleprofile>

        <button className="save-changes">Save Changes</button>
      </div>

      <div className="c-passworddiv hidden">
        <Changepassword
          close={closeProfile}
          setInput={setInput}
        ></Changepassword>
      </div>
      <div className="c-accountdiv hidden">
        <Changeaccount close={closeProfile}></Changeaccount>
      </div>
      <div className="c-availabilitydiv hidden">
        <Changeavailability close={closeProfile}></Changeavailability>
      </div>
      <div className="overlay hidden"></div>
    </div>
  );
};
