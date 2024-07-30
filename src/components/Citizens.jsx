// src/components/Citizens.jsx
import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const citizensData = [
  { name: 'John', age: 25, address: '123 Main St', status: 'Active' },
  { name: 'Jane', age: 30, address: '456 Elm St', status: 'Inactive' },
  // Add more citizens here
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(citizensData);
  const [filteredCitizens, setFilteredCitizens] = useState(citizensData);

  const toggleStatus = (index) => {
    setCitizens(citizens.map((citizen, i) =>
      i === index ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' } : citizen
    ));
  };

  return (
    <div>
      <SearchFilter setFilteredCitizens={setFilteredCitizens} originalCitizens={citizensData} />
      <h1>Citizens List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen, index) => (
            <Citizen key={index} citizen={citizen} index={index} toggleStatus={toggleStatus} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;
