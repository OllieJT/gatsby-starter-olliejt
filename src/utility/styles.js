import { css } from "styled-components"

export const cover = css`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
`

export const enableRichText = isRestricted => css`
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
			max-width: var(--content-width);
			padding-left: var(--content-padding);
			padding-right: var(--content-padding);
			margin-left: auto;
			margin-right: auto;
			`
			: `
			margin-left: var(--content-padding);
			margin-right: var(--content-padding);
			`}
	}
	iframe,
	figure,
	img,
	blockquote {
		display: block;
		margin: var(--content-padding) auto;
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
		padding: var(--size-space-medium);
	}

	/* LISTS */
	ul,
	ol,
	dl {
		display: block;
		margin-top: var(--size-space-medium);
		margin-bottom: var(--size-space-medium);
		li,
		dt,
		dd {
			list-style-position: inside;
			margin-top: var(--size-space-tiny);
			margin-bottom: var(--size-space-tiny);
		}
		li,
		dt {
			color: var(--color-text-title);
			padding-left: var(--size-space-medium);
		}
		dd {
			color: var(--color-text-content);
			opacity: 0.72;
			padding-left: var(--size-space-large);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			display: inline;
			margin-left: var(--size-space-tiny);
			margin-right: 0;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
		}
		ul,
		ol,
		dl {
			margin-top: 0;
			padding-left: var(--size-space-medium);
			li {
				color: var(--color-text-content);
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
		margin: var(--size-space-medium) auto;
	}
	img {
		width: auto;
		height: auto;
	}
`
