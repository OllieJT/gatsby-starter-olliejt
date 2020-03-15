import { css } from 'styled-components';

export default css`
	/*
	--text-content-space-top: 1em;
	--text-content-space-bottom: 1em;
	--text-heading-space-top: 0.25em;
	--text-heading-space-bottom: 0.5em; */
	iframe,
	figure,
	img,
	blockquote {
		display: block;
		width: auto;
		height: auto;
		max-width: 100%;
		margin: var(--size-space-small) auto;
		img {
			width: auto;
			margin: auto;
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
			margin-top: var(--size-space-smallest);
			margin-bottom: var(--size-space-smallest);
		}
		li,
		dt {
			color: var(--color-primary-high);
			padding-left: 1em;
		}
		dd {
			color: var(--color-content-low);
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
			margin-left: var(--size-space-smallest);
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
				color: var(--color-primary-high);
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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		a {
			display: inline;
			color: var(--color-primary-high);
			&:hover {
				color: var(--color-primary-higher);
				text-decoration: underline;
			}
		}
		mark {
			color: var(--color-primary-higher);
			background-color: var(--color-primary-low);
		}
	}
	h1 {
		color: var(--color-content-high);
		font-size: var(--font-size-large-title);
		line-height: 1em;
		font-weight: var(--font-weight-bold);

		margin-top: 0;
		margin-bottom: 0;
	}
	h2 {
		color: var(--color-content-middle);
		font-size: var(--font-size-large-subtitle);
		line-height: 1.25em;

		margin-top: 0.25em;
		margin-bottom: 1em;
	}
	h3 {
		color: var(--color-content-high);
		font-size: var(--font-size-small-title);
		line-height: 1.25em;
		font-weight: var(--font-weight-medium);

		margin-top: 0.5em;
		margin-bottom: 0.25em;
	}
	h4 {
		color: var(--color-content-high);
		font-size: var(--font-size-small-subtitle);
		line-height: 1.5em;

		margin-top: 0.25em;
		margin-bottom: 1em;
	}
	h5 {
		color: var(--color-content-high);
		font-size: var(--font-size-content-title);
		line-height: 1.5em;
		font-weight: var(--font-weight-medium);

		margin-top: 0.5em;
		margin-bottom: 0.25em;
	}
	h6 {
		color: var(--color-primary-high);
		font-size: var(--font-size-small-label);
		line-height: 2em;
		font-weight: var(--font-weight-medium);
		letter-spacing: 0.2em;
		text-transform: uppercase;

		margin-top: 1.5em;
		margin-bottom: 1.5em;
	}
	p {
		color: var(--color-content-middle);
		font-size: var(--font-size-content-main);
		line-height: 1.75em;

		margin-top: 0.5em;
		margin-bottom: 1em;
	}
`;
