import React, { Component } from "react"; 
import "./contactList.css"; 
import Contact from "./contact";

class ContactList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }
  addItem(e) {
    var itemArray = this.state.items;
    //this.allinput = this._name.value + this._email.value + this._phone.value;
    //console.log(this.allinput);

    if (this._name.value !== "" || this._email.value !== "" || this._phone.value !== "" ) {
      itemArray.unshift({
        name: this._name.value,
        email: this._email.value,
        phone: this._phone.value,
        key: Date.now()
      });
  
      this.setState({
        items: itemArray
      });

      this._name.value = "";
      this._email.value ="";
      this._phone.value ="";
      //this.allinput = "";
    }
    
    console.log(itemArray);
    
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return(
      <div className="ContactListMain">
      <div className="header">
      <form onSubmit={this.addItem}>
          <input ref={(a) => this._name = a} placeholder="enter name">
          </input>
          <br />
          <br />
          <input ref={(a) => this._email = a} placeholder="enter email">
          </input>
          <br />
          <br />
          <input ref={(a) => this._phone = a} placeholder="enter phone number">
          </input>
          <button type="submit">submit</button>
        </form>
      </div>
      <Contact entries={this.state.items} delete={this.deleteItem}/>
    </div>
    );
  }

}

export default ContactList;

  