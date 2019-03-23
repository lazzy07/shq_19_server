import React, { Component } from "react";
import "../css/SignboardScreen.css";
import { GLOW_COLOR_2, DEFAULT_GLOW_COLOR } from "../constants";
import { Person } from "./../App";

interface PropTypes {
  persons: Person[];
  onClick: (person: Person) => void;
}

export default class Persons extends Component<PropTypes, any> {
  renderPersons = (list: Person[]): JSX.Element[] => {
    return list.map((person, index) => {
      return (
        <div
          key={index}
          style={{
            textAlign: "center",
            width: "40%",
            padding: "10px",
            margin: "30px",
            borderRadius: "10px",
            boxShadow: `0 0 5px ${DEFAULT_GLOW_COLOR},
            0 0 10px ${DEFAULT_GLOW_COLOR},
            0 0 20px ${DEFAULT_GLOW_COLOR}`
          }}
        >
          <h5
            style={{
              textShadow: `0 0 5px ${DEFAULT_GLOW_COLOR},
            0 0 10px ${DEFAULT_GLOW_COLOR},
            0 0 20px ${DEFAULT_GLOW_COLOR}`
            }}
            onClick={() => this.props.onClick(person)}
          >
            {person.name}
          </h5>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3
            className="signBoard"
            style={{
              textShadow: `0 0 5px ${GLOW_COLOR_2},
              0 0 10px ${GLOW_COLOR_2},
              0 0 20px ${GLOW_COLOR_2},
              0 0 40px ${DEFAULT_GLOW_COLOR},
              0 0 80px ${DEFAULT_GLOW_COLOR},
              0 0 90px ${DEFAULT_GLOW_COLOR},
              0 0 100px ${DEFAULT_GLOW_COLOR},
              0 0 150px ${DEFAULT_GLOW_COLOR}`
            }}
          >
            Please select your name
          </h3>
        </div>
        <div
          className="name_content"
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {this.renderPersons(this.props.persons)}
        </div>
        <div style={{ position: "fixed", bottom: 10, left: 10 }}>
          Computer Science and Statistics <br />
          SHQ 2K19
        </div>
      </div>
    );
  }
}
