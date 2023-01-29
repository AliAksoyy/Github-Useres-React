import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain='dev-7ukt26sro2rg6xu2.us.auth0.com'
    clientId='SzxMuEeBLZkvyd7UuvC3QHiijpRERSYp'
    redirectUri={window.location.origin}>
        <GithubProvider>
            <App />
        </GithubProvider>
    </Auth0Provider>
);


