import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { getContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchContacts = async () => await dispatch(getContacts());
    fetchContacts();
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </>
  );
}

export default App;
