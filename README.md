# VeraLake Digital Agency Website

A modern, responsive digital agency website for Veralake.digital built with Vue.js and Vuetify UI framework. The site showcases marketing consultation services and client experiences.

## Features

- Modern, responsive design optimized for all devices
- Vue.js with Vuetify UI framework for rich components
- Calendly integration for booking consultations
- Google Analytics tracking for user interactions
- Animated sections with smooth scrolling
- Dark/light theme toggle
- Client showcase with auto-cycling and horizontal scrolling

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer)

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/veralake-digital.git
   cd veralake-digital
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   VITE_GA_MEASUREMENT_ID=G-DE8YBR2PBJ
   ```
   Replace with your own Google Analytics Measurement ID if needed.

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

### Building for Production

1. Build the application:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to any static hosting service.

## Project Structure

- `client/` - Frontend Vue.js application
  - `public/` - Static assets and HTML entry point
  - `src/` - Source code for React components
- `server/` - Express.js backend for API endpoints
- `shared/` - Shared code between frontend and backend

## Technology Stack

- **Frontend**: Vue.js, Vuetify, Vite
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Integrations**: Google Analytics, Calendly
- **Styling**: CSS with responsive design

## Mobile Menu Implementation

The mobile menu is implemented using a custom solution that works alongside Vuetify components:

- Hamburger menu toggle in the header
- Slide-in navigation drawer from the left
- Smooth transitions and proper positioning
- Full touch support for mobile devices

## Contact

For any questions or support, please contact:
- Phone: 470-629-3981
- Email: contact@veralake.digital