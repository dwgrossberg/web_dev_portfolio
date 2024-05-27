// Controllers for the Countries Collection

import "dotenv/config";
import express from "express";
import * as countries from "./countries-model.mjs";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post("/countries", (req, res) => {
  countries
    .createCountry(
      req.body.name,
      req.body.yearFirstVisited,
      req.body.totalTrips
    )
    .then((country) => {
      console.log(`"${country.name}" was added to the collection.`);
      res.status(201).json(country);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ Error: `Failed to add new country to the collection.` });
    });
});

// RETRIEVE controller ****************************************************
app.get("/countries", (req, res) => {
  countries
    .retrieveCountries()
    .then((countries) => {
      if (countries !== null) {
        console.log(`All countries were retrieved from the collection.`);
        res.json(countries);
      } else {
        res.status(404).json({
          Error: "There are no countries from the collection to retrieve.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error: "Could not retrieve all countries from the collection.",
      });
    });
});

// RETRIEVE by ID controller
app.get("/countries/:_id", (req, res) => {
  countries
    .retrieveCountryByID(req.params._id)
    .then((country) => {
      if (country !== null) {
        console.log(`"${country.name}" was retrieved, based on its ID.`);
        res.json(country);
      } else {
        res
          .status(404)
          .json({ Error: `"${country.name}" does not exist in collection.` });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error: `Could not retrieve "${country.name}" from collection.`,
      });
    });
});

// UPDATE controller ************************************
app.put("/countries/:_id", (req, res) => {
  countries
    .updateCountry(
      req.params._id,
      req.body.name,
      req.body.yearFirstVisited,
      req.body.totalTrips
    )
    .then((country) => {
      console.log(`"${country.name}" was updated.`);
      res.json(country);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: `Could not update "${country.name}".` });
    });
});

// DELETE Controller ******************************
app.delete("/countries/:_id", (req, res) => {
  countries
    .deleteCountryById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        console.log(`Based on its ID, ${deletedCount} country was deleted.`);
        res
          .status(200)
          .send({ Success: `${deletedCount} country was deleted.` });
      } else {
        res.status(404).json({
          Error: `"Specified country either does not exist in the collection or 
          has already been deleted.`,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: `Could not delete "${country.name}".` });
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("./frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
