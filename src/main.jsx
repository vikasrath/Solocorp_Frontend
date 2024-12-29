import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';  // Use hydrateRoot for SSR
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PageDataProvider } from './context/pageData.jsx';

// Hydrate the React app on the client side with SSR-rendered HTML
hydrateRoot(document.getElementById('root'), (
  <StrictMode>
    <PageDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageDataProvider>
  </StrictMode>
));
