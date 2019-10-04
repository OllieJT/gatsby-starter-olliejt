import { createGlobalStyle } from "styled-components"
import { setThemeColor, setScaleSize } from "./functions"
//import "./reset.css"

const GlobalStyle = createGlobalStyle`
	:root {
		${setThemeColor("default")};
		${setScaleSize("default")};
		--content-width: calc(1200px - 4.8rem);
		--content-padding: 2.4rem;
		--content-gutter: .8rem;

		--screen-desktop: '960px';
		--screen-tablet: '800px';
		--screen-mobile: '480px';

		--text-weight-normal: 400;
		--text-weight-medium: 500;
		--text-weight-bold: 500;

		--border-radius-small: .4rem;
		--border-radius-medium: .8rem;
		--border-radius-large: 2.4rem;
	}

	* {
		box-sizing: border-box;
	}

	::before,
	::after {
		box-sizing: inherit;
	}


	html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
		display: block;
	}
	ol,
	ul,dl {
		list-style: none;
	}
	blockquote,
	q {
		quotes: '"' '"';
		padding: var(--size-space-tiny);
		background-color: var(--color-primary-800);
		color: var(--color-primary-100);
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		display: inline;
		font-weight: var(--text-weight-bold);
		content: '"';
	}
	blockquote:before,
	blockquote:after {
		font-size: var(--size-text-4);
	}
	q:before,
	q:after {
		font-size: var(--size-text-2);
	}
	hr{
		border-color: var(--color-level-200)
	}
	strong{
		color: var(--color-text-title)
	}
	i {
		font-style: italic;
	}
	b{
		font-weight: var(--text-weight-bold)
	}
	mark{    background-color: var(--color-primary-200);
    color: var(--color-level-900);}

	sub, sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
		}

	sup {
	/* Move the superscripted text up */
	top: -0.5em;
	}

	sub {
	bottom: -0.25em;
	}
	small{
		font-size: 72%;
		text-transform: uppercase;
		letter-spacing: .1%;
		font-weight: var(--text-weight-bold);
		opacity: .8;
	}
	kbd{
		display: inline-block;
		padding: 0 var(--size-space-tiny);
		margin: 0 var(--size-space-tiny);
		border-radius: var(--border-radius-medium);
		border: 1px solid var(--color-level-200);
		background-color: var(--color-level-700);
	}
	code{
		font-family: courier;
		font-size: .8em;
		letter-spacing: 0.1em;
		font-weight: var(--text-weight-bold);
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/**********
	Forms
	**********/

	button,
	input,
	optgroup,
	select,
	textarea {
		-webkit-appearance: none;
		appearance: none;
		vertical-align: middle;
		color: inherit;
		font: inherit;
		border: inherit;
		background: transparent;
		padding: 0;
		margin: 0;
		outline: 0;
		border-radius: 0;
		text-align: inherit;
	}

	[type="checkbox"] {
		-webkit-appearance: checkbox;
		appearance: checkbox;
	}

	[type="radio"] {
		-webkit-appearance: radio;
		appearance: radio;
	}

	button,
	input {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		cursor: pointer;
		-webkit-appearance: none;
		appearance: none;
	}

	button[disabled],
	[type="button"][disabled],
	[type="reset"][disabled],
	[type="submit"][disabled] {
		cursor: default;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	button:-moz-focusring,
		[type="button"]:-moz-focusring,
		[type="reset"]:-moz-focusring,
		[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	fieldset {
		margin: 0;
		padding: 0;
		border: 0;
		min-width: 0;
	}

	legend {
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}

	progress {
		vertical-align: baseline;
	}

	textarea {
		overflow: auto;
	}

	[type="checkbox"],
	[type="radio"] {
		padding: 0; /* 1 */
	}


	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	[type="search"] {
		outline-offset: -2px; /* 1 */
	}


	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button; /* 1 */
		font: inherit; /* 2 */
	}


	label[for] {
		cursor: pointer;
	}


	/**********
	Embedded content
	**********/

	img {
		border-style: none;
		vertical-align: bottom;
	}

	embed,
	object,
	iframe {
		border: 0;
		vertical-align: bottom;
	}

	[hidden] {
		display: none;
	}


	/**********
	Globals
	**********/

	html{
		width: 100%;
		max-width: 100vw;
		overflow-x: hidden;
		font-size: 62.5%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		@media (max-width: 600px) {
			font-size: 48%;
		}
	}


	body{
		font-family: Chakra Petch, Roboto, Helvetica, Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif;
		font-style: normal;
		font-weight: var(--text-weight-normal);
		height: auto;
		min-height: 100vh;
		width: 100%;
		max-width: 100vw;
		background-color: var(--color-page-background);
		color: var(--color-text-content);
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
		color: var(--color-link-hover);
		&:hover{
			color: var(--color-link-resting);
		}
	}

	/**********
	Typography
	**********/
	h1,h2,h3,h4,h5,h6,p{
		color: var(--color-text-content);
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		line-height: 1.15em;
	}
	h1 {
		font-size:  var(--size-text-6);
		line-height:  var(--size-line-6);
		font-weight: var(--text-weight-medium);
		&strong,&b{font-weight: var(--text-weight-bold)}
		}
	h2 {
		font-size:  var(--size-text-5);
		line-height:  var(--size-line-5);
		font-weight: var(--text-weight-normal);
		&strong,&b{font-weight: var(--text-weight-medium)}
		}
	h3 {
		font-size:  var(--size-text-4);
		line-height:  var(--size-line-4);
		font-weight: var(--text-weight-medium);
		&strong,&b{font-weight: var(--text-weight-bold)}
		}
	h4 {
		font-size:  var(--size-text-4);
		line-height:  var(--size-line-4);
		font-weight: var(--text-weight-normal);
		&strong,&b{font-weight: var(--text-weight-medium)}
		}
	h5 {
		font-size:  var(--size-text-3);
		line-height:  var(--size-line-3);
		font-weight: var(--text-weight-medium);
		&strong,&b{font-weight: var(--text-weight-bold)}
		}
	h6 {
		font-size:  var(--size-text-1);
		line-height:  var(--size-line-1);
		font-weight: var(--text-weight-medium);;
		&strong,&b{font-weight: var(--text-weight-bold)}
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	p,li,dt,dd{font-size: var(--size-text-2);
		line-height:  var(--size-line-2);
		font-weight: var(--text-weight-normal);
		&strong,&b{font-weight: var(--text-weight-medium)}
	}

	ul,ol,dl,blockquote{
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		-webkit-margin-start: 0;
		-webkit-margin-end: 0px;
		-webkit-padding-start: 0;
		-webkit-padding-end: 0;
	}







`

export default GlobalStyle
