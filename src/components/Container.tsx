import React, { ReactNode } from "react"
import styled from "styled-components"
import { enableRichText } from "../utility/styles"

enum Size { Default = 0, Small = 1, Medium = 2, Large = 3 }


interface Props {
	children: ReactNode
	anchor: string
	role: string
	as: string
	scale: Size
	backgroundColor: string
	isRestricted: boolean
	isRichText: boolean
}

const StyledContainer = styled.div<Props>`
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

const Container = ({ children, anchor, as = "div", role, scale, backgroundColor, isRestricted, isRichText }: Props) => {
	return (
		<StyledContainer
			as={as}
			role={role}
			scale={scale}
			backgroundColor={backgroundColor}
			isRestricted={isRestricted}
			isRichText={isRichText}
			id={anchor}
		>
			<div className="content-container">{children}</div>
		</StyledContainer>
	)
}

Container.defaultProps = {
	anchor: null,
	as: "div",
	scale: null,
	backgroundColor: "var(--color-background)",
	isRichText: false,
}

export default Container
