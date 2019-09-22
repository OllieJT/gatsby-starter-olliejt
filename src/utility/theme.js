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
	tiny: ".8rem",
	xsmall: "1.2rem",
	small: "1.6rem",
	medium: "2.4rem",
	large: "4rem",
	xlarge: "8rem",
	huge: "16rem",
	xhuge: "24rem",
}

export const layout = {
	size: {
		maxWidth: "1920px",
		pageWidth: "1200px",
		pageGutter: size.medium,
		contentWidth: `calc(1200px - ${size.medium * 2})`,
	},
	background: {
		page: `var(--color-level-800)`,
		content: `var(--color-level-700)`,
	},
	text: {
		font: `Chakra Petch, Roboto, Helvetica, Segoe UI`,
		titleColor: `var(--color-level-000)`,
		contentColor: `var(--color-level-050)`,
	},
	link: {
		default: `var(--color-primary-400)`,
		hover: `var(--color-primary-600)`,
		focus: `var(--color-primary-600)`,
		visited: `var(--color-primary-300)`,
	},
	radius: ".4rem",
}
