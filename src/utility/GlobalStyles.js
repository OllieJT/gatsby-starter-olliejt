import { createGlobalStyle } from "styled-components"
import { color, size, layout } from "./theme"

const GlobalStyle = createGlobalStyle`
	:root {
		--colour-primary-050: #FFC2C2;
		--colour-primary-100: #FF9999;
		--colour-primary-200: #FF7A70;
		--colour-primary-300: #FF5447;
		--colour-primary-400: #FF3D1F;
		--colour-primary-500: #FF1100;
		--colour-primary-600: #B81800;
		--colour-primary-700: #8F0013;
		--colour-primary-800: #66000E;

		--colour-secondary-050: #C2C2FF;
		--colour-secondary-100: #9999FF;
		--colour-secondary-200: #9585FF;
		--colour-secondary-300: #6047FF;
		--colour-secondary-400: #5A1FFF;
		--colour-secondary-500: #3300FF;
		--colour-secondary-600: #1E00E0;
		--colour-secondary-700: #0C00B8;
		--colour-secondary-800: #11118F;

		--colour-level-000: hsl(0,0,100);
		--colour-level-050: hsl(0,0,70);
		--colour-level-100: hsl(0,0,60);
		--colour-level-200: hsl(0,0,50);
		--colour-level-300: hsl(0,0,40);
		--colour-level-400: hsl(0,0,30);
		--colour-level-500: hsl(0,0,20);
		--colour-level-600: hsl(0,0,15);
		--colour-level-700: hsl(0,0,10);
		--colour-level-800: hsl(0,0,5);
		--colour-level-900: hsl(0,0,0);
	}
	body,html{
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		&::-webkit-scrollbar{
			display: none;
		}
	}

	html{
		width: 100%;
		max-width: 100vw;
		overflow-x: hidden;
		font-size: 62.5%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		@media (max-width: 600px) {
			font-size: 48%;
		}
	}
	body{
		font-family: Chakra Petch, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		line-height: 0;
		height: auto;
		min-height: 100vh;
		width: 100%;
		max-width: 100vw;
		background-color: ${layout.background};
		color: ${layout.text.content};
		position: relative;
		overflow: visible;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		*{
			box-sizing: border-box;
		}
	}

	/**********
	Links
	**********/
	a{
		display: inline-block;
		text-decoration: none;
		color: ${layout.link.before};
		&:hover{
			color: ${layout.link.after};
		}
	}

	/**********
	Fallback
	**********/
	h1,h2,h3,h4,h5,h6,p,button{
		font-weight: 400;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		line-height: 1.2em;
		&strong,&b{font-weight: 600}
	}
	h1,h2,h3,h4,h5,h6{color: ${layout.text.title}}
	h1 {font-size: 6.4rem}
	h2 {font-size: 5.6rem}
	h3 {font-size: 4.8rem}
	h4 {font-size: 3.2rem}
	h5 {font-size: 2.4rem}
	h6 {
		font-size: 1.6rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	p,li,p{font-size:2rem}

	article{
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			display: inline;
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
			margin: ${size.medium} 0;
		}
		p {
			margin: ${size.xsmall} 0;
		}
		ul,
		li {
			display: block;
			list-style-type: disc; /* decimal-leading-zero - decimal - disc - circle - square*/
			list-style-position: inside;
			list-style-image: none;
		}
		li {
			flex-direction: row;
			padding: 0.8rem 0;
		}
		a,
		em {
			color: ${color.primary["400"]};
		}
		a:hover {
			color: ${props => props.secondaryColour};
		}
	}

	blockquote{
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		-webkit-margin-start: 0;
		-webkit-margin-end: 0;
	}
	ul,ol{
		display: inline-block;
		list-style: none;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		-webkit-margin-start: 0;
		-webkit-margin-end: 0px;
		-webkit-padding-start: 0;
	}




	/*  UPDATE  */

	header{
		position: relative;
		width: 100vw;
		max-width: 100%;
	}
	.container{
		position: relative;
		z-index: 10;
		display: block;
		width: 100%;
		max-width: ${layout.width.contentMinusGutter};
		padding: ${layout.width.gutter};
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
      @media (max-width: 600px) {
		  max-width: auto;
		  padding: 1.6rem;
      }
	}
`

export default GlobalStyle
