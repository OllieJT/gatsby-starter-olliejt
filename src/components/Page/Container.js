import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { setThemeColor } from "../../utility/functions"
import { layout } from "../../utility/theme"

const StyledContainer = styled.div`
	${props =>
		props.theme
			? `
			${setThemeColor(props.theme)};
		  	background-color: ${props.backgroundColor};
		`
			: `
			background-color: transparent;
	  	`};
	padding-left: ${layout.size.pageGutter};
	padding-right: ${layout.size.pageGutter};
	width: 100%;
	.content-container {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		${props =>
			props.restrict
				? `
					max-width: ${layout.size.pageWidth}
				`
				: `
	  				max-width: none;
				  `}
	}

	& article {
		border: 10px solid magenta;
	}
`

const Container = props => {
	return (
		<StyledContainer {...props} id={props.anchor}>
			<div className="content-container">{props.children}</div>
		</StyledContainer>
	)
}

Container.propTypes = {
	anchor: PropTypes.string,
	as: PropTypes.oneOf(["div", "section", "article", "header", "footer", "nav"]),
	theme: PropTypes.oneOf(["switch", "switch-invert", "invert", "none"]),
	backgroundColor: PropTypes.string,
	restrict: PropTypes.bool,
}

Container.defaultProps = {
	anchor: null,
	as: "div",
	theme: null,
	backgroundColor: layout.background.page,
	restrict: false,
}

export default Container
