import React from "react"
import Container from "../../Container"
import MenuLink from "./MenuLink"
import styled from "styled-components"

const Menubar = styled.ul`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	z-index: 10000
`

const Menu = () => (
	<Container restrict role="navigation" as="nav">
		<Menubar>
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
		</Menubar>
	</Container>
)

export default Menu
