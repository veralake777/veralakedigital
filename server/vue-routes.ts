import { Express, Request, Response } from "express";
import path from "path";
import fs from "fs";

export function registerVueRoutes(app: Express): void {
  // API endpoint to provide the Google Analytics Measurement ID
  app.get("/api/ga-id", (req: Request, res: Response) => {
    const measurementId = process.env.VITE_GA_MEASUREMENT_ID || "";
    res.json({ measurementId });
  });
  
  // Route for the preview page
  app.get("/preview", (req: Request, res: Response) => {
    const previewPath = path.resolve("client/public/index-vue.html");
    if (fs.existsSync(previewPath)) {
      res.sendFile(previewPath);
    } else {
      res.status(404).send("Preview page not found");
    }
  });
  
  // Route for our component-based Vue application
  app.get("/components", (req: Request, res: Response) => {
    const componentsPath = path.resolve("client/public/vue-components.html");
    if (fs.existsSync(componentsPath)) {
      res.sendFile(componentsPath);
    } else {
      res.status(404).send("Vue components page not found");
    }
  });

  // Serve the Vue.js application for all other routes
  app.get("*", (req: Request, res: Response) => {
    // First try to serve from the public index.html
    const publicPath = path.resolve("client/public/index.html");
    
    if (fs.existsSync(publicPath)) {
      res.sendFile(publicPath);
    } else {
      // Fall back to the regular index.html
      const indexPath = path.resolve("client/index.html");
      
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Application not found");
      }
    }
  });
}