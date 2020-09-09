import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);

  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    console.log(todoEntries);
    var listItems = todoEntries.map(this.createTasks);
    console.log('after performing mapping');
    console.log(listItems);
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;