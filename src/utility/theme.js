export const color = {
	primary: {
		light: "rgba(255,133,71,1.0)",
		medium: "rgba(255,74,38,1.0)",
		dark: "rgba(184,0,0,1.0)",
		highlight: "rgba(255,180,150,1.0)",
		subtle: "rgba(255,74,38,0.32)",
	},
	secondary: {
		light: "rgba(112,255,184,1.0)",
		medium: "rgba(0,240,140,1.0)",
		dark: "rgba(0,143,83,1.0)",
		highlight: "rgba(155,255,210,1.0)",
		subtle: "rgba(0,255,149,0.32)",
	},
	mono: {
		lightest: "rgba(245,255,252,1.0)",
		lighter: "rgba(188,204,199,1.0)",
		light: "rgba(141,153,149,1.0)",
		dark: "rgba(29,38,35,1.0)",
		darker: "rgba(19,25,23,1.0)",
		darkest: "rgba(10,13,12,1.0)",
	},
}

export const size = {
	small: ["0.4rem", "0.8rem", "1.2rem", "1.6rem", "2.4rem"],
	medium: ["0.8rem", "1.6rem", "2.4rem", "4rem", "8rem"],
	large: ["1.6rem", "3.2rem", "4rem", "8rem", "12rem"],
}

export const typescale = {
	small: {
		h6: { size: 1.2, line: 2.25 },
		p: { size: 1.6, line: 1.75 },
		h5: { size: 2, line: 1.6 },
		h3: { size: 2.4, line: 1.4 },
		h2: { size: 3.2, line: 1.3 },
		h1: { size: 4, line: 1.2 },
	},
	medium: [
		{ size: 1.6, line: 2 },
		{ size: 2, line: 1.6 },
		{ size: 2.4, line: 1.5 },
		{ size: 3.2, line: 1.3 },
		{ size: 4.8, line: 1.2 },
		{ size: 5.6, line: 1.1 },
	],
	large: [
		{ size: 2, line: 1.75 },
		{ size: 2.4, line: 1.5 },
		{ size: 3.6, line: 1.5 },
		{ size: 4.8, line: 1.2 },
		{ size: 5.6, line: 1.1 },
		{ size: 8, line: 1.1 },
	],
}
