import React from 'react';
import { getYoutubeID, IS_BROWSER } from '../utility/functions';

const config = require('../utility/config');

interface Props {
	url: string;
	isAutoplay: boolean;
	hasControls: boolean;
	hasAnnotations: boolean;
	isLooped: boolean;
	width: number;
	height: number;
	title: string;
}

export default ({
	url,
	width,
	height,
	title,
	isAutoplay,
	hasControls,
	hasAnnotations,
	isLooped,
}: Props) => {
	let thisSite = '';

	// var thisPage = '';

	if (IS_BROWSER) {
		thisSite = window.location.origin;
		// thisPage = window.location.href;
	} else {
		thisSite = config.url;
		// thisPage = config.url;
	}

	const ytVideoID = url && getYoutubeID(url);
	const ytAutoplay = `&amp;autoplay=${isAutoplay ? 1 : 0}`;
	const ytAontrols = `&amp;controls=${hasControls ? 1 : 0}`;
	const ytAnnotations = `&amp;iv_load_policy=${hasAnnotations ? 3 : 1}`;
	const ytLoop = `&amp;loop=${isLooped ? 1 : 0}`;

	const options = ytAutoplay + ytAontrols + ytAnnotations + ytLoop;

	return (
		<iframe
			width={width}
			height={height}
			name={title}
			title={title}
			id="youtube-player"
			src={`https://www.youtube.com/embed/${ytVideoID}?origin=${thisSite}/${options}&amp;modestbranding=1&amp;playsinline=1&amp;rel=0`}
			allow="autoplay"
			frameBorder="0"
			allowFullScreen
			allowTransparency
		/>
	);
};
