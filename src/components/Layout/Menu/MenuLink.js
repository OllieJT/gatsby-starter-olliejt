import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdArrowDropDown } from "react-icons/md"

const MenuItem = styled.li`
	position: relative;
	display: flex;
	align-items: stretch;
	justify-content: stretch;
	.item-link{
		width: 100%;
		padding: var(--size-space-small);
		cursor: pointer;
		background-color: var(--color-level-darkest);
		p{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: var(--color-level-light);
		}
		svg{
			font-size:1.2em;
		}
		&:hover{
			background-color: var(--color-level-dark);
			p{color: var(--color-level-lightest);}
		}
		z-index: 500;
	}

	ul{
		position: absolute;
		top: 100%;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		transform: translateY(-100%);
		opacity: 0;
		transition: all .24s cubic-bezier(0.075, 0.82, 0.165, 1);
		z-index: 400;
		svg{
			transform: rotate(-90deg)
		}
		li {
			overflow: hidden;
			&:hover{
				overflow: visible;
			}
			ul{
				top: 0;
				left: 100%;
				transform: translateY(0%);

			}
		}
	}
	&:hover ul{
		transform: translateY(0);
		opacity: 1;
	}
`

const MenuLink = ({label,link,children,isExternal}) => (
	<MenuItem>
		{link ? isExternal ? (
			<a className="item-link" href={link}>
				<p>{label}{children && (<MdArrowDropDown />)}</p>
			</a>
		) : (
			<Link className="item-link" to={link}>
				<p>{label}{children && (<MdArrowDropDown />)}</p>
			</Link>
		) : (
			<div className="item-link">
				<p>{label}{children && (<MdArrowDropDown />)}</p>
			</div>
		)}

		{children && (
			<ul>
				{children}
			</ul>
		)}
	</MenuItem>
)

MenuLink.propTypes = {
	label: PropTypes.string.isRequired,
	link: PropTypes.string,
	children: PropTypes.any,
	isExternal: PropTypes.bool,
}

MenuLink.defaultProps = {
	link: null,
	children: null,
	isExternal: false
}


export default MenuLink
