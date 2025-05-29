import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsOps";
import formatDateToDistance from "../../helper/formatDateToNow";

export default function Contact({ id, name, number, createdAt }) {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => dispatch(removeContact(id));

  return (
    <li className={css.container}>
      <div>
        <span className={css.date}>{formatDateToDistance(createdAt)}</span>
        <div>
          <IoPerson className={css.icon} />
          <p className={css.info}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={css.icon} />
          <a className={css.info} href={`tel:${number}`}>
            {number}
          </a>
        </div>
      </div>
      <button
        className={css.btnRemove}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
