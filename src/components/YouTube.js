import React from "react"
import PropTypes from "prop-types"
import { IS_BROWSER, getYoutubeID } from "../utility/functions"
// eslint-disable-next-line
const website = require("../utility/config")

export const Video = ({ url, width, height, title, isAutoplay, hasControls, hasAnnotations, isLooped }) => {
	var thisSite = ""
	//var thisPage = '';
	if (IS_BROWSER) {
		thisSite = window.location.origin
		//thisPage = window.location.href;
	} else {
		thisSite = website.url
		//thisPage = website.url;
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

Video.propTypes = {
	url: PropTypes.string.isRequired,
	isAutoplay: PropTypes.bool,
	hasControls: PropTypes.bool,
	hasAnnotations: PropTypes.bool,
	isLooped: PropTypes.bool,

	width: PropTypes.number,
	height: PropTypes.number,

	title: PropTypes.string,
}
Video.defaultProps = {
	isAutoplay: false,
	hasControls: false,
	hasAnnotations: true,
	isLooped: true,
	width: 960,
	height: 540,

	title: null,
}

export default Video
