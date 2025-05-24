import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useLocation } from "wouter";
import { trackPageView } from "./lib/analytics";

function Router() {
  const [location] = useLocation();
  
  // Track page views when routes change
  useEffect(() => {
    trackPageView(location);
  }, [location]);
  
  return (
    <Switch>
      {/* Add pages below */}
      {/* <Route path="/" component={Home}/> */}
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Check for cookie consent in localStorage
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    
    // Only initialize GA if cookies are accepted
    if (cookiesAccepted === 'true') {
      initGA();
    }
    
    // Show cookie banner if no preference is set
    if (!cookiesAccepted) {
      // For now, we'll just create a simple cookie consent banner
      const banner = document.createElement('div');
      banner.id = 'cookie-banner';
      banner.style.position = 'fixed';
      banner.style.bottom = '0';
      banner.style.left = '0';
      banner.style.width = '100%';
      banner.style.padding = '1rem';
      banner.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      banner.style.color = 'white';
      banner.style.zIndex = '1000';
      banner.style.display = 'flex';
      banner.style.justifyContent = 'space-between';
      banner.style.alignItems = 'center';
      
      banner.innerHTML = `
        <div>
          <p style="margin: 0">We use cookies to enhance your experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies.</p>
        </div>
        <div>
          <button id="accept-cookies" style="margin-right: 10px; padding: 8px 16px; background-color: #4CAF50; border: none; color: white; cursor: pointer;">Accept</button>
          <button id="decline-cookies" style="padding: 8px 16px; background-color: transparent; border: 1px solid white; color: white; cursor: pointer;">Decline</button>
        </div>
      `;
      
      document.body.appendChild(banner);
      
      // Add event listeners to buttons
      document.getElementById('accept-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        initGA();
        banner.remove();
      });
      
      document.getElementById('decline-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'false');
        banner.remove();
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
