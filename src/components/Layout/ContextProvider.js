import React,{useState} from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../../utility/GlobalStyles"
import {ThemeProvider} from "styled-components"


const ContextProvider = ({ children }) => {
	const [theme, setTheme] = useState({ mode: "light" })

	console.log(theme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
			<button onClick={e => setTheme(
				theme.mode === "dark"
					? {mode: "light"}
					: {mode: "dark"}
			)}><h5>Toggle Theme</h5></button>
		</ThemeProvider>
	)
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ContextProvider
