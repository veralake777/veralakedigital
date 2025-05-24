import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required fields' 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address' 
        });
      }
      
      // In a real application, you would store the contact form submission
      // and/or send an email notification
      
      // For now, just return success
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been received! We will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
