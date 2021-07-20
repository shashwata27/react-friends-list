import React from "react";
import HomePage from "./HomePage";
import AddFriendPage from "./AddFriendPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class MyRouter extends React.Component {
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
            <AddFriendPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
