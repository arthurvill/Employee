// src/components/Citizen.jsx
import React from 'react';

const Citizen = ({ citizen, index, toggleStatus }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{citizen.name}</td>
    <td>{citizen.age}</td>
    <td>{citizen.address}</td>
    <td>{citizen.status}</td>
    <td>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </td>
  </tr>
);

export default Citizen;
