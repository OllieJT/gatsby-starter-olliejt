import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const StyledFooter = styled.footer``;

export default () => (
	<StyledFooter role="contentinfo">
		<Container isRestricted insidePadding>
			<p>
				Made by <a href="http://twitter.com/TheOllieJT">@TheOllieJT</a>.
			</p>
		</Container>
	</StyledFooter>
);
