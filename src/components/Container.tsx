import React from 'react';
import styled from 'styled-components';
import enableRichText from '../utility/styles/richtext';

interface InsideContainer {
	insidePadding?: number | boolean;
	insideBackground?: string;
	insideClassName?: string;
	isRichText?: boolean;
	isLifted?: boolean;
	isRestricted?: boolean;
}
interface OutsideContainer {
	outsidePadding?: number | boolean;
	outsideBackground?: string;
	outsideClassName?: string;
	zIndex?: number;
}

export interface ContainerProps extends InsideContainer, OutsideContainer {
	children: React.ReactNode;
}

const ContainerInside = styled.div<InsideContainer>`
	//border: 1px solid purple;

	width: 100%;

	${props => props.isRichText && enableRichText};
	${props => props.isLifted && 'transform: translateY(-4em);'}
	max-width: ${props => (props.isRestricted ? 'var(--size-container-main)' : 'none')};
	background: ${props => props.insideBackground};
	padding: ${props =>
		props.insidePadding === false ? '0' : props.insidePadding === true ? '4em 0' : `${props.insidePadding}em 0`};

`;

const ContainerOutside = styled.div<OutsideContainer>`
	//border: 1px solid blue;

	position: relative;
	width: 100%;
	max-width: none;
	z-index: ${props => props.zIndex};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-self: center;

	background: ${props => props.outsideBackground};
	padding: ${props =>
		props.outsidePadding === false ? '0' : props.outsidePadding === true ? '4em 0' : `${props.outsidePadding}em 0`};
`;

export default ({
	insidePadding = 0,
	insideBackground = 'transparent',
	insideClassName = '',

	outsidePadding = 0,
	outsideBackground = 'transparent',
	outsideClassName = '',
	zIndex = 500,

	isRestricted = false,
	isRichText = false,
	isLifted = false,

	children,
}: ContainerProps) => (
	<ContainerOutside
		role="group"
		outsidePadding={outsidePadding}
		outsideBackground={outsideBackground}
		className={`container container-outside ${outsideClassName}`}
		zIndex={zIndex}
	>
		<ContainerInside
			insidePadding={insidePadding}
			insideBackground={insideBackground}
			className={`container container-inside ${insideClassName}`}
			isRestricted={isRestricted}
			isRichText={isRichText}
			isLifted={isLifted}
		>
			{children}
		</ContainerInside>
	</ContainerOutside>
);
