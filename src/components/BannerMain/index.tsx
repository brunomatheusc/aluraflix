import React, { FC } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { 
	BannerMainContainer, ContentAreaContainer, ContentAreaContainerItem, ContentAreaContainerCategory, 
	ContentAreaContainerTitle, ContentAreaContainerDescription, WatchButton } 
from './styles';

function getYouTubeId(youtubeURL: string) {
	return youtubeURL
		.replace(
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
			'$7',
		);
}

interface IProps {
	videoTitle: string;
	videoDescription: string;
	url: string;
}

const BannerMain: FC<IProps> = ({ videoTitle, videoDescription, url }) => {
	const youTubeID = getYouTubeId(url);
	const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

	return (
		<BannerMainContainer backgroundImage={bgUrl}>
			<ContentAreaContainer>
				<ContentAreaContainerItem>
					<ContentAreaContainerTitle>
						{videoTitle}
					</ContentAreaContainerTitle>

					<ContentAreaContainerDescription>
						{videoDescription}
					</ContentAreaContainerDescription>
				</ContentAreaContainerItem>

				<ContentAreaContainerItem>
					<VideoIframeResponsive
						youtubeID={youTubeID}
					/>
					<WatchButton>
						Assistir
          </WatchButton>
				</ContentAreaContainerItem>
			</ContentAreaContainer>
		</BannerMainContainer>
	);
}

export default BannerMain;