import React from "react";
import style from "./ContactForm.module.css";

const ContactForm = ({ name, number, onHandleChenge }) => {
  return (
    // <form className={style.ContactForm} onSubmit={hendleSubmit}>
    <form className={style.ContactForm}>
      <label className={style.label}>Name</label>
      <input
        className={style.input}
        value={name}
        onChange={onHandleChenge}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={style.labelNamber}>Number</label>
      <input
        className={style.input}
        value={number}
        onChange={onHandleChenge}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
