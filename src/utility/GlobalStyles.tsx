import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle(
	props => `
	${reset}

	* {
		box-sizing: border-box;
	}

	::before,
	::after {
		box-sizing: inherit;
	}
	html,body{
		width: 100%;
		max-width: 100vw;
		overflow-x: hidden;
	}

	html{
		font-size: 62.5%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		@media (max-width: 600px) {
			font-size: 50%;
		}
	}


	body{
		font-family: 'Open Sans', Roboto, Helvetica, Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: .8rem;
		line-height:  1em;
		height: auto;
		min-height: 100vh;
		background-color: ${
			props.theme.mode === 'light'
				? props.theme.mono.lightest
				: props.theme.mono.darkest
		};
		color: ${
			props.theme.mode === 'light'
				? props.theme.mono.darker
				: props.theme.mono.lighter
		};
		position: relative;
	}



	a{
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		color: ${
			props.theme.mode === 'light'
				? props.theme.primary.dark
				: props.theme.primary.light
		};;
		border-radius: .25em;
		transition: all .16s ease-out;

		&:hover,&:focus{
			color: ${
				props.theme.mode === 'light'
					? props.theme.primary.light
					: props.theme.primary.dark
			};
		}
	}



	h1,h2,h3,h4,h5,h6,p{
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		font-weight: 400;
		&strong,&b{font-weight: 700}
	}
	h1,h2,h3,h4,h5,h6,button{
		color: ${
			props.theme.mode === 'light'
				? props.theme.mono.darkest
				: props.theme.mono.lightest
		};
	}
	h1 {
		font-size: 6em;
		line-height:  1.1em;
		}
	h2 {
		font-size:  5em;
		line-height:  1.2em;
		}
	h3,h4 {
		font-size:  4em;
		line-height:  1.3em;
		}
	h5 {
		font-size:  3em;
		line-height:  1.4em;
	}
	h6 {
		font-size:  2em;
		line-height:  1.4em;
	}
	p,li,dt,dd,button{
		font-size: 2em;
		line-height:  1.66em;
	}
	h1,h3,h5,h6{
		font-weight: 700;
		&strong,&b{font-weight: 800}
	}
	h6,button {
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}







`,
);

export default GlobalStyle;
