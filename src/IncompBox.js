import React from "react";
import "./IncompBox.css";
import "./Buttons.css";

class IncompBox extends React.Component {
  render() {
    return (
      <div className="col-md-3 card box">
        <div className="card-body">
          <p>{this.props.text}</p>
          <a href="a" className="fas fa-check" />
          <a href="a" className="far fa-trash-alt trash-icon" />
        </div>
      </div>
    );
  }
}

export default IncompBox;