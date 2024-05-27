import React, { useEffect } from "react";
import StaffRow from "../components/StaffRow";

function StaffPage({
  results,
  setResults,
  count,
  setCount,
  sliceResults,
  setSliceResults,
}) {
  const fetchStaffData = async () => {
    const randomAPI = "https://randomuser.me/api/?results=21";
    const serverMessage1 = document.getElementById("serverMessage1");
    const serverMessage2 = document.getElementById("serverMessage2");
    try {
      const response = await fetch(randomAPI);
      const JSONdata = await response.text();
      const data = JSON.parse(JSONdata);
      setResults([...results, ...data.results]);
      console.log(results);
      serverMessage1.innerHTML = "Staff data has been updated.";
    } catch (error) {
      console.log(error.message);
      serverMessage2.innerHTML = "Unable to fetch new staff data.";
    }
  };
  const buttonClick = () => {
    setCount(count + 1);
    const newSlice = results.slice(0, count + 1);
    console.log(newSlice, count);
    setSliceResults(newSlice);
    if (count % 21 === 0) {
      fetchStaffData();
    }
  };
  useEffect(() => {
    fetchStaffData();
  }, []);
  return (
    <>
      <h2>Staff</h2>
      <article>
        <aside>
          <h3>Server message:</h3>
          <p id="serverMessage1"></p>
          <p id="serverMessage2"></p>
        </aside>
        <p>
          Use this page to fetch data from the{" "}
          <a href="https://randomuser.me/">Random User Generator</a> API and
          build out a sample staffing table.
        </p>
        <button
          id="fetchStaff"
          onClick={() => {
            buttonClick();
          }}
        >
          Get Staff
        </button>
        <table>
          <caption>Staffing details</caption>
          <thead>
            <tr>
              <th>Count</th>
              <th>Picture</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody id="staffTableBody">
            {sliceResults.map((result, i) => (
              <StaffRow result={result} key={i} row={i} />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}
export default StaffPage;
