import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../../utility/GlobalStyles"
import Footer from "./Footer"
import Menu from "./Menu"
import SEO from "./SEO"
import useTheme from "./useTheme"


const PageContainer = styled.div`
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


const Layout = ({ children, hasSEO }) => {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{!hasSEO && (<SEO title="Hello World" />)}
			<PageContainer>
				<Menu />
				<ContentContainer id="reach-skip-nav">{children}</ContentContainer>
				<Footer />
			</PageContainer>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	hasSEO: PropTypes.bool
}

Layout.defaultProps = {
	hasSEO: false
}

export default Layout
