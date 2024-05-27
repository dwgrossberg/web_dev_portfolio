import React from "react";

function StaffRow({ result, row }) {
  return (
    <tr>
      <td>{row + 1}</td>
      <td>
        <img
          src={result.picture.thumbnail}
          alt={result.name.first + " " + result.name.last}
        />
      </td>
      <td>
        <a href={`mailto:${result.email}`}>{result.email}</a>
      </td>
      <td>{result.name.first}</td>
      <td>{result.name.last}</td>
      <td>{result.phone}</td>
      <td>{result.location.city}</td>
    </tr>
  );
}
export default StaffRow;
