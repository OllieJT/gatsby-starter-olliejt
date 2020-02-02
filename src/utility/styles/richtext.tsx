import { css } from 'styled-components';

export default css`
	--text-content-space-top: 1em;
	--text-content-space-bottom: 1em;
	--text-heading-space-top: 0.25em;
	--text-heading-space-bottom: 0.5em;
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
			color: var(--color-text-primary-medium);
			padding-left: 1em;
		}
		dd {
			color: var(--color-text-mono-dim);
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
				color: var(--color-text-primary-medium);
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
`;
