// path: ./module/service/databaseService.js

import { database } from "../config/lp-config.js";

// Initialize getData and postData as null
let getData = null;
let postData = null;

// Check the selected database option and import the appropriate functions
let databaseFunctions;

switch (database) {
  case "firebase":
    // Import the specific functions for Firebase
    databaseFunctions = import("./firebaseService.js");
    break;
  case "sqlite":
    // Import the specific functions for SQLite (Example: ./sqliteService.js)
    databaseFunctions = import("./sqliteService.js");
    break;
  // Add more cases for other database options if needed
  default:
    throw new Error("Invalid database option selected.");
}

// Resolve the database-specific functions and assign them to getData and postData
databaseFunctions.then((module) => {
  getData = module.getDataFromFirestore;
  postData = module.postDataToFirestore;
});

// Export functions that interact with the selected database
export const fetchData = async () => {
  if (getData === null) {
    throw new Error(
      "getData has not been initialized for the selected database."
    );
  }

  return getData();
};

export const postDataReq = async (data) => {
  if (postData === null) {
    throw new Error(
      "postData has not been initialized for the selected database."
    );
  }

  return postData(data);
};
