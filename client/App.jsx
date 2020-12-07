import React from 'react';

import Routes from './src/routes/Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/styles/Global';
import AuthProvider from './src/context/AuthProvider';


const App = () => (
	<>
	<GlobalStyles />
	<section id="container">
		<AuthProvider>
			<Routes />
		</AuthProvider>
	</section>
	</>
);

export default App;