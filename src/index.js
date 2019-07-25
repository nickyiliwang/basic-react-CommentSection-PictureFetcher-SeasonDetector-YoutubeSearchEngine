import React from "react";
import ReactDOM from "react-dom";
import YoutubeFetcher from "./YoutubeFetcher/YoutubeFetcherIndex";
import CommentSection from "./CommentSection/CommentIndex";
import PictureFetcher from "./PictureFetcher/PictureFetcherIndex";
import WeatherDetect from "./WeatherDetect/SeasonDisplayIndex";

class App extends React.Component {
  render() {
    return (
      <div>
        <YoutubeFetcher />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
