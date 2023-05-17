import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectContacts, selectFilter } from 'redux/contacts/contactsActions';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filterContacts.map(({ number, name, id }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              delete
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
