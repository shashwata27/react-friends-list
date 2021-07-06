import React from "react";
import PeopleList from "../components/PeopleList";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>Your Friends List</div>
        <PeopleList />
      </div>
    );
  }
}
