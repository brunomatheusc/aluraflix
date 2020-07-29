import React, { FC } from 'react';

import { Container } from './styles';

interface ButtonProps {
	className?: string;
	href?: string;
}

const ButtonLink: FC<ButtonProps> = ({ className = '', href = '/', children }) => {
	return (
		<>
			<Container className={ className } to={href}>
				{ children }
			</Container>
		</>
	);
};

export default ButtonLink;