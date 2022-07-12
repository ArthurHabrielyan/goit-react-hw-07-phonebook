import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContacts,
  setContact,
} from "redux/contact-reducer/filterSlice";

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onAddContact = (contact) => dispatch(setContact(contact));
  const onDeleteContact = (contact) => dispatch(deleteContact(contact));

  return {
    contacts,
    addContact: onAddContact,
    deleteContact: onDeleteContact,
  };
};
