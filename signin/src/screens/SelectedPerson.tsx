import React, { Component } from "react";
import { Person } from "./../App";
import { withRouter } from "react-router-dom";

interface SelectedPersonProps {
  person: Person;
  history: any;
}

class SelectedPerson extends Component<SelectedPersonProps, any> {
  componentWillMount = () => {
    if (!this.props.person) {
      this.props.history.push("/");
    }
  };

  render() {
    const { person } = this.props;
    return (
      <div>
        <h1>Signed in</h1>
        <h2>{person ? person.name : null}</h2>
      </div>
    );
  }
}

export default withRouter(SelectedPerson);
