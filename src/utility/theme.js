export const lightMode = {
	mono: [
		/* Lightest First */
		"hsl(220, 10%, 100%)",
		"hsl(220, 10%, 80%)",
		"hsl(220, 10%, 60%)",
		"hsl(220, 20%, 30%)",
		"hsl(220, 20%, 20%)",
	],
	primary: [
		/* Clearest ON LIGHT First */
		"hsl(10, 100%, 30%)",
		"hsl(10, 100%, 50%)",
		"hsl(5, 100%, 75%)",
	],
	content: [
		/* Clearest ON LIGHT First */
		"hsl(220, 40%, 0%)",
		"hsl(220, 20%, 10%)",
		"hsl(220, 15%, 20%)",
	]
}
export const darkMode = {
	mono: [
		/* Darkest First */
		"hsl(220, 25%, 5%)",
		"hsl(220, 20%, 20%)",
		"hsl(220, 20%, 30%)",
		"hsl(220, 10%, 60%)",
		"hsl(220, 10%, 80%)",
	],
	primary: [
		/* Clearest ON DARK First */
		"hsl(5, 100%, 75%)",
		"hsl(10, 100%, 50%)",
		"hsl(10, 75%, 25%)",
	],
	content: [
		/* Clearest ON DARK First */
		"hsl(220, 10%, 100%)",
		"hsl(220, 10%, 80%)",
		"hsl(220, 10%, 60%)",
	]
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
