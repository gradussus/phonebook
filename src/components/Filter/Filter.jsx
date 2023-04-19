import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <input placeholder="Find contacts by name" type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};
