import React from "react";
import DATA from "../MOCK_DATA.json";
import People from "./People";

export default class PeopleList extends React.Component {
  render() {
    return DATA.map((val) => {
      return (
        <People
          key={val.id}
          name={val.name}
          work={val.work}
          city={val.city}
          phone={val.phone}
          email={val.email}
        />
      );
    });
  }
}
