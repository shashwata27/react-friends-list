import React from "react";

export default class People extends React.Component {
  state = {
    name: this.props.name,
    work: this.props.work,
    city: this.props.city,
    phone: this.props.phone,
    email: this.props.email,
    visible: "",
    important: "",
  };
  handelDelete = () => {
    this.setState({ visible: "invisible" });
  };
  handelImportant = () => {
    this.state.important === ""
      ? this.setState({ important: "important" })
      : this.setState({ important: "" });
  };
  render() {
    return (
      <div className={`li ${this.state.visible} ${this.state.important}`}>
        <div>{this.state.name}</div>
        <div>{`${this.state.work}, ${this.state.city}`}</div>
        <div>{`${this.state.phone}     ${this.state.email}`}</div>
        <button onClick={this.handelImportant}>Important</button>
        <button onClick={this.handelDelete}>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}