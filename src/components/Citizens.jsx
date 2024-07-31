// src/components/Citizens.js
import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const initialCitizens = [
  { name: "John", age: 25, address: "123 Elm St", status: "Active" },
  { name: "Jane", age: 34, address: "456 Oak St", status: "Inactive" },
  { name: "Mike", age: 45, address: "789 Pine St", status: "Active" },
  { name: "Lisa", age: 28, address: "101 Maple St", status: "Inactive" },
  { name: "Angelo", age: 33, address: "202 Birch St", status: "Active" },
  { name: "Francis", age: 41, address: "303 Cedar St", status: "Inactive" },
  { name: "Leo", age: 50, address: "404 Fir St", status: "Active" },
  { name: "Arthur", age: 55, address: "505 Walnut St", status: "Inactive" },
  { name: "Nathan", age: 60, address: "606 Ash St", status: "Active" },
  { name: "Aaron", age: 22, address: "707 Redwood St", status: "Active" }
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(initialCitizens);
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

  const toggleStatus = (index) => {
    const newCitizens = [...citizens];
    newCitizens[index].status = newCitizens[index].status === "Active" ? "Inactive" : "Active";
    setCitizens(newCitizens);
    setFilteredCitizens(newCitizens);
  };

  return (
    <div className="citizens-container">
      <h1>Citizens List</h1>
      <SearchFilter setFilteredCitizens={setFilteredCitizens} citizens={citizens} />
      <div className="citizens-list">
        {filteredCitizens.map((citizen, index) => (
          <Citizen key={index} citizen={citizen} index={index} onToggleStatus={toggleStatus} />
        ))}
      </div>
    </div>
  );
};

export default Citizens;
