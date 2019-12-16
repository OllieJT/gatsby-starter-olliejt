import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		mode: string;

		color: {
			mono: Array<string>;
			primary: Array<string>;
			content: Array<string>;
		};
		setTheme: Function;
	}
}