// eslint-disable-next-line
import React, { useState, useEffect } from "react"
import storage from "local-storage-fallback"

export default function useTheme(defaultTheme = { mode: "dark" }) {

	const [theme,_setTheme] = useState(getInitialTheme)

	function getInitialTheme() {
		const savedTheme = storage.getItem("theme")
		return savedTheme ? JSON.parse(savedTheme) : defaultTheme
	}

	useEffect(() => {
		storage.setItem("theme", JSON.stringify(theme))
	}, [theme])

	return {
		...theme,
		// eslint-disable-next-line
		setTheme: ({setTheme,...theme}) => _setTheme(theme)
	}
}