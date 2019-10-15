import React from "react";
import "./ItemsCount.css";

class IncompItemsCount extends React.Component {
  render() {
    return (
      <h4 id="title-container"><u>You have {this.props.count} incompleted task</u></h4>
    );
  }
}

export default IncompItemsCount;