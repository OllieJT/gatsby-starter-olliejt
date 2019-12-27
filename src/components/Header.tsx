import React from 'react';
import styled from 'styled-components';

import { styledContainer } from '../utility/styles';

const StyledHeader = styled.footer`
	${styledContainer(true)}
`;

const Header = () => (
	<StyledHeader role="banner">
		<h1>HTML5 Test Page</h1>
		<p>
			This is a test page filled with common HTML elements to be used to
			provide visual feedback whilst building CSS systems and frameworks.
		</p>
	</StyledHeader>
);

export default Header;
