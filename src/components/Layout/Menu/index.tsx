import React from 'react';
import styled from 'styled-components';
import useMenu from '../../../hooks/use-menu';
import LinkList from './LinkList';
import ToggleMenu from './ToggleMenu';

interface Menu {
	menuBreakpoint?: string;
}

const Menubar = styled.nav`
	position: sticky;
	top: 0px;
	z-index: 10000;

	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-background-mono-dimmer);
`;

export default ({ menuBreakpoint = '800px' }: Menu) => {
	const menu = useMenu();

	return (
		<Menubar role="navigation">
			<h6>GATSBY-STARTER-OLLIEJT</h6>
			<ToggleMenu menuBreakpoint={menuBreakpoint} setMenu={menu} label="Menu" />
			<LinkList menuBreakpoint={menuBreakpoint} setMenu={menu} />
		</Menubar>
	);
};
