import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CountryList from "../components/CountryList";
import { Link } from "react-router-dom";

import { LuListPlus } from "react-icons/lu";

function CountriesPage({ setCountryToEdit }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [countries, setCountries] = useState([]);

  // RETRIEVE the entire list of Countries
  const loadCountries = async () => {
    const response = await fetch("/countries");
    const countries = await response.json();
    setCountries(countries);
  };

  // UPDATE a single Country
  const onEditCountry = async (country) => {
    setCountryToEdit(country);
    redirect("/update");
  };

  // DELETE a single Country
  const onDeleteCountry = async (_id) => {
    const response = await fetch(`/countries/${_id}`, { method: "DELETE" });
    if (response.status === 200) {
      const getResponse = await fetch("/countries");
      const countries = await getResponse.json();
      setCountries(countries);
    } else {
      console.error(
        `Unable to delete country from the collection = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD all the Countries
  useEffect(() => {
    loadCountries();
  }, []);

  // DISPLAY the Countries
  return (
    <>
      <h2>List of Countries</h2>
      <p>
        A fully editable collection of countries I've traveled to and worked in
        over the years.
      </p>
      <Link to="/create">
        <LuListPlus />
        Add Country
      </Link>
      <CountryList
        countries={countries}
        onEdit={onEditCountry}
        onDelete={onDeleteCountry}
      />
    </>
  );
}

export default CountriesPage;
