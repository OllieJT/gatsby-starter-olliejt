import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import MenuLink from './LinkItem';

interface StyleProps {
	menuBreakpoint: string;
}
interface LinkList extends StyleProps {
	setMenu: any;
}

const MenuLinkList = styled.ul<StyleProps>`
	position: fixed;
	z-index: 10000;
	top: 0;
	right: -100%;
	bottom: 0;
	left: auto;

	width: 100%;
	max-width: 85vw;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;

	background-color: var(--color-background-mono-dimmer);
	transition: all 0.24s var(--animation-curve-1);

	li {
		border: 2x solid blue !important;
		position: relative;
		display: flex;
		align-items: stretch;
		justify-content: stretch;
	}
	&.is-open {
		right: 0;
	}
	.close-menu {
		position: absolute !important;
		top: 0;
		right: 100%;
		overflow: visible;

		width: 15vw;
		height: 100vh;
		cursor: pointer;
		background: linear-gradient(to left, var(--color-background-scrim) 25%, transparent 125%);

		> button {
			position: absolute;
			width: 100%;
			height: 100%;
			cursor: pointer;
			overflow: visible;

			display: flex;
			align-items: center;
			justify-content: center;

			outline: none;
			border-width: 0;
			background: transparent;

			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p {
				transform: scale(0.8);
				transition: all 0.24s var(--animation-curve-1);
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
				}
			}
		}

		&.hidden {
			visibility: hidden;
			display: none;
			background: transparent;
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

export default ({ menuBreakpoint = '800px', setMenu }: LinkList) => (
	<MenuLinkList role="navigation" menuBreakpoint={menuBreakpoint} className={`${setMenu.isOpen ? 'is-open' : ''}`}>
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

		<li className={`close-menu ${setMenu.isOpen ? '' : 'hidden'}`}>
			<button onClick={setMenu.toggleMenu} type="button">
				<h6>
					<MdClose />
				</h6>
			</button>
		</li>
	</MenuLinkList>
);
