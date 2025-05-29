import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDebounce } from "use-debounce";
import { useMemo } from "react";

export default function ContactList() {
  const contactList = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const [debounceSearch] = useDebounce(filter, 500);

  const viewContacts = useMemo(() => {
    return contactList.filter((contact) =>
      contact.name.toLowerCase().includes(debounceSearch.toLowerCase())
    );
  }, [debounceSearch, contactList]);

  return (
    <ul className={css.container}>
      {viewContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
