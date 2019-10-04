import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyle from "../utility/GlobalStyles"
import { Menu, Footer } from "./Page"

const PageContainer = styled.div`
	${props => props.theme}
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	align-items: stretch;
	justify-content: space-between;
`
const ContentContainer = styled.main`
	display: flex;
	width: 100%;
	height: auto;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	flex-grow: 1;
	flex-shrink: 0;
`

const Layout = ({ children, theme }) => (
	<PageContainer theme={theme}>
		<GlobalStyle />
		<Menu />
		<ContentContainer>{children}</ContentContainer>
		<Footer />
	</PageContainer>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
