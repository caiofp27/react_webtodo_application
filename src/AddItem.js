import React from "react";

class AddItem extends React.Component {
  render() {
    return (
      <section className="container">
        <form className="form-inline justify-content-center">
          <input type="text" className="col-6 form-control mr-2" placeholder="New task" />
          <input type="color" className="mr-2" defaultValue="#ffffff"/>
          <button type="submit" className="btn btn-sm btn-primary">ADD</button>
        </form>
      </section>
    );
  }
}

export default AddItem;
