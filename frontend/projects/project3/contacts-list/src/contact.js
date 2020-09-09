import React, { Component } from "react";
import "./contact.css"; 

class Contact extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);

  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
  return <li onClick={() => this.delete(item.key)} key={item.key}>{item.name}<br/>{item.email}<br/>{item.phone}</li>
  }

  render() {
    var contactEntries = this.props.entries;
    console.log(contactEntries);
    var listItems = contactEntries.map(this.createTasks);
    console.log('after performing mapping');
    console.log(listItems);
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default Contact;
