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
  minimum: 0.2
});

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();

  // 1. Initial Site Load (Booting Telemetry)
  useEffect(() => {
    // 2 seconds ka professional delay taake loader ki animation poori ho sake
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Navigation Loader (Top Bar progress on every route change)
  useEffect(() => {
    nprogress.start();

    // Page change hone par progress bar ko finish karne ke liye chota delay
    const navTimer = setTimeout(() => {
      nprogress.done();
    }, 500);

    return () => {
      clearTimeout(navTimer);
      nprogress.done();
    };
  }, [location.pathname]); // Har naye route par trigger hoga

  // Agar website pehli baar khul rahi hai to full screen loader dikhao
  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Custom Styles for nprogress Emerald Color */}
      <style>{`
  #nprogress .bar {
    background: #4f46e5 !important; /* Indigo-600 */
    height: 3px !important;
    z-index: 9999 !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #4f46e5, 0 0 5px #4f46e5 !important;
  }
`}</style>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </>
  );
}

export default App;