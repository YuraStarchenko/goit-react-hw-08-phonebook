import { useSelector, useDispatch } from 'react-redux';
import { Input } from './Filter.styled.js';
import { setFilter } from 'redux/filter/filterSlice.jsx';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <Input
      type="text"
      name="filter"
      title="Filter"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={value}
    />
  );
};
