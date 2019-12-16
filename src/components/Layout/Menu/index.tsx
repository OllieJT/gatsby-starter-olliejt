import React from "react"
import { styledContainer } from "../../../utility/styles"
import MenuLink from "./MenuLink"
import styled from "styled-components"
import ToggleMode from "../ToggleMode"

const Menubar = styled.ul`
	${styledContainer(true)};
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	z-index: 10000;
	li{
		position: relative;
		display: flex;
		align-items: stretch;
		justify-content: stretch;
	}
`

const Menu = () => (
	<Menubar role="navigation">
		<MenuLink label="Home" link="/" />
		<MenuLink label="Dropdown" link="/dropdown" >
			<MenuLink label="One" link="/one" />
			<MenuLink label="Two" link="/two" />
			<MenuLink label="Three" link="/three" />
			<MenuLink label="Four" >
				<MenuLink label="Alpha" link="/one" />
				<MenuLink label="Bravo" link="/two" />
				<MenuLink label="Charlie" link="/three" />
			</MenuLink>
		</MenuLink>
		<MenuLink label="404 Error" link="/404" />
		<li>
			<ToggleMode />
		</li>
	</Menubar>
)

export default Menu
