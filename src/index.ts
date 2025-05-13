import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Define port number
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from TypeScript Express Docker App!",
    environment: process.env.NODE_ENV || "development",
  });
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
