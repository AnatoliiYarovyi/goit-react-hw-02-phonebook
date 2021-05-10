import React from "react";
import style from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          {name}: {number}
          <button type="button" className={style.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
