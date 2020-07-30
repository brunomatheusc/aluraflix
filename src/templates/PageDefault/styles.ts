import styled from 'styled-components';

export const Container = styled.div`
	background: #141414;
`;

export const Main = styled.main`
	background-color: var(--black);
	color: var(--white);
	flex: 1;
	padding-top: 94px;

	@media(max-width: 800px) {
		padding-top: 40px;
	}

	@media(min-width: 1344px) {
		padding-top: 94px;
	}
`;
