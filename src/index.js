import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-7ukt26sro2rg6xu2.us.auth0.com
// SzxMuEeBLZkvyd7UuvC3QHiijpRERSYp

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GithubProvider>
    <App />
</GithubProvider>
);


