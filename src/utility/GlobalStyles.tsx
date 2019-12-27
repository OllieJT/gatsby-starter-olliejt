import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
	}

	::before,
	::after {
		box-sizing: inherit;
	}

	html{
		width: 100%;
		max-width: 100vw;
		overflow-x: hidden;
		font-size: 62.5%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		/* @media (max-width: 600px) {
			//font-size: 48%;
		} */
	}


	body{
		font-family: Rubik, Roboto, Helvetica, Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif;
		font-style: normal;
		font-weight: normal;
		height: auto;
		min-height: 100vh;
		width: 100%;
		max-width: 100vw;
		background-color: ${props => props.theme.color.mono.six};
		color: ${props => props.theme.color.mono.one};
		position: relative;
		line-height: 1;
	}


	/**********
	Links
	**********/
	a{
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		color: ${props => props.theme.color.primary.medium};
		&:hover{
			color: ${props => props.theme.color.primary.darkest};
		}
		&:focus{
			color: ${props => props.theme.color.primary.darkest};
			text-decoration: underline;
		}
		&:visited{
			color: ${props => props.theme.color.primary.lightest};
		}
	}

	/**********
	Typography
	**********/
	h1,h2,h3,h4,h5,h6,p{
		color: ${props => props.theme.color.mono.one};
		font-weight: 400;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		line-height: 1.15em;
		&strong,&b{font-weight: 600}
	}
	h1 {
		font-size: 4.8rem;
		line-height:  5.6rem;
		font-weight: 500;
		&strong,&b{font-weight: 600}
		}
	h2 {
		font-size: 4.4rem;
		line-height:  5.6rem;
		font-weight: 400;
		&strong,&b{font-weight: 500}
		}
	h3 {
		font-size: 3.2rem;
		line-height:  4rem;
		font-weight: 500;
		&strong,&b{font-weight: 600}
		}
	h4 {
		font-size: 2.8rem;
		line-height:  4rem;
		font-weight: 400;
		&strong,&b{font-weight: 500}
		}
	h5 {
		font-size: 2rem;
		line-height:  3.2rem;
		font-weight: 500;
		&strong,&b{font-weight: 600}
		}
	h6 {
		font-size:  1.2rem;
		line-height:  2.4rem;
		font-weight: 500;;
		&strong,&b{font-weight: 600}
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	p,li,dt,dd{
		font-size: 1.6rem;
		line-height:  2.4rem;
		font-weight: 400;
		color: ${props => props.theme.color.content.medium};
		&strong,&b{font-weight: 500}
	}







`;

export default GlobalStyle;
