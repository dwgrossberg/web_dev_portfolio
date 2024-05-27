import React from "react";

import { LuDelete, LuFileEdit } from "react-icons/lu";

function Country({ country, onEdit, onDelete }) {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.yearFirstVisited.slice(0, 4)}</td>
      <td>{country.totalTrips}</td>
      <td>
        <LuDelete className="icon" onClick={() => onDelete(country._id)} />
      </td>
      <td>
        <LuFileEdit className="icon" onClick={() => onEdit(country)} />
      </td>
    </tr>
  );
}

export default Country;
