import React from "react";
import PeopleList from "./PeopleList";

const HomePage = () => {
  return (
    <div className="page">
      <div className="heading">Your Friends List</div>
      <div className="subHeading">Find all your added friends here.</div>
      <hr />
      <PeopleList />
    </div>
  );
};

export default HomePage;
