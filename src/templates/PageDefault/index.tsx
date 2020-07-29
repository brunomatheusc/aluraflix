import React, { FC } from 'react';

import { Container, Main } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const PageDefault: FC = ({ children }) => {
	return (
		<>
			<Container>
				<Menu />
					<Main>
						{ children }
					</Main>
				<Footer />	
			</Container>
		</>
	);
};

export default PageDefault;