import React from "react";

const UserProfileFields = () => {
  return (
    <>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          First Name
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="classic-input w-100" />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="lastName">
          Last Name
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="classic-input w-100" />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="location">
          Location
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="classic-input w-100" />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="email">
          Email
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="email" className="classic-input w-100" />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="phoneNumber">
          Phone Number
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="classic-input w-100" />
      </div>
      <p style={{ color: "gray" }}>
        By submitting the form with this box checked, I confirm that I am the
        subscriber and primary owner to the telephone number entered and I
        hereby consent to receive calls and/or texts and/or WhatsApp messages
        from Indeed and employers who use Indeed, including using automated call
        technology or recorded calls, at the telephone number provided above,
        including if this number is a wireless (cell phone) number.
      </p>
    </>
  );
};

export default UserProfileFields;
