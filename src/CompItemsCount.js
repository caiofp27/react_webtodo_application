import React from "react";
import "./ItemsCount.css";

class CompItemsCount extends React.Component {
  render() {
    return (
      <h4 id="title-container"><u>You have completed {this.props.count} task</u></h4>
    );
  }
}

export default CompItemsCount;