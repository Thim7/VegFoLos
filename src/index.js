import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from '~/app/store';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="756642481515-ane3pa6i3o5l0noot3nnhd3hv2pl1sq4.apps.googleusercontent.com">
        <React.StrictMode>
            <Provider store={store}>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
