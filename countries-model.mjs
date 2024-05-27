// Models for the Countries Collection

// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ Error: "Connection to MongoDB server failed." });
  } else {
    console.log("Success: Connected to MongoDB server.");
  }
});

// SCHEMA: Define the collection's schema.
const countrySchema = mongoose.Schema({
  name: { type: String, required: true },
  yearFirstVisited: { type: Date, required: true, default: Date.now },
  totalTrips: { type: Number, required: true },
});

// Compile the model from the schema
// by defining the collection name "countries".
const countries = mongoose.model("Countries", countrySchema);

// CREATE model *****************************************
const createCountry = async (name, yearFirstVisited, totalTrips) => {
  const country = new countries({
    name: name,
    yearFirstVisited: yearFirstVisited,
    totalTrips: totalTrips,
  });
  return country.save();
};

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveCountries = async () => {
  const query = countries.find().sort({ yearFirstVisited: 1 });
  return query.exec();
};

// RETRIEVE by ID
const retrieveCountryByID = async (_id) => {
  const query = countries.findById({ _id: _id });
  return query.exec();
};

// DELETE model based on _id  *****************************************
const deleteCountryById = async (_id) => {
  const result = await countries.deleteOne({ _id: _id });
  return result.deletedCount;
};

// UPDATE model *****************************************************
const updateCountry = async (_id, name, yearFirstVisited, totalTrips) => {
  const result = await countries.replaceOne(
    { _id: _id },
    {
      name: name,
      yearFirstVisited: yearFirstVisited,
      totalTrips: totalTrips,
    }
  );
  return {
    _id: _id,
    name: name,
    yearFirstVisited: yearFirstVisited,
    totalTrips: totalTrips,
  };
};

// EXPORT the variables for use in the controller file.
export {
  createCountry,
  retrieveCountries,
  retrieveCountryByID,
  updateCountry,
  deleteCountryById,
};
