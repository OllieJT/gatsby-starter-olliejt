import React from "react"
import { ThemeConsumer } from "styled-components"
import { lightMode, darkMode } from "../../utility/theme"
import { emojiCursor } from "../../utility/functions"
import styled from "styled-components"



const ToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
	outline: none;
	border: 0px solid transparent;
	background-color: transparent;
	padding: var(--size-space-smallest) var(--size-space-small);
	font-size: 40px;
	overflow: hidden;
	.mode-container,.mode-moon{
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1)
	}
	.mode-container{
		position: relative;
		width: 1em;
		height: 1em;
		border-radius: 1em;
		background-color: ${props => props.theme.mode === "dark" ? "white" : "hsla(40, 100%, 60%,50%)"};
	}
	.mode-moon{
		position: absolute;
		top: .25em;
		left: .25em;
		bottom: .25em;
		right: .25em;
		width: .5em;
		height: .5em;
		background: var(--color-background);
		border-radius: 1em;
		background-color: ${props => props.theme.mode === "dark" ? "var(--color-background)" : "hsl(40, 100%, 60%)"};
		transform: ${props => props.theme.mode === "dark" ? "translateX(55%) translateY(-10%) scale(1.6)" : "scale(1)"};
	}
		cursor: ${props => props.theme.mode === "dark" ? emojiCursor("☀️") : emojiCursor("🌙")};
`

export default function ToggleMode() {
	return (<ThemeConsumer>{theme => (
		<ToggleButton onClick={() => theme.setTheme(
			theme.mode === "dark"
				? { mode: "light", color: lightMode}
				: { mode: "dark", color: darkMode}
		)}>
			<div className="mode-container">
				<div className="mode-moon"/>
			</div>
			{/* <h5>Toggle Mode: {theme.mode}</h5> */}
		</ToggleButton>
	)}</ThemeConsumer>)
}