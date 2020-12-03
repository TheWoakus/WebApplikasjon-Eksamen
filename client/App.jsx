import React from 'react';

import Routes from './src/routes/Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/styles/Global';


const App = () => (
	<>
	<GlobalStyles />
	<section id="container">
		<Routes />
	</section>
	</>
);

export default App;