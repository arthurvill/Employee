// src/components/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = ({ setFilteredCitizens, citizens }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = citizens.filter(citizen =>
      citizen.name.toLowerCase().includes(query) ||
      citizen.address.toLowerCase().includes(query)
    );
    setFilteredCitizens(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name or address"
      />
    </div>
  );
};

export default SearchFilter;
