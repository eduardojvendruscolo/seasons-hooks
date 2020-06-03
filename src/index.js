import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay.js";
import useLocationHook from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocationHook();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = (
      <div class="ui active dimmer">
        <div class="ui text loader">Accept the location access please!</div>
      </div>
    );
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
