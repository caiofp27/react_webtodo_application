import React from 'react';
import AddItem from "./AddItem";
import Buttons from "./Buttons";
import IncompItemsCount from "./IncompItemsCount";
import IncompBox from "./IncompBox";
import CompItemsCount from "./CompItemsCount";
import CompBox from "./CompBox";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <h3 className="title">My ToDo List</h3>
        <AddItem />
        <section className="container">
          <IncompItemsCount count={3} />
          <Buttons />
          <div className="row">
            <IncompBox text="Aldus PageMaker including versions of Lorem Ipsum." />
            <IncompBox text="Aldus PageMaker including versions of Lorem Ipsum." />
            <IncompBox text="Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
        </section>
        <section className="container">
          <CompItemsCount count={2} />
          <Buttons />
          <div className="row">
            <CompBox text="Aldus PageMaker including versions of Lorem Ipsum." />
            <CompBox text="Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
        </section>
      </section>
    );
  }
}

export default App;
