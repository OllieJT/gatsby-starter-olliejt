import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "./Footer"
import Menu from "./Menu"
import SEO from "./SEO"
import ContextProvider from "./ContextProvider"

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
	color: "dark",
	size: "big"
})

const Layout = ({ children, hasSEO }) => {
	const theme = useContext(ThemeContext)
	return (
		<ContextProvider>
			<PageContainer>
				{!hasSEO && (<SEO title="Hello World" />)}
				<Menu />
				<ContentContainer id="reach-skip-nav">{children}</ContentContainer>
				<Footer />
			</PageContainer>
		</ContextProvider>
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
