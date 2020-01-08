import React from 'react';
import styled from 'styled-components';
import { contain } from '../../utility/styles';

const StyledFooter = styled.footer`
	${contain}
`;

export default () => (
	<StyledFooter role="contentinfo">
		<p>
			Made by <a href="http://twitter.com/TheOllieJT">@TheOllieJT</a>.
		</p>
	</StyledFooter>
);
