import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { setThemeColor, setScaleSize } from "../../../utility/functions"
import { layout } from "../../../utility/theme"
import { enableRichText } from "../../../utility/styles"

const StyledContainer = styled.div`
	${props =>
		props.theme
			? `
			${setThemeColor(props.theme)};
			${setScaleSize(props.scale)}
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
			props.isRestricted
				? `
					max-width: ${layout.size.pageWidth}
				`
				: `
	  				max-width: none;
				  `}
	}
	${props => (props.isRichText ? enableRichText(props.isRestricted) : ``)}
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
	scale: PropTypes.oneOf(["small", "medium", "large", "fedault"]),
	backgroundColor: PropTypes.string,
	isRestricted: PropTypes.bool,
	isRichText: PropTypes.bool,
}

Container.defaultProps = {
	anchor: null,
	as: "div",
	theme: null,
	scale: null,
	backgroundColor: layout.background.page,
	restrict: false,
	isRichText: false,
}

export default Container
