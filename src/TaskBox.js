import React from "react";
import "./TaskBox.css";

class TaskBox extends React.Component {
  handleDelete = e => {
    this.props.deleteTaskFunc(this.props.id);
  }
  handleCheck = e => {
    this.props.checkTaskFunc(this.props.id);
  }
  handleUndo = e => {
    this.props.undoTaskFunc(this.props.id);
  }
  render() {
    return (
      <div className={`col-md-6 card box ${this.props.completed ? "completed-box" : "incompleted-box"}`}>
        <div className="card-text">
          <p className="text-align">{this.props.text}</p>
          {this.props.completed ? <i className="fas fa-undo undo-icon" onClick={this.handleUndo} /> : <i className="check-icon fas fa-check" onClick={this.handleCheck} />}
          <i className="fas fa-trash-alt trash-icon" onClick={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default TaskBox;