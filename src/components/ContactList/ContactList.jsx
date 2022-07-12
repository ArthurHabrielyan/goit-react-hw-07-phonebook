import { ContactListItem } from "./ContactListItem";
import { useGetContactsQuery } from "../../redux/contact-reducer/contacts";
import { useFilter } from "../../reduxHooks/filterHook";
import { useMemo } from "react";
export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const { filter } = useFilter();

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter((contact) =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <div>
      <ul>
        {filteredContacts &&
          filteredContacts.map(({ name, phone, id }) => {
            return (
              <ContactListItem name={name} number={phone} key={id} id={id} />
            );
          })}
      </ul>
    </div>
  );
};
