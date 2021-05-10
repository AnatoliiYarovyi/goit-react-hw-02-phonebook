import React from "react";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <span className={style.textName}>{name}:</span>
          <span className={style.textNamber}>{number}</span>
          <button
            type="button"
            className={style.button}
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
