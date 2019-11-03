import React from "react";
import "./ItemsCount.css";

class ItemsCount extends React.Component {
  completedTask = 0;
  incompletedTask = 0;

  render() {
    return (
      <div>
        {this.props.completed ? <h4 id="title-container"><i>You have completed {this.props.count} task</i></h4> : <h4 id="title-container"><i>You have {this.props.count} incompleted task</i></h4>}
      </div>
    );
  }
}

export default ItemsCount;