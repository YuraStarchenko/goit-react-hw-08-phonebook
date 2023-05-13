import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn, Text } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filterContacts.map(({ phone, name, id }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {phone}
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
