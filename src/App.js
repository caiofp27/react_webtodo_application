import React from 'react';
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import Buttons from "./Buttons";
import ItemsCount from "./ItemsCount";
import TaskBox from "./TaskBox";
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      { text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: false, date: "2019-10-16", id: uuid() },
      { text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: false, date: "2019-10-17", id: uuid() },
      { text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: false, date: "2019-10-15", id: uuid() },
      { text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: true, date: "2019-10-20", id: uuid() },
      { text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: true, date: "2019-11-06", id: uuid() }
    ]
  }
  addTask = (taskText) => {
    let now = new Date();
    let today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    const newTask = {
      text: taskText,
      completed: false,
      date: today,
      id: uuid()
    };
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }
  render() {
    const completedTasks = this.state.tasks.filter(t => t.completed === true);
    const incompletedTasks = this.state.tasks.filter(t => t.completed === false);
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem addTaskFunc={this.addTask} />
        <section className="container">
          <ItemsCount completed={false} count={3} />
          <Buttons completed={false} />
          <div className="row">
            {incompletedTasks.map(item => {
            return <TaskBox key={item.id} text={item.text} date={item.date} completed={item.completed} />})}
          </div>
        </section>
        <section className="container">
          <ItemsCount completed count={2} />
          <Buttons completed />
          <div className="row">
            {completedTasks.map(item => {
            return <TaskBox key={item.id} text={item.text} date={item.date} completed={item.completed} />})}
          </div>
        </section>
      </section>
    );
  }
}

export default App;
