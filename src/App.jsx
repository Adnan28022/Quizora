import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import AppRoutes from './routes/AppRoutes';
import Loader from './components/layout/Loader';
import { Toaster } from 'react-hot-toast';

nprogress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.2,
});

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();

  // Initial Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Route Change Progress Bar
  useEffect(() => {
    nprogress.start();

    const navTimer = setTimeout(() => {
      nprogress.done();
    }, 500);

    return () => {
      clearTimeout(navTimer);
      nprogress.done();
    };
  }, [location.pathname]);

  // Full Screen Loader
  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* NProgress Custom Styling */}
      <style>{`
        #nprogress .bar {
          background: #4f46e5 !important;
          height: 3px !important;
          z-index: 9999 !important;
        }

        #nprogress .peg {
          box-shadow: 0 0 10px #4f46e5, 0 0 5px #4f46e5 !important;
        }
      `}</style>

      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Routes */}
      <AppRoutes />
    </>
  );
}

export default App;