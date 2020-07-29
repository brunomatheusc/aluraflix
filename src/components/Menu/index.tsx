import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';

import logo from '../../assets/img/logo.png';
import ButtonLink from './../ButtonLink/index';

const Menu: FC = () => {
	return (
		<>
			<Container>
				<Link to="/">
					<Logo src={logo} alt="AluraFlix logo"/>
				</Link>

				<ButtonLink href="new">Novo vídeo</ButtonLink>
			</Container>
		</>
	);
};

export default Menu;