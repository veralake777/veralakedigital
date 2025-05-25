// Google Analytics Initialization
function initGA() {
  // Check for the MEASUREMENT_ID
  const MEASUREMENT_ID = window.GA_MEASUREMENT_ID;
  
  if (!MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is missing. Analytics will not be initialized.');
    return;
  }
  
  // Create script element for Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
  
  // Make gtag available globally
  window.gtag = gtag;
  
  console.log('Google Analytics initialized with Measurement ID:', MEASUREMENT_ID);
}

// Track page views - useful for single-page applications
function trackPageView(path) {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized. Cannot track page view.');
    return;
  }
  
  window.gtag('config', window.GA_MEASUREMENT_ID, {
    page_path: path
  });
  
  console.log('Page view tracked:', path);
}

// Track events
function trackEvent(action, category, label, value) {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized. Cannot track event.');
    return;
  }
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
  
  console.log('Event tracked:', action, category, label, value);
}