import React, { Component } from "react";
import SignboardScreen from "./screens/SignboardScreen";
import { Switch, Route, withRouter } from "react-router-dom";
import "./css/App.css";
import Persons from "./screens/Persons";
import Socket from "socket.io-client";
import { SERVER_URL, PERSONS_LIST } from "./constants";
import SelectedPerson from "./screens/SelectedPerson";

const socket = Socket(SERVER_URL);

interface StateInf {
  list: Person[];
  selectedPerson: Person | null;
}

export interface Person {
  name: string;
  bulbs: number[];
  color?: string;
}

class App extends Component<any, StateInf> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      selectedPerson: null
    };
  }

  componentWillMount = () => {
    socket.on(
      PERSONS_LIST,
      (list: Person[]): void => {
        this.setState({
          list
        });
      }
    );
  };

  onPersonClick = (person: Person): void => {
    this.setState({
      selectedPerson: person
    });

    this.props.history.push("/sign");
  };

  render() {
    return (
      <div className="main">
        <Switch>
          <Route
            path="/sign"
            component={() => (
              <SignboardScreen
                person={this.state.selectedPerson}
                socket={socket}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => (
              <Persons onClick={this.onPersonClick} persons={this.state.list} />
            )}
          />
          <Route
            path="/person"
            component={() => (
              <SelectedPerson person={this.state.selectedPerson} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
