import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Menu />

				<div style={{ background: "#141414" }}>
					<Routes />
					<GlobalStyle />
				</div>
			</BrowserRouter>
		</>		
	);
}

export default App;
