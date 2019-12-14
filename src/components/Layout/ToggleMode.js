import React from "react"
import { ThemeConsumer } from "styled-components"
import { lightMode,darkMode} from "../../utility/theme"

export default function ToggleMode() {
	return (<ThemeConsumer>{theme => (
		<button onClick={() => theme.setTheme(
			theme.mode === "dark"
				? { mode: "light", color: lightMode}
				: { mode: "dark", color: darkMode}
		)}>
			<h5>Toggle Mode: {theme.mode}</h5>
		</button>
	)}</ThemeConsumer>)
}