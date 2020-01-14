import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../utility/styles/GlobalStyles';
import useTheme from './useTheme';

interface Props {
	children: ReactNode;
}

export default ({ children }: Props) => {
	const theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
