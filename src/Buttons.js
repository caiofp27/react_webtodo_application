import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <i className="list-icon far fa-dot-circle"> Select All</i>
        <i className="list-icon far fa-trash-alt trash-icon"> Delete</i>
        {this.props.completed === false && <i className="list-icon fas fa-check trash-icon"> Complete </i>}
      </div>
    );
  }
}

export default Buttons;