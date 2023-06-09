import { ContactForm } from '../components/ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Text, Title, TitleText, Book } from '../components/Container.styled.js';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsActions';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Book>
        <TitleText>Phonebook</TitleText>
        <ContactForm />
        <Title>Contacts</Title>
        <Text>find contact by name</Text>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Book>
      <GlobalStyle />
    </Container>
  );
};
