import React from "react"
import { ThemeConsumer } from "styled-components"

export default function ToggleMode() {
	return (<ThemeConsumer>{theme => (
		<button onClick={() => theme.setTheme(
			theme.mode === "dark"
				? { mode: "light" }
				: { mode: "dark" }
		)}>
			<h5>Toggle Mode</h5>
		</button>
	)}</ThemeConsumer>)
}