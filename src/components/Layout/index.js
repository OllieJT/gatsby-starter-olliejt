import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyle from "../../utility/GlobalStyles"
import Footer from "./Footer"
import Menu from "./Menu"
import SEO from "./SEO"

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

export const ThemeContext = React.createContext({
	theme: "dark"
})

const Layout = ({ children, hasSEO }) => {
	const theme = useContext(ThemeContext)
	console.log(theme)
	return (
		<PageContainer>
			{!hasSEO && (<SEO title="Hello World" />)}
			<GlobalStyle />
			<Menu />
			<ContentContainer id="reach-skip-nav">{children}</ContentContainer>
			<Footer />
		</PageContainer>
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
