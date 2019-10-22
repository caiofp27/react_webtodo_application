import React from 'react';
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import Buttons from "./Buttons";
import IncompItemsCount from "./IncompItemsCount";
import CompItemsCount from "./CompItemsCount";
import TaskBox from "./TaskBox";
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: true, date: "2019-10-16", id: uuid()},
      {text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: false, date: "2019-10-17", id: uuid()},
      {text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: false, date: "2019-10-15", id: uuid()},
      {text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: true, date: "2019-10-20", id: uuid()},
      {text: "Aldus PageMaker including versions of Lorem Ipsum.", completed: true, date: "2019-11-06", id: uuid()}
    ]
  }
  render() {
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem />
        <section className="container">
          <IncompItemsCount count={3} />
          <Buttons completed={false} />
          <div className="row">

          </div>
        </section>
        <section className="container">
          <CompItemsCount count={2} />
          <Buttons completed />
          <div className="row">

          </div>
        </section>
      </section>
    );
  }
}

export default App;
