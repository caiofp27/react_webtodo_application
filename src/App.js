import React from 'react';
import AddItem from "./AddItem";
import ItemsCount from "./ItemsCount";
import TaskBox from "./TaskBox";
import axios from "axios";
import './App.css';

class App extends React.Component {
  state = {
    tasks: []
  }
  componentDidMount(){
    axios.get('https://7il2iqr3w7.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then((response) => {
      this.setState({
        tasks: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
  addTask = (text) => {
    const newTask = {
      taskText: text,
      completed: false
    };
    axios.post('https://7il2iqr3w7.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
    .then((response) => {
      newTask.taskId = response.data.insertId;
      const tasksCopy = this.state.tasks.slice();
      tasksCopy.push(newTask);
      this.setState({
        tasks: tasksCopy
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  deleteTask = id => {
    const url = "https://7il2iqr3w7.execute-api.eu-west-2.amazonaws.com/dev/tasks";
    axios.delete(`${url}/${id}`)
    .then((response) => {
      console.log(response);
      const filterTask = this.state.tasks.filter(task => {
        return task.taskId !== id;
      });
      this.setState({
        tasks: filterTask
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  checkTask = id => {
    const checkTasks = this.state.tasks;
    let selectedTask = {};
    checkTasks.forEach(task => {
      if(task.taskId === id){
        task.completed = true;
        selectedTask = task;
      }
    });
    const url = "https://7il2iqr3w7.execute-api.eu-west-2.amazonaws.com/dev/tasks";
    axios.put(`${url}/${id}`, selectedTask)
    .then((response) => {
      console.log(response);
      this.setState({
        tasks: checkTasks 
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  undoTask = id => {
    const undoTasks = this.state.tasks;
    let selectedTask = {};
    undoTasks.forEach(task => {
      if(task.taskId === id){
        task.completed = false;
        selectedTask = task;
      }
    });
    const url = "https://7il2iqr3w7.execute-api.eu-west-2.amazonaws.com/dev/tasks";
    axios.put(`${url}/${id}`, selectedTask)
    .then((response) => {
      console.log(response)
      this.setState({
        tasks: undoTasks
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    const completedTasks = this.state.tasks.filter(task => task.completed);
    const incompleteTasks = this.state.tasks.filter(task => !task.completed);
    const countCompleted = completedTasks.length;
    const countIncompleted = incompleteTasks.length;
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem addTaskFunc={this.addTask} />
        <section className="container">
          <ItemsCount completed={false} count={countIncompleted} />
          <div className="row">
            {incompleteTasks.map(itemIn => {
              return <TaskBox
                key={itemIn.taskId} 
                text={itemIn.taskText}  
                completed={itemIn.completed} 
                deleteTaskFunc={this.deleteTask} 
                checkTaskFunc={this.checkTask} 
                undoTaskFunc={this.undoTask} 
                id={itemIn.taskId}
              />
            })}
          </div>
        </section>
        <section className="container">
          <ItemsCount completed count={countCompleted} /> 
          <div className="row">
            {completedTasks.map(itemCo => {
              return <TaskBox key={itemCo.taskId} text={itemCo.taskText} completed={itemCo.completed} deleteTaskFunc={this.deleteTask} checkTaskFunc={this.checkTask} undoTaskFunc={this.undoTask} id={itemCo.taskId}
            />})}
          </div>
        </section>
      </section>
    );
  }
}

export default App;
