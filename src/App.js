import React from 'react';
import AddItem from "./AddItem";
import Buttons from "./Buttons";
import IncompItemsCount from "./IncompItemsCount";
import CompItemsCount from "./CompItemsCount";
import TaskBox from "./TaskBox";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem />
        <section className="container">
          <IncompItemsCount count={3} />
          <Buttons completed={false} />
          <div className="row">
          <TaskBox completed={false} text="Aldus PageMaker including versions of Lorem Ipsum." />
          <TaskBox completed={false} text="Aldus PageMaker including versions of Lorem Ipsum." />
          <TaskBox completed={false} text="Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
        </section>
        <section className="container">
          <CompItemsCount count={2} />
          <Buttons completed />
          <div className="row">
            <TaskBox completed text="Aldus PageMaker including versions of Lorem Ipsum." />
            <TaskBox completed text="Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
        </section>
      </section>
    );
  }
}

export default App;
