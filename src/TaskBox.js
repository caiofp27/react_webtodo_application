import React from "react";
import "./TaskBox.css";
import "./Buttons.css";

class TaskBox extends React.Component {
  render() {
    return (
      <div className={`col-md-3 card box ${this.props.completed ? "completed-box" : "incompleted-box"}`}>
        <div className="card-body">
          <p>{this.props.text}</p>
          {this.props.completed === false && <i className="list-icon fas fa-check" />}
          <i className="list-icon far fa-trash-alt trash-icon" />
        </div>
      </div>
    );
  }
}

export default TaskBox;