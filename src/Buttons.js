import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <a href="a" className="list-icon far fa-dot-circle"> Select All</a>
        <a href="a" className="list-icon far fa-trash-alt trash-icon"> Delete</a>
        <a href="a" className="list-icon fas fa-check trash-icon"> Complete </a>
      </div>
    );
  }
}

export default Buttons;