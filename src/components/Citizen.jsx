// src/components/Citizen.js
import React from 'react';

const Citizen = ({ citizen, index, onToggleStatus }) => (
  <div className="citizen">
    <p>No.: {index + 1}</p>
    <p>Name: {citizen.name}</p>
    <p>Age: {citizen.age}</p>
    <p>Address: {citizen.address}</p>
    <p>Status: {citizen.status}</p>
    <button onClick={() => onToggleStatus(index)}>Toggle Status</button>
  </div>
);

export default Citizen;
