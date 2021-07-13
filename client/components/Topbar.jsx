import React from "react";
import css from "./styles/TopbarStyles.css";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="topbar">
        <h3>Your Score</h3>
        <h3>today's date</h3>
        <h3>Your record</h3>
      </div>
    );
  }
}

export default Topbar;
