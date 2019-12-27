import 'styled-components'

import React from 'react'

declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	export default content
}


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