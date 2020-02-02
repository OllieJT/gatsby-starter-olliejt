import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
	label: string;
	setMenu: any;
	iconBefore?: React.ReactNode;
	iconAfter?: React.ReactNode;
	hasLabel?: boolean;
	menuBreakpoint: string;
}

interface StyleProps {
	isOpen: boolean;
	menuBreakpoint: string;
}

export const ToggleMenu = styled.button<StyleProps>`
	display: flex;
	position: relative;
	z-index: 9999999;
	width: auto;
	padding: var(--size-space-small);
	cursor: pointer;
	background-color: var(--color-background-mono-dimmer);
	z-index: 500;
	border: 0;
	outline: none;
	p {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: var(--color-text-mono-bright);
	}
	svg {
		font-size: 1.2em;
	}
	.button-icon,
	.icon-before,
	.icon-after {
		transition: all 0.24s var(--animation-curve-1);
	}
	.icon-before,
	.icon-after {
		display: block;
		line-height: 1em;
	}
	.icon-after {
		position: absolute;
		top: 100%;
		opacity: 0;
	}
	.button-icon {
		display: block;
		position: relative;
		line-height: 1em;
		&.is-active {
			.icon-before,
			.icon-after {
				transform: translateY(-100%);
			}
			.icon-before {
				opacity: 0;
			}
			.icon-after {
				opacity: 1;
			}
		}
	}
	&:hover {
		background-color: var(--color-background-primary-dimmer);
		p {
			color: var(--color-text-primary-bright);
		}

		.button-icon {
			transform: scale(1.1);
		}
	}
	@media (min-width: ${props => props.menuBreakpoint}) {
		display: none;
	}
`;

export default ({
	label,
	setMenu,
	menuBreakpoint,
	iconBefore = <MdMenu />,
	iconAfter = <MdClose />,
	hasLabel = false,
}: Props) => (
	<ToggleMenu
		as="button"
		onClick={setMenu.toggleMenu}
		type="button"
		isOpen={setMenu.isOpen}
		menuBreakpoint={menuBreakpoint}
	>
		<p>
			<span className={`button-icon ${setMenu.isOpen ? 'is-active' : ''}`}>
				<span className="icon-before">{iconBefore}</span>
				<span className="icon-after">{iconAfter}</span>
			</span>
			{hasLabel ? label : ''}
		</p>
	</ToggleMenu>
);