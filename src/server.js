// path: ./src/server.js
import express from "express";
import { createServer } from "http";
import { requireAuth } from "../module/middleware/authMiddleware";

const app = express();

// Set up your Express.js routes here (similar to your previous app.js)

// Example route that requires authentication for /username
app.get("/username", requireAuth, (req, res) => {
  // Your route logic here
});

// Example route that requires authentication for /admin
app.get("/admin", requireAuth, (req, res) => {
  // Your route logic here
});

// Example route that requires authentication for /blogtitle/:premium
app.get("/blogtitle/:premium", requireAuth, (req, res) => {
  // Your route logic here
});

// Other routes without authentication
// Use Vite as middleware
async function createViteServer() {
  const vite = createServer({
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);
  vite.listen(3000, () => {
    console.log("LitPress server is running on http://localhost:3000");
  });
}

createViteServer();
