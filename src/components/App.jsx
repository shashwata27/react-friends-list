import React from "react";
import PeopleList from "./PeopleList";
import AddFriendPage from "./AddFriend";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = { HomeVisible: "invisible", AddFriendVisible: "" };

  handelVisibility = () => {
    this.state.HomeVisible === ""
      ? this.setState({ HomeVisible: "invisible" })
      : this.setState({ HomeVisible: "" });
    this.state.AddFriendVisible === ""
      ? this.setState({ AddFriendVisible: "invisible" })
      : this.setState({ AddFriendVisible: "" });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <nav>
            <ul>
              <li className={this.state.HomeVisible}>
                <Link to="/">
                  <button onClick={this.handelVisibility}>Home</button>
                </Link>
              </li>
              <li className={this.state.AddFriendVisible}>
                <Link to="/addFriend">
                  <button onClick={this.handelVisibility}>Add Friend</button>
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/addFriend">
              <AddFriend />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
const Home = () => {
  return (
    <div className="page">
      <div className="heading">Your Friends List</div>
      <div className="subHeading">Find all your added friends here.</div>
      <hr />
      <PeopleList />
    </div>
  );
};
const AddFriend = () => {
  return (
    <div className="page">
      <AddFriendPage />
    </div>
  );
};
