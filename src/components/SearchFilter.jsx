// src/components/SearchFilter.jsx
import React, { useState } from 'react';

const SearchFilter = ({ setFilteredCitizens, originalCitizens }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCitizens(
      originalCitizens.filter(citizen =>
        citizen.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchFilter;
