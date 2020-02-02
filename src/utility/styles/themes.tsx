import { css } from 'styled-components';

export const lightTheme = css`
	--color-text-mono-bright: hsl(220, 16%, 98%);
	--color-text-mono-medium: hsl(220, 16%, 80%);
	--color-text-mono-dim: hsl(220, 16%, 64%);

	--color-background-mono-brighter: hsl(220, 16%, 64%);
	--color-background-mono-bright: hsl(230, 16%, 32%);
	--color-background-mono-medium: hsl(240, 24%, 16%);
	--color-background-mono-dim: hsl(240, 32%, 10%);
	--color-background-mono-dimmer: hsl(240, 40%, 4%);

	--color-text-primary-bright: hsl(340, 90%, 70%);
	--color-text-primary-medium: hsl(330, 100%, 50%);
	--color-text-primary-dim: hsl(320, 100%, 30%);

	--color-background-primary-brighter: hsl(325, 90%, 45%);
	--color-background-primary-bright: hsl(325, 100%, 35%);
	--color-background-primary-medium: hsl(320, 100%, 25%);
	--color-background-primary-dim: hsl(320, 100%, 15%);
	--color-background-primary-dimmer: hsl(320, 100%, 5%);

	--color-background-scrim: hsla(240, 40%, 4%, 0.72);
`;
export const darkTheme = css`
	--color-text-mono-bright: hsl(200, 16%, 98%);
	--color-text-mono-medium: hsl(200, 16%, 80%);
	--color-text-mono-dim: hsl(200, 16%, 64%);

	--color-background-mono-brighter: hsl(200, 16%, 64%);
	--color-background-mono-bright: hsl(200, 16%, 32%);
	--color-background-mono-medium: hsl(200, 24%, 16%);
	--color-background-mono-dim: hsl(200, 32%, 10%);
	--color-background-mono-dimmer: hsl(200, 40%, 4%);

	--color-text-primary-bright: hsl(55, 90%, 70%);
	--color-text-primary-medium: hsl(50, 100%, 50%);
	--color-text-primary-dim: hsl(45, 100%, 30%);

	--color-background-primary-brighter: hsl(50, 90%, 45%);
	--color-background-primary-bright: hsl(50, 100%, 35%);
	--color-background-primary-medium: hsl(45, 100%, 25%);
	--color-background-primary-dim: hsl(40, 100%, 15%);
	--color-background-primary-dimmer: hsl(35, 100%, 5%);

	--color-background-scrim: hsla(200, 40%, 4%, 0.72);
`;
