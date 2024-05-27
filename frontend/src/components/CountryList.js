import React from "react";
import Country from "./Country";

// Change the function names and parameters
// to fit your portfolio topic and schema.

function CountryList({ countries, onDelete, onEdit }) {
  return (
    <table id="countries">
      <caption>Add and Edit Countries</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year First Visited</th>
          <th>Total Trips</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, i) => (
          <Country
            country={country}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CountryList;
