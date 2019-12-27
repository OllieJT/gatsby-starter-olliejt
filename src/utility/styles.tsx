import { css } from 'styled-components';

export const cover = css`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	content: '';
`;

export const enableRichText = (isRestricted = false) => css`
	/* ALL */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	ol,
	dl,
	pre,
	legend {
		${isRestricted
			? `
			width: 100%;
			max-width: 96rem;
			padding-left: .8rem;
			padding-right: .8rem;
			margin-left: auto;
			margin-right: auto;
			`
			: `
			margin-left: ${props => props.theme.size.space.small};
			margin-right: ${props => props.theme.size.space.small};
			`}
	}
	iframe,
	figure,
	img,
	blockquote {
		display: block;
		margin: ${props => props.theme.size.space.small} auto;
		img {
			width: auto;
			margin: auto;
		}
	}

	/* TEXT */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 0.25em;
	}
	p {
		margin-top: 0.25em;
		margin-bottom: 1em;
		&:first-of-type {
			margin-top: 0.25em;
		}
		&:last-of-type {
			margin-bottom: 0.25em;
		}
	}

	/* BLOCK-QUOTES */
	blockquote {
		padding: ${props => props.theme.size.space.medium};
	}

	/* LISTS */
	ul,
	ol,
	dl {
		display: block;
		margin-top: ${props => props.theme.size.space.medium};
		margin-bottom: ${props => props.theme.size.space.medium};
		li,
		dt,
		dd {
			list-style-position: inside;
			margin-top: ${props => props.theme.size.space.smallest};
			margin-bottom: ${props => props.theme.size.space.smallest};
		}
		li,
		dt {
			color: ${props => props.theme.color.primary.medium};
			padding-left: ${props => props.theme.size.space.medium};
		}
		dd {
			color: ${props => props.theme.color.mono.one};
			opacity: 0.72;
			padding-left: ${props => props.theme.size.space.large};
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			display: inline;
			margin-left: ${props => props.theme.size.space.smallest};
			margin-right: 0;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
		}
		ul,
		ol,
		dl {
			margin-top: 0;
			padding-left: ${props => props.theme.size.space.medium};
			li {
				color: ${props => props.theme.color.mono.two};
			}
		}
		ul li {
			list-style-type: disc;
		}
	}
	ul li {
		list-style-type: square;
	}
	ol li {
		list-style-type: decimal;
	}
	.embedMedia {
		width: 100%;
		position: relative;
		&.embedYouTube {
			padding-bottom: 56.25%;
			iframe {
				${cover};
				position: absolute;
			}
		}
	}
	img,
	.embedMedia {
		display: block;
		max-width: 100%;
		margin: ${props => props.theme.size.space.medium} auto;
	}
	img {
		width: auto;
		height: auto;
	}
`;

export const FeatureWidgetStyles = css`
	position: relative;
	z-index: 5;
	display: block;
	align-self: stretch;
	perspective: 500px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	&:first-child {
		margin-bottom: ${props => props.theme.size.space.large};
	}
`;

export const FeatureContainerStyles = css`
	position: relative;
	z-index: 5;
	align-self: center;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	padding: ${props => props.theme.size.space.largest} 0;
	max-width: none;
	width: 100%;
	h1,
	h2 {
		max-width: 800px;
		margin: auto;
	}
	@media (max-width: 800px) {
		padding: ${props => props.theme.size.space.small} 0;
	}
`;
