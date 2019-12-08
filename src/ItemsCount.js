import React from "react";
import "./TaskBox.css";

class ItemsCount extends React.Component {
  completedTask = 0;
  incompletedTask = 0;
  render() {
    return (
      <div>
        {this.props.completed ? <h4 className="title-container completed"><i>Completed tasks: {this.props.count}</i></h4> : <h4 className="title-container"><i>Incomplete task: {this.props.count}</i></h4>}
      </div>
    );
  }
}

export default ItemsCount;