import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import PageDefault from './templates/PageDefault/index';

function App() {
	return (
		<>
			<BrowserRouter>

				<PageDefault>
					<Routes />
					<GlobalStyle />
				</PageDefault>

			</BrowserRouter>
		</>		
	);
}

export default App;
