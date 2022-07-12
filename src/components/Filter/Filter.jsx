import { useFilter } from "../../reduxHooks/filterHook";

export const Filter = () => {
  const { filter, onChangeFilter } = useFilter();

  return (
    <label>
      Contacts Filter
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={(event) => onChangeFilter(event.target.value)}
        value={filter}
        required
      />
    </label>
  );
};
