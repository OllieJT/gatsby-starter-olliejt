import { css } from 'styled-components';

const utility = css`
	--color-utility-red-high: hsl(350, 80%, 64%);
	--color-utility-red-middle: hsl(350, 80%, 50%);
	--color-utility-red-low: hsl(350, 100%, 12%);

	--color-utility-blue-high: hsl(210, 80%, 72%);
	--color-utility-blue-middle: hsl(210, 80%, 50%);
	--color-utility-blue-low: hsl(210, 80%, 16%);

	--color-utility-green-high: hsl(170, 90%, 64%);
	--color-utility-green-middle: hsl(170, 100%, 32%);
	--color-utility-green-low: hsl(170, 100%, 12%);

	--color-utility-yellow-high: hsl(45, 90%, 72%);
	--color-utility-yellow-middle: hsl(45, 100%, 42%);
	--color-utility-yellow-low: hsl(45, 100%, 12%);
`;

export const themeLight = css`
	--color-content-high: hsl(210, 30%, 5%);
	--color-content-middle: hsl(210, 35%, 12%);
	--color-content-low: hsl(210, 30%, 20%);

	--color-level-higher: hsl(210, 20%, 60%);
	--color-level-high: hsl(210, 20%, 70%);
	--color-level-middle: hsl(210, 20%, 80%);
	--color-level-low: hsl(210, 15%, 88%);
	--color-level-lower: hsl(210, 10%, 95%);

	--color-level-bottom: white;

	--color-primary-higher: hsl(340, 90%, 70%);
	--color-primary-high: hsl(330, 100%, 50%);
	--color-primary-middle: hsl(320, 100%, 25%);
	--color-primary-low: hsl(320, 100%, 5%);
	--color-primary-lower: hsl(320, 100%, 5%);
	--color-primary-mask: hsla(320, 80%, 4%, 0.56);

	${utility};
`;
export const themeDark = css`
	--color-content-high: hsl(200, 16%, 98%);
	--color-content-middle: hsl(200, 16%, 80%);
	--color-content-low: hsl(200, 16%, 64%);

	--color-level-higher: hsl(220, 16%, 64%);
	--color-level-high: hsl(230, 16%, 32%);
	--color-level-middle: hsl(240, 24%, 16%);
	--color-level-low: hsl(240, 32%, 10%);
	--color-level-lower: hsl(240, 40%, 4%);

	--color-level-bottom: black;

	--color-primary-higher: hsl(55, 90%, 70%);
	--color-primary-high: hsl(50, 100%, 50%);
	--color-primary-middle: hsl(45, 100%, 30%);
	--color-primary-low: hsl(35, 100%, 5%);
	--color-primary-lower: hsl(35, 100%, 5%);
	--color-primary-mask: hsla(35, 80%, 4%, 0.56);

	${utility};
`;
