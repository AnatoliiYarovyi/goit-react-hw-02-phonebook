import React, { Component } from "react";
import style from "./App.module.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: " ",
    number: " ",
  };
  // -------- єто по Репете --------
  handleChenge = (event) => {
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  // -----------------------

  // chengeFilter = (event) => {
  //   const { value } = event.currentTarget;
  //   this.setState({
  //     filter: value,
  //   });
  // };

  render() {
    const { name, number, filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={style.conteiner}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onHandleChenge={this.handleChenge}
        />

        <h2 className={style.caption}>Contacts</h2>
        <Filter filter={filter} onHandleChenge={this.handleChenge} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
