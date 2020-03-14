import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import SEO from '../components/SEO';
import ToggleTheme from '../components/ToggleMode';
import Provider from './Provider';

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
	> main {
		display: block;
		width: 100%;
		height: auto;
		flex-grow: 1;
		flex-shrink: 0;
		overflow-x: hidden;
	}
`;

export default ({ children, hasSEO }: Props) => (
	<Provider>
		{!hasSEO && <SEO />}
		<PageContainer role="group">
			{/* DELETE BELOW */}
			<Menu />
			<ToggleTheme />
			{/* DELETE ABOVE */}

			<main id="reach-skip-nav">{children}</main>
			<Footer />
		</PageContainer>
	</Provider>
);
