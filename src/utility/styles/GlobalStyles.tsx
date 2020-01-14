import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { darkTheme, lightTheme } from './themes';

const GlobalStyle = createGlobalStyle`
	${reset}

	:root {
		${props => (props.theme.mode === 'light' ? lightTheme : darkTheme)};

		--text-content-space-top: 0;
		--text-content-space-bottom: 0;

		--text-heading-space-top: 0;
		--text-heading-space-bottom: 0;

		--size-space-smallest: 0.8rem;
		--size-space-small: 1.6rem;
		--size-space-medium: 2.4rem;
		--size-space-large: 2.4rem;
		--size-space-largeest: 8rem;

		--size-container-main: 80rem;
	}

	* {
		box-sizing: border-box;
	}

	::before,
	::after {
		box-sizing: inherit;
	}
	html,
	body {
		width: 100%;
		max-width: 100vw;
		overflow-x: hidden;
	}

	html {
		font-size: 62.5%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		@media (max-width: 600px) {
			font-size: 50%;
		}
	}

	body {
		font-family: 'Open Sans', Roboto, Helvetica, Segoe UI, -apple-system, BlinkMacSystemFont,
			sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 0.8rem;
		line-height: 1em;
		height: auto;
		min-height: 100vh;
		background-color: var(--color-background-mono-dimmer);
		color: var(--color-text-mono-medium);
		position: relative;
	}

	a {
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		color: var(--color-text-primary-dark);
		transition: all 0.16s ease-out;

		&:hover,
		&:focus {
			color: var(--color-text-primary-bright);
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: var(--text-heading-space-top);
		margin-bottom: var(--text-heading-space-bottom);
	}
	p {
		margin-top: var(--text-content-space-top);
		margin-bottom: var(--text-content-space-bottom);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-weight: 400;
		&strong,
		&b {
			font-weight: 700;
		}

		svg {
			font-size: 1.25em;
			margin: auto 0;
		}

		span {
		}

		strong,
		b {
			font-weight: 700;
		}
		strong {
			color: var(--color-text-mono-bright);
		}
		b {
		}

		sub,
		sup,
		small {
			//. Specified in % so that the sup/sup is the right size relative to the surrounding text
			font-size: 75%;

			// Zero out the line-height so that it doesn't interfere with the positioning that follows */
			line-height: 0;

			// Where the magic happens: makes all browsers position the sup/sup properly, relative to the surrounding text */
			position: relative;

			// Note that if you're using Eric Meyer's reset.css, this is already set and you can remove this rule
			vertical-align: baseline;
		}
		sub {
			// Move the subscripted text down, but only half as far down as the superscript moved up
			bottom: -0.25em;
		}
		sup {
			// Move the superscripted text up
			top: -0.5em;
		}
		small {
			font-size: 85%;
		}

		mark,
		code {
			padding: 0 0.2em;
			font-size: 0.8em;
			line-height: 1em;
			padding: 0.3em;
			border-radius: 0.25em;
			font-weight: 700;
		}
		mark {
			color: var(--color-text-primary-bright);
			background-color: var(--color-background-primary-dim);
		}
		code {
			font-style: italic;
			color: var(--color-text-mono-bright);
			background-color: var(--color-background-mono-dim);
		}

		em {
			color: var(--color-text-primary-medium);
		}
		u {
			text-decoration: underline;
		}
		i {
			font-style: italic;
		}
		time {
		}

		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		color: var(--color-text-mono-bright);
	}
	h1 {
		font-size: 6em;
		line-height: 1.1em;
	}
	h2 {
		font-size: 5em;
		line-height: 1.2em;
	}
	h3,
	h4 {
		font-size: 4em;
		line-height: 1.3em;
	}
	h5 {
		font-size: 3em;
		line-height: 1.4em;
	}
	h6 {
		font-size: 1.5em;
		line-height: 1.4em;
	}
	p,
	li,
	dt,
	dd,
	button {
		font-size: 2em;
		line-height: 1.66em;
	}
	h1,
	h3,
	h5,
	h6 {
		font-weight: 700;
		&strong,
		&b {
			font-weight: 800;
		}
	}
	h6,
	button {
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
`;

export default GlobalStyle;
