import React from "react";
import "./ItemsCount.css";

class ItemsCount extends React.Component {
  render() {
    return (
      <div>
        {this.props.completed ?  <h4 id="title-container"><u>You have completed {this.props.count} task</u></h4> : <h4 id="title-container"><u>You have {this.props.count} incompleted task</u></h4>}
      </div>
    );
  }
}

export default ItemsCount;