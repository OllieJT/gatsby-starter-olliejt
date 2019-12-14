import { createGlobalStyle } from "styled-components"
//import { setThemeColor, setScaleSize } from "./functions"
import reset from "styled-reset"
//import { color } from "./theme"



const GlobalStyle = createGlobalStyle`
	${props => console.log(props.theme.color)}
	${reset}
	:root {
		--color-primary-light: ${props => props.theme.color.primary[0]};
		--color-primary-medium: ${props => props.theme.color.primary[1]};
		--color-primary-dark: ${props => props.theme.color.primary[2]};
		--color-text-light: ${props => props.theme.color.content[0]};
		--color-text-medium: ${props => props.theme.color.content[1]};
		--color-text-dark: ${props => props.theme.color.content[2]};
		--color-level-lightest: ${props => props.theme.color.mono[0]};
		--color-level-light: ${props => props.theme.color.mono[1]};
		--color-level-medium: ${props => props.theme.color.mono[2]};
		--color-level-dark: ${props => props.theme.color.mono[3]};
		--color-level-darkest: ${props => props.theme.color.mono[4]};
		--color-background: ${props => props.theme.color.mono[0]};
		--color-accent: ${props => props.theme.color.mono[2]};

		--size-space-smallest: .8rem;
		--size-space-small: 1.6rem;
		--size-space-medium: 2.4rem;
		--size-space-large: 4rem;
		--size-space-largest: 8rem;

		--size-container-content: calc(1200px - 4.8rem);
		--size-container-edges: 2.4rem;

		--font-weight-normal: 400;
		--font-weight-medium: 700;
		--font-weight-bold: 700;

		--border-radius-small: .4rem;
		--border-radius-medium: 1.6rem;
		--border-radius-large: 4rem;

		--size-text-p: 2rem;
		--size-text-h6: 1.4rem;
		--size-text-h5: 2.4rem;
		--size-text-h4: 4rem;
		--size-text-h3: 4rem;
		--size-text-h2: 5.6rem;
		--size-text-h1: 7.2rem;
	}

	* {
		box-sizing: border-box;
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
		@media (max-width: 600px) {
			font-size: 48%;
		}
	}


	body{
		font-family:  Roboto, Helvetica, Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif,Bai Jamjuree;
		font-style: normal;
		font-weight: var(--font-weight-normal);
		height: auto;
		min-height: 100vh;
		width: 100%;
		max-width: 100vw;
		background-color: var(--color-background);
		color: var(--color-text-medium);
		position: relative;
		line-height: 1;
	}


	a{
		display: inline-block;
		text-decoration: none;
		text-emphasis: none;
		cursor: pointer;
		color: var(--color-primary-medium);
		&:hover{
			color: var(--color-primary-dark);
		}
	}


	h1,h2,h3,h4,h5,h6,p{
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
	}
	h1,h2,h3,h4,h5,h6{
		color: var(--color-text-light);
	}
	h1 {
		font-size: 4.8rem;
		line-height:  5.6rem;
		font-weight: var(--font-weight-medium);
		&strong,&b{font-weight: var(--font-weight-bold)}
		}
	h2 {
		font-size: 4.4rem;
		line-height:  5.6rem;
		font-weight: var(--font-weight-normal);
		&strong,&b{font-weight: var(--font-weight-medium)}
		}
	h3 {
		font-size: 3.2rem;
		line-height:  4rem;
		font-weight: var(--font-weight-medium);
		&strong,&b{font-weight: var(--font-weight-bold)}
		}
	h4 {
		font-size: 2.8rem;
		line-height:  4rem;
		font-weight: var(--font-weight-normal);
		&strong,&b{font-weight: var(--font-weight-medium)}
		}
	h5 {
		font-size: 2rem;
		line-height:  3.2rem;
		font-weight: var(--font-weight-medium);
		&strong,&b{font-weight: var(--font-weight-bold)}
		}
	h6 {
		font-size:  1.2rem;
		line-height:  2.4rem;
		font-weight: var(--font-weight-medium);;
		&strong,&b{font-weight: var(--font-weight-bold)}
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	p,li,dt,dd{
		font-size: 1.6rem;
		line-height:  2.4rem;
		font-weight: var(--font-weight-normal);
		color: var(--color-text-medium);
		&strong,&b{font-weight: var(--font-weight-medium)}
	}
`

export default GlobalStyle
