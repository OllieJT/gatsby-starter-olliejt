import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { emojiCursor } from '../../utility/functions';

const ToggleButton = styled.button`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
	outline: none;
	border: 0px solid transparent;
	background-color: transparent;
	padding: var(--size-space-smallest) var(--size-space-small);
	overflow: hidden;
	cursor: ${props => (props.theme.mode === 'dark' ? emojiCursor('☀️') : emojiCursor('🌙'))};
	transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

	.mode {
		display: inline-flex;
		flex-direction: column;
		margin-bottom: -50%;
		align-items: flex-end;
		justify-content: flex-start;
		span:last-child {
			opacity: 0;
			transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}

	&:hover {
		background-color: ${props => (props.theme.mode === 'dark' ? 'white' : 'black')};
		* {
			color: ${props => (props.theme.mode === 'dark' ? 'black' : 'white')};
		}
		.mode span {
			transform: translateY(-100%);
			opacity: 0;
			&:last-child {
				opacity: 1;
			}
		}
	}
`;

export default function ToggleMode() {
	return (
		<ThemeConsumer>
			{theme => (
				<ToggleButton
					onClick={() =>
						theme.setTheme(
							theme.mode === 'dark'
								? {
										mode: 'light',
								  }
								: {
										mode: 'dark',
								  }
						)
					}
				>
					<h6>
						<span className="mode">
							<span>{theme.mode === 'dark' ? 'dark' : 'light'}</span>
							<span>{theme.mode === 'dark' ? 'light' : 'dark'}</span>
						</span>
						mode
					</h6>
				</ToggleButton>
			)}
		</ThemeConsumer>
	);
}
