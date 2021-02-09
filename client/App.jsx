import React from 'react';

import { GlobalStyles } from './src/styles/Global.jsx';
import Routes from './src/routes/Routes.jsx';

const App = () => (
  <>
    <GlobalStyles />
    <section id="container">
      <Routes />
    </section>
  </>
);

export default App;
