/* eslint-disable no-shadow */
import storage from 'local-storage-fallback';
import { useEffect, useState } from 'react';

export default function useTheme(
	defaultTheme = {
		mode: 'dark',
	}
) {
	function getInitialTheme() {
		const savedTheme = storage.getItem('theme');

		return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
	}

	const [theme, _setTheme] = useState(getInitialTheme);

	useEffect(() => {
		storage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	return {
		...theme,
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore: Unreachable code error
		setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
	};
}
