import React from "react";
import MyRouter from "./Router";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MyRouter />
      </div>
    );
  }
}
