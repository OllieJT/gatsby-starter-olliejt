import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { enableRichText } from "../utility/styles"

const StyledContainer = styled.div`
	padding-left: var(--content-padding);
	padding-right: var(--content-padding);
	width: 100%;
	.content-container {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		${props =>
		props.isRestricted
			? "max-width: var(--content-width);"
			: "max-width: none;"}
	}
	${props => (props.isRichText ? enableRichText(props.isRestricted) : "")}
`

const Container = props => {
	return (
		<StyledContainer {...props} id={props.anchor}>
			<div className="content-container">{props.children}</div>
		</StyledContainer>
	)
}

Container.propTypes = {
	children: PropTypes.any.isRequired,
	anchor: PropTypes.string,
	as: PropTypes.oneOf(["div", "section", "article", "header", "footer", "nav"]),
	scale: PropTypes.oneOf(["small", "medium", "large", "fedault"]),
	backgroundColor: PropTypes.string,
	isRestricted: PropTypes.bool,
	isRichText: PropTypes.bool,
}

Container.defaultProps = {
	anchor: null,
	as: "div",
	scale: null,
	backgroundColor: "var(--color-background)",
	isRichText: false,
}

export default Container
