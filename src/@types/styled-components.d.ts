import 'styled-components';

import React from 'react';

declare module 'styled-components' {
	export interface DefaultTheme {
		mode: string;
		color: {
			mono: {
				one: string;
				two: string;
				three: string;
				four: string;
				five: string;
				six: string;
			};
			content: {
				lightest: string;
				medium: string;
				darkest: string;
			};
			primary: {
				lightest: string;
				medium: string;
				darkest: string;
			};
			utility: {
				red: {
					lightest: string;
					medium: string;
					darkest: string;
				};
				green: {
					lightest: string;
					medium: string;
					darkest: string;
				};
				blue: {
					lightest: string;
					medium: string;
					darkest: string;
				};
			};
		};
		size: {
			gutter: string;
			pageOut: string;
			pageIn: string;
			space: {
				smallest: string;
				small: string;
				medium: string;
				large: string;
				largest: string;
			};
		};
		setTheme: Function;
	}
}
