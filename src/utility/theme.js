export const color = {
	primary: ["#FFC2C2", "#FF9999", "#FF7A70", "#FF5447", "#FF3D1F", "#FF1100", "#B81800", "#8F0013", "#66000E"],
	secondary: ["#C2C2FF", "#9999FF", "#9585FF", "#6047FF", "#5A1FFF", "#3300FF", "#1E00E0", "#0C00B8", "#11118F"],
	level: [
		"hsl(0,0%,100%)",
		"hsl(0,0%,70%)",
		"hsl(0,0%,60%)",
		"hsl(0,0%,50%)",
		"hsl(0,0%,40%)",
		"hsl(0,0%,30%)",
		"hsl(0,0%,20%)",
		"hsl(0,0%,15%)",
		"hsl(0,0%,10%)",
		"hsl(0,0%,5%)",
		"hsl(0,0%,0%)",
	],
}

export const size = {
	small: [0.4, 0.8, 1.2, 1.6, 2.4],
	medium: [0.8, 1.6, 2.4, 4, 8],
	large: [1.6, 3.2, 4, 8, 12],
}

export const typescale = {
	small: [
		{ size: 1.2, line: 2.25 },
		{ size: 1.6, line: 1.75 },
		{ size: 2, line: 1.6 },
		{ size: 2.4, line: 1.4 },
		{ size: 3.2, line: 1.3 },
		{ size: 4, line: 1.2 },
	],
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

export const layout = {
	size: {
		maxWidth: "1920px",
		pageWidth: "1200px",
		pageGutter: `var(--size-space-medium)`,
		contentWidth: `calc(1200px - ${`var(--size-space-medium)` * 2})`,
		contentPadding: `var(--size-space-small)`,
	},
	background: {
		page: `var(--color-level-800)`,
		content: `var(--color-level-700)`,
	},
	text: {
		font: `Chakra Petch, Roboto, Helvetica, Segoe UI`,
		color: `var(--color-level-000)`,
		contentOpacity: 0.8,
		highlightColorBright: `var(--color-primary-200)`,
		highlightColorDark: `var(--color-primary-400)`,
		weightLight: 400,
		weightRegular: 500,
		weightBold: 600,
	},
	link: {
		default: `var(--color-secondary-200)`,
		hover: `var(--color-secondary-600)`,
		focus: `var(--color-secondary-600)`,
		visited: `var(--color-secondary-100)`,
	},
	radius: {
		small: 0.4,
		medium: 0.8,
		large: 4,
	},
}
