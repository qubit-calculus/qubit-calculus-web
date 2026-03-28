import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ErrorBoundary from './components/ErrorBoundary';
import { initWebVitals } from './lib/web-vitals';
import { initErrorTracking } from './lib/error-tracking';
import './index.css';
import { ThemeProvider } from './hooks/use-theme';

// Initialize observability
initErrorTracking();
initWebVitals();

// Lazy load pages for optimal performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));

// Company Pages
const About = lazy(() => import('./pages/company/About'));
const Careers = lazy(() => import('./pages/company/Careers'));
const Contact = lazy(() => import('./pages/company/Contact'));
const Press = lazy(() => import('./pages/company/Press'));

// Loading fallback
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0f] transition-colors">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />

              {/* Company Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/press" element={<Press />} />

              {/* Static Pages - redirect to sections */}
              <Route path="/services" element={<Navigate to="/#features" replace />} />
              <Route path="/stack" element={<Navigate to="/#security" replace />} />
              <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />

              {/* Catch-all — branded 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <SpeedInsights />
        </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
