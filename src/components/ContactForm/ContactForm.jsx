import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { addContactItems } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const addContact = (contact) => dispatch(addContactItems(contact));
  const handleSubmit = (values, helpers) => {
    addContact({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    helpers.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be minimum 3 characters")
      .max(50, "Must be maximum 50 characters")
      .required("Is required"),
    number: Yup.string()
      .phone("UA", "Please enter a valid phone number")
      .required("Is required"),
  });

  const initialValues = {
    username: "",
    number: "",
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      initialValues={initialValues}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={`${id}-username`}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          id={`${id}-username`}
          name="username"
        />
        <ErrorMessage
          className={css.errorMsg}
          name="username"
          component="span"
        />
        <label className={css.label} htmlFor={`${id}-number`}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          id={`${id}-number`}
          name="number"
        />
        <ErrorMessage className={css.errorMsg} name="number" component="span" />
        <button className={css.buttonAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
