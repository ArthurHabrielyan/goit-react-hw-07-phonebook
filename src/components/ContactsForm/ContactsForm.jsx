import { useState } from "react";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/contact-reducer/contacts";
import style from "./ContactsForm.module.css";

export const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const reset = (event) => {
    setName("");
    setNumber("");
    event.currentTarget.reset();
  };

  const onAddContact = (contact) => {
    if (contacts && contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    addContact(contact);
  };

  const onChangeInputValue = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  const addContactItem = (event) => {
    event.preventDefault();
    onAddContact({
      name: name,
      number: number,
    });
    reset(event);
  };

  return (
    <form className={style.form} onSubmit={addContactItem}>
      <label>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChangeInputValue}
          value={name}
          required
        />
      </label>

      <label>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChangeInputValue}
          value={number}
          required
        />
      </label>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
