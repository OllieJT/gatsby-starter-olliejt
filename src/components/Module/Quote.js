import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { cover } from "../../utility/styles"

const StyledBlockquote = styled.blockquote`
	display: inline-block;
	position: relative;
	padding: var(--size-space-medium);
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		color: var(--color-primary-050);
	}
	cite > p,
	cite > p > a {
		color: var(--color-primary-200);
		& a:hover {
			color: var(--color-primary-050);
		}
	}

	article {
		position: relative;
		z-index: 1;
	}
	&::after {
		${cover};
		content: "";
		z-index: 0;
		background-color: var(--color-primary-400);
		opacity: 0.24;
	}
`

const Blockquote = ({ citeText, citeUrl, children }) => (
	<StyledBlockquote>
		<article>
			{children}
			<cite>
				<p>{citeUrl ? <a href={citeUrl}>{citeText}</a> : citeText}</p>
			</cite>
		</article>
	</StyledBlockquote>
)

Blockquote.propTypes = {
	children: PropTypes.array.isRequired,
	citeText: PropTypes.string.isRequired,
	citeUrl: PropTypes.string,
}

export default Blockquote
