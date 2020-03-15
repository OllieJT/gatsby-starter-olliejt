import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import MenuLink from './LinkItem';

// TODO: Cleanup this file
// TODO: Cleanup close button
interface StyleProps {
	menuBreakpoint: string;
}
interface LinkList {
	setMenu: SetMenu;
}

const MenuLinkList = styled.ul<StyleProps>`
	position: fixed;
	z-index: 10000;
	top: 0;
	right: -100%;
	bottom: 0;
	left: auto;

	width: auto;
	min-width: 240px;
	max-width: 85vw;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;

	background-color: var(--color-level-bottom);
	transition: right 3.24s var(--transition-primary);

	&.is-open {
		right: 0;
	}

	button.close-menu {
		position: fixed;
		z-index: 0;
		top: 0;
		left: 0;
		overflow: visible;

		width: 100%;
		height: 100%;
		cursor: pointer;
		background: var(--color-level-scrim);

		outline: none;
		border-width: 0;

		display: flex;
		align-items: center;
		justify-content: flex-start;
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p {
			font-size: 2em;
			transform: scale(0.8);
			transition: transform 0.24s var(--transition-primary);
			background-color: var(--color-level-bottom);
			line-height: 1em;
			padding: 1em;
			border-radius: 4em;
		}
		&:hover {
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p {
				transform: scale(1);
				color: var(--color-primary-higher);
				background-color: var(--color-primary-low);
			}
		}

		&.hidden {
			visibility: hidden;
		}
	}

	@media (min-width: ${props => props.menuBreakpoint}) {
		position: relative;
		top: auto;
		right: auto;
		bottom: auto;

		width: auto;
		max-width: none;
		height: auto;

		flex-direction: row;
		justify-content: flex-end;
		.close-menu {
			display: none;
		}
	}
`;

export default ({ setMenu }: LinkList) => {
	const { breakpoint, isOpen, toggleMenu } = setMenu;

	return (
		<MenuLinkList role="navigation" menuBreakpoint={breakpoint} className={`${isOpen ? 'is-open' : ''}`}>
			<MenuLink label="Home" link="/" />
			<MenuLink label="Dropdown" link="/dropdown">
				<MenuLink label="One" link="/one" />
				<MenuLink label="Two" link="/two" />
				<MenuLink label="Three" link="/three" />
				<MenuLink label="Four">
					<MenuLink label="Alpha" link="/one" />
					<MenuLink label="Bravo" link="/two" />
					<MenuLink label="Charlie" link="/three" />
				</MenuLink>
			</MenuLink>
			<MenuLink label="404 Error" link="/404" />

			<button onClick={toggleMenu} type="button" className={`close-menu ${isOpen ? '' : 'hidden'}`}>
				<h6>
					<MdClose />
				</h6>
			</button>
		</MenuLinkList>
	);
};
