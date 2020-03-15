import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { themeDark, themeLight } from './theme';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
	${reset}

	:root {
		${props => (props.theme.mode === 'light' ? themeLight : themeDark)};
		${typography};

		--text-space-top: 0;
		--text-space-bottom: 0;

		--size-space-smallest: 0.8rem;
		--size-space-small: 1.6rem;
		--size-space-medium: 2.4rem;
		--size-space-large: 2.4rem;
		--size-space-largest: 8rem;

		--size-container-main: 88rem;

		--transition-primary: cubic-bezier(0, 0.8, 	0.2, 0.9); // Punchy
		--transition-secondary: cubic-bezier(0, 2, 0.5, 0.5); // Bouncy
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
	}

	html {
		font-size: 62.5% !important;;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		@media (max-width: 600px) {
			font-size: 50%;
		}
	}

	body {
		font-family: var(--font-family), -apple-system, BlinkMacSystemFont,
			sans-serif;
		font-style: normal;
		font-weight: var(--font-weight-regular);
		font-size: var(--font-size-content-main);
		line-height: 1em;
		height: auto;
		min-height: 100vh;
		background-color: var(--color-level-bottom);
		color: var(--color-content-middle);
		position: relative;
	}

	a {
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		color: var(--color-primary-middle);
		transition: color 0.16s ease-out;

		&:hover,
		&:focus {
			color: var(--color-primary-higher);
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,p {
		margin-top: var(--text-space-top);
		margin-bottom: var(--text-space-bottom);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-weight: var(--font-weight-regular);

		svg {
			font-size: 1.25em;
			margin: auto 0;
		}


		strong,
		b {
			font-weight: var(--font-weight-medium);
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

		mark {
			color: var(--color-primary-higher);
			background-color: var(--color-primary-low);
		}
		code {
			font-style: italic;
			color: var(--color-content-high);
			background-color: var(--color-level-low);
			padding: 0 0.2em;
			font-size: 0.8em;
			line-height: 1em;
			padding: 0.3em;
			border-radius: 0.25em;
			font-weight: var(--font-weight-medium);
		}

		em {
			color: var(--color-primary-high);
		}
		u {
			text-decoration: underline;
		}
		i {
			font-style: italic;
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
	h6 {
		color: var(--color-content-high);
		line-height: 1em;
	}
	h1 {
		font-size: var(--font-size-large-title);
	}
	h2 {
		font-size: var(--font-size-large-subtitle);
	}
	h3 {
		font-size: var(--font-size-small-title);
	}
	h4 {
		font-size: var(--font-size-small-subtitle);
	}
	h5 {
		font-size: var(--font-size-large-label);
	}
	h6 {
		font-size: var(--font-size-small-label);
	}
	p{
		color: var(--color-content-middle);
		line-height: 1.5em;
		font-size: var(--font-size-content-main);
	}
`;

export default GlobalStyle;
