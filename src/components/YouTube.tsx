import React from "react"
import { IS_BROWSER, getYoutubeID } from "../utility/functions"
const config = require("../utility/config")

interface Props {
	url: string,
	isAutoplay: boolean,
	hasControls: boolean,
	hasAnnotations: boolean,
	isLooped: boolean,
	width: number,
	height: number,
	title: string,
}

export const Video = ({ url, width, height, title, isAutoplay, hasControls, hasAnnotations, isLooped }: Props) => {
	var thisSite = ""
	//var thisPage = '';
	if (IS_BROWSER) {
		thisSite = window.location.origin
		//thisPage = window.location.href;
	} else {
		thisSite = config.url
		//thisPage = config.url;
	}

	const yt_videoID = url && getYoutubeID(url)
	const yt_autoplay = `&amp;autoplay=${isAutoplay ? 1 : 0}`
	const yt_controls = `&amp;controls=${hasControls ? 1 : 0}`
	const yt_annotations = `&amp;iv_load_policy=${hasAnnotations ? 3 : 1}`
	const yt_loop = `&amp;loop=${isLooped ? 1 : 0}`

	const options = yt_autoplay + yt_controls + yt_annotations + yt_loop

	return (
		<iframe
			width={width}
			height={height}
			name={title}
			title={title}
			id="youtube-player"
			type="text/html"
			src={`https://www.youtube.com/embed/${yt_videoID}?origin=${thisSite}/${options}&amp;modestbranding=1&amp;playsinline=1&amp;rel=0`}
			allow="autoplay"
			frameBorder="0"
			allowFullScreen="1"
			allowTransparency="1"
		/>
	)
}

export default Video
