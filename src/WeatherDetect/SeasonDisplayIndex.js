import SeasonDisplay from "./SeasonDisplay";
import LoadingScreen from "./LoadingScreen";
import React from "react";

class SeasonDisplayIndex extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <SeasonDisplay err={this.state.errorMessage} />;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <LoadingScreen message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SeasonDisplayIndex;
