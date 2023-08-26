// path: ./module/middleware/authMiddleware.js
// Path: ./module/middleware/authMiddleware.js

import { getAuth, onAuthStateChanged } from "@firebase/auth";

export const requireAuth = (req, res, next) => {
  const auth = getAuth();

  // Check if the user is authenticated
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is authenticated, allow access to the route
      next();
    } else {
      // User is not authenticated, redirect to login page
      res.redirect("/login"); // Replace '/login' with the actual login route of your application
    }
  });
};
