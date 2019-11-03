import React from "react";

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
      <section className="container">
        <form className="form-inline justify-content-center">
          <input 
            type="text" 
            className="col-6 form-control mr-2" 
            placeholder="New task"
            value={this.state.newTaskText}
            onChange={this.updateTaskText}
            maxLength="70"
          />
          <button className="btn btn-sm btn-primary" onClick={this.handleClick}>
            ADD
          </button>
        </form>
      </section>
    );
  }
}

export default AddItem;