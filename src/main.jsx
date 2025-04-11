import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ import this
import './index.css';
import App from './App.jsx';
import PreLoader from './components/PreLoader.jsx';

function PreloaderWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      {loading ? (
        <PreLoader />
      ) : (
        <BrowserRouter> {/* ✅ wrap App here */}
          <App />
        </BrowserRouter>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreloaderWrapper />
  </StrictMode>
);
