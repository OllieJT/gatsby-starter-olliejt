import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import styled from 'styled-components'

interface Props {
	label: string;
	link: string;
	children: ReactNode;
	isExternal: boolean;
}

const StyledItem = styled.li`
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

const StyledItemLink = styled(Link)`
	width: 100%;
	padding: var(--size-space-small);
	cursor: pointer;
	background-color: var(--color-level-lightest);
	z-index: 500;
	p{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: var(--color-level-dark);
	}
	svg{
		font-size:1.2em;
	}
	&:hover{
		background-color: var(--color-level-light);
		p{
			color: var(--color-level-darkest);
		}
	}
`

const MenuItem = ({ label, link, children, isExternal }: Props) => {
	const inside = (<p>{label}{children && (<MdArrowDropDown />)}</p>)
	return (
		<StyledItem>
			{link ? isExternal ? (
				<StyledItemLink as="a" href={link} target="_blank" rel="noopener noreferrer">{inside}</StyledItemLink>
			) : (
				<StyledItemLink to={link}>{inside}</StyledItemLink>
			) : (
				<StyledItemLink as="div" >{inside}</StyledItemLink>
			)}

			{children && (<ul>{children}</ul>)}
		</StyledItem>
	)
}




MenuItem.defaultProps = {
	link: null,
	children: null,
	isExternal: false
}


export default MenuItem
