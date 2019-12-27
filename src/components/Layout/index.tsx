import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../utility/GlobalStyles';
import Footer from './Footer';
import Menu from './Menu';
import SEO from './SEO';
import useTheme from './useTheme';

interface Props {
	children: ReactNode;
	hasSEO?: boolean;
}

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	align-items: stretch;
	justify-content: space-between;
`;
const ContentContainer = styled.main`
	display: flex;
	width: 100%;
	height: auto;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	flex-grow: 1;
	flex-shrink: 0;
`;

const Layout = ({ children, hasSEO }: Props) => {
	const theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{!hasSEO && <SEO title="Hello World" />}
			<PageContainer>
				<Menu />
				<ContentContainer id="reach-skip-nav">
					{children}
				</ContentContainer>
				<Footer />
			</PageContainer>
		</ThemeProvider>
	);
};

export default Layout;
