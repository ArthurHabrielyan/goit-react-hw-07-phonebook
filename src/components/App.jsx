import { ContactsForm } from "./ContactsForm";
import { Section } from "./Section";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export const App = () => {
  return (
    <div className="container">
      <Section>
        <ContactsForm />
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
