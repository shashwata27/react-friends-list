import React from "react";

export default class AddFriend extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">Add Friend</div>
        <div className="subHeading">Add your friend details.</div>
        <hr />
        <form action="/">
          <fieldset>
            <legend>Basic Details</legend>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <br />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <br />
            <input type="text" placeholder="Location" />
          </fieldset>
          <fieldset>
            <legend>Professional</legend>
            <input type="text" placeholder="Designation" />
            <input type="text" placeholder="Company" />
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
