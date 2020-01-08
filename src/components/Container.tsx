import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { enableRichText } from '../utility/styles';

interface Props {
	isRestricted?: boolean;
	isRichText?: boolean;
	isLifted?: boolean;
	hasInnerPadding?: boolean;
	hasOuterPadding?: boolean;

	innerBackground?: string;
	outerBackground?: string;
	children: ReactNode;
}

const StyledOuterContainer = styled.div<Props>(
	props => `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> div{
		width: 100%;
		${
			props.isRestricted
				? `max-width: ${props.theme.size.container};`
				: 'max-width: none;'
		};
		${props.isRichText && enableRichText};
		background: ${props.innerBackground};
		padding: ${props.hasInnerPadding && '4em'};
		${props.isLifted && 'margin-top: -8em;'}
	}
	background: ${props.outerBackground};
	${props.hasOuterPadding && 'padding: 4em;'}
`,
);

export default ({
	isRestricted = false,
	isRichText = false,
	isLifted = false,
	hasInnerPadding,
	hasOuterPadding,
	innerBackground = 'transparent',
	outerBackground = 'transparent',
	children,
}: Props) => (
	<StyledOuterContainer
		role="banner"
		isRestricted={isRestricted}
		isRichText={isRichText}
		isLifted={isLifted}
		innerBackground={innerBackground}
		outerBackground={outerBackground}
		hasInnerPadding={hasInnerPadding}
		hasOuterPadding={hasOuterPadding}>
		<div>{children}</div>
	</StyledOuterContainer>
);
