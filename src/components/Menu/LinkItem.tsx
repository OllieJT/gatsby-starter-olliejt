import React, { ReactNode } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import styled from 'styled-components';
import SmartLink from '../SmartLink';
import useMenu from '../../hooks/use-menu';

interface StyleProps {
	menuBreakpoint: string;
}
interface Props {
	label: string;
	link?: string;
	children?: ReactNode;
	isExternal?: boolean;
}

const StyledItem = styled.li<StyleProps>`
	--menu_link-accent-color: var(--color-level-low);
	--menu_link-background-color: var(--color-level-bottom);
	--menu_link-text-color: var(--color-content-low);
	--menu_dropdown-position: translateY(-100%);
	--menu_dropdown-opacity: 0;

	position: relative;
	z-index: 50;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: stretch;

	> .menu-link {
		width: 100%;
		padding: var(--size-space-small);
		background-color: var(--menu_link-background-color);
		z-index: 500;
		cursor: pointer;
		p {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: var(--menu_link-text-color);
		}
		svg {
			font-size: 1.33em;
		}
	}

	> .menu-dropdown {
		position: absolute;
		top: 100%;
		left: 0;

		z-index: 400;
		width: 100%;
		display: flex;
		flex-direction: column;

		transform: var(--menu_dropdown-position);
		opacity: var(--menu_dropdown-opacity);
		transition: transform 0.24s var(--transition-primary), opacity 0.24s var(--transition-primary);

		svg {
			transform: rotate(-90deg);
		}
	}

	&:hover {
		--menu_link-background-color: var(--color-primary-low);
		--menu_link-text-color: var(--color-content-high);
		--menu_dropdown-position: translateY(0);
		--menu_dropdown-opacity: 1;
	}
	@media (max-width: ${props => props.menuBreakpoint}) {
		--menu_dropdown-position: translateY(0);
		--menu_dropdown-opacity: 1;
		> .menu-link svg {
			display: none;
		}

		> .menu-dropdown {
			position: relative;
			top: auto;
			left: auto;
		}

		> .group-title {
			border-top: 1px solid var(--menu_link-accent-color);
			cursor: auto;
			p {
				color: var(--color-content-high);
				font-weight: var(--font-weight-bold);
			}
		}
	}
`;

export default ({ label, link, children, isExternal = false }: Props) => {
	const { breakpoint } = useMenu();

	return (
		<StyledItem menuBreakpoint={breakpoint}>
			<SmartLink isExternal={isExternal} link={link} className={`menu-link ${children ? 'group-title' : ''}`}>
				<p>
					{label}
					{children && <MdArrowDropDown />}
				</p>
			</SmartLink>

			{children && <ul className="menu-dropdown">{children}</ul>}
		</StyledItem>
	);
};
