import { Express, Request, Response } from "express";
import path from "path";
import fs from "fs";

export function registerVueRoutes(app: Express): void {
  // API endpoint to provide the Google Analytics Measurement ID
  app.get("/api/ga-id", (req: Request, res: Response) => {
    const measurementId = process.env.VITE_GA_MEASUREMENT_ID || "";
    res.json({ measurementId });
  });

  // Serve the Vue.js application for all other routes
  app.get("*", (req: Request, res: Response) => {
    const vuePath = path.resolve("client/vue-app/index.html");
    
    // Check if the Vue app exists
    if (fs.existsSync(vuePath)) {
      res.sendFile(vuePath);
    } else {
      res.status(404).send("Vue application not found");
    }
  });
}