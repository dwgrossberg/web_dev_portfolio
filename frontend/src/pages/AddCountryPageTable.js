import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

export const AddCountryPageTable = () => {
  const [name, setName] = useState("");
  const [yearFirstVisited, setYearFirstVisited] = useState("");
  const [totalTrips, setTotalTrips] = useState("");

  const redirect = useNavigate();

  const addCountry = async () => {
    const newCountry = { name, yearFirstVisited, totalTrips };
    const response = await fetch("/countries", {
      method: "post",
      body: JSON.stringify(newCountry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert(`${name} added to the collection.`);
    } else {
      alert(`Unable to add ${name} to the collection = ${response.status}`);
    }
    redirect("/countries");
  };

  return (
    <>
      <article>
        <h2>Add a Country</h2>
        <p>Paragraph about this page.</p>

        <table id="Countries">
          <caption>Which Country are you adding?</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>date First Visited</th>
              <th>totalTrips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label for="name">Country Name</label>
                <input
                  type="text"
                  placeholder="name of the Country"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </td>

              <td>
                <label for="yearFirstVisited">Year First Visited</label>
                <input
                  type="number"
                  value={yearFirstVisited}
                  placeholder="yearFirstVisited of the Country"
                  onChange={(e) => setYearFirstVisited(e.target.value)}
                  id="yearFirstVisited"
                />
              </td>

              <td>
                <label for="totalTrips">Total Trips</label>
                <input
                  type="text"
                  placeholder="Primary totalTrips of the Country"
                  value={totalTrips}
                  onChange={(e) => setTotalTrips(e.target.value)}
                  id="totalTrips"
                />
              </td>

              <td>
                <label for="submit">Commit</label>
                <button type="submit" onClick={addCountry} id="submit">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

export default AddCountryPageTable;
