// Import dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Nav from "./components/Nav";
import "./App.css";

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
import TopicsPage from "./pages/TopicsPage";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import AddCountryPageTable from "./pages/AddCountryPageTable";
import EditCountryPageTable from "./pages/EditCountryPageTable";
import GalleryPage from "./pages/GalleryPage";
import OrderPage from "./pages/OrderPage";
import StaffPage from "./pages/StaffPage";
import ContactPage from "./pages/ContactPage";

// Define the function that renders the content in Routes, using State.
function App() {
  const [country, setCountryToEdit] = useState([]);
  const [results, setResults] = useState([]);
  const [sliceResults, setSliceResults] = useState([]);
  const [count, setCount] = useState("");
  useEffect(() => {
    setCount(0);
  }, []);
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>
            Daniel Grossberg
            <img src="./android-chrome-192x192.png" alt="Website logo" />
          </h1>
          <p>Web Dev Portfolio</p>
        </header>
        <Nav />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route
                path="/countries"
                element={<CountriesPage setCountryToEdit={setCountryToEdit} />}
              />
              <Route path="/create" element={<AddCountryPageTable />} />
              <Route
                path="/update"
                element={<EditCountryPageTable country={country} />}
              />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="order" element={<OrderPage />} />
              <Route
                path="staff"
                element={
                  <StaffPage
                    results={results}
                    setResults={setResults}
                    count={count}
                    setCount={setCount}
                    sliceResults={sliceResults}
                    setSliceResults={setSliceResults}
                  />
                }
              />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&#169; 2024 Daniel Grossberg</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
