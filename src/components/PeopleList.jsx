import React from "react";
import DATA from "../MOCK_DATA.json";
import People from "./People";

export default class PeopleList extends React.Component {
  state = { DATA };

  handleDeleteItem = (id) => {
    const newState = this.state.DATA.filter((item) => id !== item.id);
    this.setState({ DATA: newState });
  };

  handleImportantItem = (id) => {
    const newState = this.state.DATA.filter((item) => {
      if (id === item.id) {
        item.important = true;
      }
      return item;
    });
    this.setState({ DATA: newState });
  };

  render() {
    return this.state.DATA.map((val) => {
      const details = {
        name: val.name,
        work: val.work,
        city: val.city,
        phone: val.phone,
        email: val.email,
      };
      return (
        <People
          key={val.id}
          id={val.id}
          details={details}
          deleteFunc={this.handleDeleteItem}
          importantFunc={this.handleImportantItem}
        />
      );
    });
  }
}
