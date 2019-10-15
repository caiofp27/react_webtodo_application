import React from "react";
import "./CompBox.css";
import "./Buttons.css";

class CompBox extends React.Component {
  render() {
    return (
      <div className="col-md-3 card box box-completed">
        <div className="card-body">
          <p>{this.props.text}</p>
          <a href="a" className="list-icon fas fa-check trash-icon" />
        </div>
      </div>
    );
  }
}

export default CompBox;