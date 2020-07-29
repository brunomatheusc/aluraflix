import React, { FC } from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import { Container } from './styles';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const Home: FC = () => {
	return (
		<>
			<Container>
				<BannerMain 
					videoTitle={ dadosIniciais.categorias[0].videos[0].titulo }
					url={ dadosIniciais.categorias[0].videos[0].url }
					videoDescription="O que é frontend?"
				>
				</BannerMain>

				<Carousel 
					ignoreFirstVideo
					category={dadosIniciais.categorias[0]}
				/>

				<Carousel 
					category={dadosIniciais.categorias[1]}
				/>

				<Carousel 
					category={dadosIniciais.categorias[2]}
				/>

				<Carousel 
					category={dadosIniciais.categorias[3]}
				/>

				<Carousel 
					category={dadosIniciais.categorias[4]}
				/>

				<Carousel 
					category={dadosIniciais.categorias[5]}
				/>
			</Container>
		</>
	);
};

export default Home;