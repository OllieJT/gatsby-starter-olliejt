// eslint-disable-next-line
import { useState, useEffect } from "react"
import storage from "local-storage-fallback"
import { darkMode } from "../../utility/theme"


export default function useTheme(defaultTheme = { mode: "dark", color: darkMode }) {

	function getInitialTheme() {
		const savedTheme = storage.getItem("theme")
		return savedTheme ? JSON.parse(savedTheme) : defaultTheme
	}

	const [theme, _setTheme] = useState(getInitialTheme)

	useEffect(() => {
		storage.setItem("theme", JSON.stringify(theme))
	}, [theme])

	return {
		...theme,
		// eslint-disable-next-line
		setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
	}
}