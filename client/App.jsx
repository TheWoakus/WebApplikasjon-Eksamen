import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { GlobalStyles } from './src/styles/Global.jsx';
import AuthProvider from './src/context/AuthProvider.jsx';
import Routes from './src/routes/Routes.jsx';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const App = () => (
  <>
    <GlobalStyles />
    <section id="container">
      <AuthProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <Routes />
        </AlertProvider>
      </AuthProvider>
    </section>
  </>
);

export default App;
