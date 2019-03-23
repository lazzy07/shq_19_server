import React, { Component } from "react";
import "../css/SignboardScreen.css";
import {
  GLOW_COLOR_2,
  DEFAULT_GLOW_COLOR,
  DEFAULT_COLOR,
  LIGHT_LAMP
} from "../constants";
import SignatureCanvas from "react-signature-canvas";
import { Person } from "./../App";
import { withRouter } from "react-router-dom";
import { Icon } from "react-materialize";

interface propTypes {
  socket: SocketIOClient.Socket;
  person: Person;
  history: any;
}

class SignboardScreen extends Component<propTypes, any> {
  sigCanvas: any;
  constructor(props) {
    super(props);

    this.sigCanvas = null;
    this.state = {
      undo: false
    };
  }

  componentWillMount = () => {
    if (!this.props.person) {
      this.props.history.push("/");
    }
  };

  renderUndo = () => {
    if (this.sigCanvas) {
      if (!this.sigCanvas.isEmpty()) {
        this.setState({
          undo: true
        });
      } else {
        this.setState({
          undo: false
        });
      }
    }
    this.setState({
      undo: true
    });
  };

  lightLamp = () => {
    this.props.socket.emit(LIGHT_LAMP, this.props.person);
    this.props.history.push("/person");
  };

  render() {
    return (
      <div
        className="signBoard"
        style={{
          overflow: "hidden",
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
        <div style={{ paddingLeft: "10px", position: "fixed" }}>
          <h5>Computer Science and Statistics Department</h5>
          <h6 style={{ fontWeight: "bolder" }}>SHQ 2K19</h6>
          <h5 onClick={() => this.props.history.push("/")}> {"<"} Back</h5>
        </div>
        <div style={{ position: "fixed", right: 10, top: 10 }}>
          <h5>Welcome,</h5>
          <h4>{this.props.person ? this.props.person.name : null}</h4>
        </div>
        <div style={{ position: "fixed", left: 10, bottom: 10 }}>
          <h5>Please Sign Here</h5>
        </div>
        <div
          onClick={this.lightLamp}
          style={{ position: "fixed", bottom: 10, right: 40, padding: 10 }}
        >
          <h4>Done ></h4>
        </div>

        {this.state.undo ? (
          <div
            onClick={this.sigCanvas ? this.sigCanvas.clear : null}
            style={{ position: "fixed", bottom: 5, left: "50%" }}
          >
            <Icon>undo</Icon>
            <h6>Undo</h6>
          </div>
        ) : null}

        <div
          className="sigCanvClass"
          style={{ width: window.screen.width, height: window.screen.height }}
        >
          <SignatureCanvas
            ref={ref => {
              this.sigCanvas = ref;
            }}
            onBegin={() => this.renderUndo()}
            backgroundColor={DEFAULT_COLOR}
            penColor="#fff"
            canvasProps={{
              width: window.screen.width,
              height: window.screen.height,
              className: "sigCanvas"
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SignboardScreen);
