import React from "react";
import "./App.css"

class AddItem extends React.Component {
  state = {
    newTaskText: ""
  }
  updateTaskText = (event) => {
    this.setState({
      newTaskText: event.target.value
    });
  }
  handleClick = (e) => {
    e.preventDefault();
    if(this.state.newTaskText === ""){
      alert("Please add a task first");
    }else{
      this.props.addTaskFunc(this.state.newTaskText);
      this.setState({
        newTaskText: "" 
      });
    }
  }
  render() {
    return (
      <section>
          <textarea 
            type="text"
            rows="4"
            className="col-12 form-control mr-2" 
            placeholder="Max length 70 characters"
            value={this.state.newTaskText}
            onChange={this.updateTaskText}
            maxLength="70"
          />       
        <button className="btn btn-block btn-primary btn-add" onClick={this.handleClick}>
            ADD TASK
        </button>
      </section>
    );
  }
}

export default AddItem;