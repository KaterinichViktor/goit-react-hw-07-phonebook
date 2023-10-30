import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../Redux/contactsSlice';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(selectFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
