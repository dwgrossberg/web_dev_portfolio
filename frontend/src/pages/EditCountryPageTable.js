import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditCountryPageTable = ({ country }) => {
  const [name, setName] = useState(country.name);
  const [yearFirstVisited, setYearFirstVisited] = useState(
    country.yearFirstVisited
  );
  const [totalTrips, setTotalTrips] = useState(country.totalTrips);

  const redirect = useNavigate();

  const editCountry = async () => {
    const response = await fetch(`/countries/${country._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        yearFirstVisited: yearFirstVisited,
        totalTrips: totalTrips,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert(`${name} information edited.`);
    } else {
      const errMessage = await response.json();
      alert(
        `Unable to edit ${name} information: ${response.status}. ${errMessage.Error}`
      );
    }
    redirect("/countries");
  };

  return (
    <>
      <article>
        <h2>Edit a Country</h2>
        <p>Paragraph about this page.</p>
        <table id="Countries">
          <caption>Which Country are you adding?</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year First Visited</th>
              <th>Total Trips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Country Name</label>
                <input
                  type="text"
                  placeholder="Name of the Country"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </td>

              <td>
                <label htmlFor="yearFirstVisited">Year First Visited</label>
                <input
                  type="number"
                  value={yearFirstVisited.slice(0, 4)}
                  placeholder="Year First Visited Country"
                  onChange={(e) => setYearFirstVisited(e.target.value)}
                  id="yearFirstVisited"
                />
              </td>

              <td>
                <label htmlFor="totalTrips">Total Trips</label>
                <input
                  type="text"
                  placeholder="TotalTrips to the Country"
                  value={totalTrips}
                  onChange={(e) => setTotalTrips(e.target.value)}
                  id="totalTrips"
                />
              </td>

              <td>
                <label htmlFor="submit">Commit</label>
                <button type="submit" onClick={editCountry} id="submit">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};
export default EditCountryPageTable;
