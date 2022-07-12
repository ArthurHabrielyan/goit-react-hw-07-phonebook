import style from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { useDeleteContactMutation } from "redux/contact-reducer/contacts";

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = (id) => () => deleteContact(id);
  return (
    <li className={style.list_item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={style.button} onClick={handleDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
