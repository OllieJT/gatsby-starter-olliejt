import { Link } from 'gatsby';
import React from 'react';

interface Props extends SmartLink {
	children: React.ReactNode;
	className?: string;
}

export default ({ children, isExternal = false, link, className }: Props) =>
	link ? (
		isExternal ? (
			<a href={link} target="_blank" rel="noopener noreferrer" className={`button-link ${className}`}>
				{children}
			</a>
		) : (
			<Link to={link} className={`button-link ${className}`}>
				{children}
			</Link>
		)
	) : (
		<div className={`button-link ${className}`}>{children}</div>
	);
