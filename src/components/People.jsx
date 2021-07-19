import React from "react";
import bussinessIcon from "../icons/team-leader.svg";
export default class People extends React.Component {
  state = {
    visible: "",
    important: "",
  };

  handelDelete = () => {
    this.props.deleteFunc(this.props.id);
    // this.setState({ visible: "invisible" });
  };
  handelImportant = () => {
    this.props.importantFunc(this.props.id);
    this.state.important === ""
      ? this.setState({ important: "important" })
      : this.setState({ important: "" });
  };

  render() {
    const { name, work, city, phone, email } = this.props.details;
    return (
      <div className={`li ${this.state.visible} ${this.state.important}`}>
        <div className="liName">
          <span>{name}</span>
        </div>
        <div>
          <img src={bussinessIcon} alt="Bussiness Icon" />
          {`${work}, ${city}`}
        </div>
        <div className="personalInfo">{`${phone}     ${email}`}</div>
        <div className="buttons">
          <button onClick={this.handelImportant}>Important</button>
          <button onClick={this.handelDelete}>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}
