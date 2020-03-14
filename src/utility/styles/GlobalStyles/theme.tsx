import { css } from 'styled-components';

const utility = css`
	--color-utility-red-bright: hsl(350, 80%, 64%);
	--color-utility-red-medium: hsl(350, 80%, 50%);
	--color-utility-red-dim: hsl(350, 100%, 12%);

	--color-utility-blue-bright: hsl(210, 80%, 72%);
	--color-utility-blue-medium: hsl(210, 80%, 50%);
	--color-utility-blue-dim: hsl(210, 80%, 16%);

	--color-utility-green-bright: hsl(170, 90%, 64%);
	--color-utility-green-medium: hsl(170, 100%, 32%);
	--color-utility-green-dim: hsl(170, 100%, 12%);

	--color-utility-yellow-bright: hsl(45, 90%, 72%);
	--color-utility-yellow-medium: hsl(45, 100%, 42%);
	--color-utility-yellow-dim: hsl(45, 100%, 12%);
`;

export const themeLight = css`
	--color-text-mono-high: hsl(220, 16%, 98%);
	--color-text-mono-middle: hsl(220, 16%, 80%);
	--color-text-mono-low: hsl(220, 16%, 64%);

	--color-background-mono-higher: hsl(220, 16%, 64%);
	--color-background-mono-high: hsl(230, 16%, 32%);
	--color-background-mono-middle: hsl(240, 24%, 16%);
	--color-background-mono-low: hsl(240, 32%, 10%);
	--color-background-mono-bottom: hsl(240, 40%, 4%);
	--color-background-mono-mask: hsla(240, 80%, 4%, 0.56);

	--color-text-primary-high: hsl(340, 90%, 70%);
	--color-text-primary-middle: hsl(330, 100%, 50%);
	--color-text-primary-low: hsl(320, 100%, 30%);

	--color-background-primary-higher: hsl(325, 90%, 45%);
	--color-background-primary-high: hsl(325, 100%, 35%);
	--color-background-primary-middle: hsl(320, 100%, 25%);
	--color-background-primary-low: hsl(320, 100%, 15%);
	--color-background-primary-bottom: hsl(320, 100%, 5%);
	--color-background-primary-mask: hsla(320, 80%, 4%, 0.56);

	${utility};
`;
export const themeDark = css`
	--color-text-mono-high: hsl(200, 16%, 98%);
	--color-text-mono-middle: hsl(200, 16%, 80%);
	--color-text-mono-low: hsl(200, 16%, 64%);

	--color-background-mono-higher: hsl(200, 16%, 64%);
	--color-background-mono-high: hsl(200, 16%, 32%);
	--color-background-mono-middle: hsl(200, 24%, 16%);
	--color-background-mono-low: hsl(200, 32%, 10%);
	--color-background-mono-bottom: hsl(200, 40%, 4%);
	--color-background-mono-mask: hsla(200, 80%, 4%, 0.56);

	--color-text-primary-high: hsl(55, 90%, 70%);
	--color-text-primary-middle: hsl(50, 100%, 50%);
	--color-text-primary-low: hsl(45, 100%, 30%);

	--color-background-primary-higher: hsl(50, 90%, 45%);
	--color-background-primary-high: hsl(50, 100%, 35%);
	--color-background-primary-middle: hsl(45, 100%, 25%);
	--color-background-primary-low: hsl(40, 100%, 15%);
	--color-background-primary-bottom: hsl(35, 100%, 5%);
	--color-background-primary-mask: hsla(35, 80%, 4%, 0.56);

	${utility};
`;
