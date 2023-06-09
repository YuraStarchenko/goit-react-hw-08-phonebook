import { Label, Form, Input, Button } from './ContactForm.styled.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsActions.jsx';
import { addContact } from 'redux/contacts/contactsOperations.jsx';
import { Formik } from 'formik';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (value, { resetForm }) => {
    let isDuplicate = false;

    const filteredContacts = contacts.filter(
      item => item.name.toLocaleLowerCase() === value.name.toLocaleLowerCase()
    );
    isDuplicate = filteredContacts.length === 0;
    if (isDuplicate) {
      const contact = { name: value.name, number: value.number };
      dispatch(addContact(contact));
      resetForm();
    } else {
      Notify.failure(`${value.name} is already in contacts`);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor="name">
            Name
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              id="number"
              type="tel"
              name="number"
              placeholder="Enter your number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Formik>
    </>
  );
};
