import React from 'react';
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import ItemsCount from "./ItemsCount";
import TaskBox from "./TaskBox";
import Moment from "moment";
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
    const newTask = {
      text: taskText,
      completed: false,
      date: Moment().format('YYYY-MM-DD'),
      id: uuid()
    };
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }
  deleteTask = id => {
    const filterTask = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks: filterTask
    });
  }
  checkTask = id => {
    const checkTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.completed = true;
      }
      return task;
    });
    this.setState({
      tasks: checkTask
    });
  }
  undoTask = id => {
    const undoTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.completed = false;
      }
      return task;
    });
    this.setState({
      tasks: undoTask
    });
  }
  render() {
    const completedTasks = this.state.tasks.filter(t => t.completed === true);
    const incompleteTasks = this.state.tasks.filter(t => t.completed === false);
    const countCompleted = completedTasks.length;
    const countIncompleted = incompleteTasks.length;
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem addTaskFunc={this.addTask} />
        <section className="container">
          <ItemsCount completed={false} count={countIncompleted} />
          <div className="row">
            {incompleteTasks.map(item => {
            return <TaskBox key={item.id} text={item.text} date={item.date} completed={item.completed} deleteTaskFunc={this.deleteTask} checkTaskFunc={this.checkTask} undoTaskFunc={this.undoTask} id={item.id} />})}
          </div>
        </section>
        <section className="container">
          <ItemsCount completed count={countCompleted} />
          <div className="row">
            {completedTasks.map(item => {
            return <TaskBox key={item.id} text={item.text} date={item.date} completed={item.completed} deleteTaskFunc={this.deleteTask} checkTaskFunc={this.checkTask} undoTaskFunc={this.undoTask} id={item.id} />})}
          </div>
        </section>
      </section>
    );
  }
}

export default App;
