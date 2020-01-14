import 'styled-components';

type ThemeSize = {
	smallest: string;
	small: string;
	medium: string;
	large: string;
	largeest: string;
};
type ThemeColor = {
	lightest: string;
	lighter: string;
	light: string;
	medium: string;
	dark: string;
	darker: string;
	darkest: string;
};

declare module 'styled-components' {
	export interface DefaultTheme {
		mode: 'light' | 'dark';
		setTheme: Function;
	}
}
