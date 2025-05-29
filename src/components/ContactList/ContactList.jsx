import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectViewedContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const viewedContacts = useSelector(selectViewedContacts);

  return (
    <ul className={css.container}>
      {viewedContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}
