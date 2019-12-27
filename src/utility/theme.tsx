export const size = {
	gutter: '.8rem',
	pageOut: '96rem',
	pageIn: '80rem',
	space: {
		smallest: '0.8rem',
		small: '1.6rem',
		medium: '2.4rem',
		large: '4rem',
		largest: '8rem',
	},
};

export const lightMode = {
	mono: {
		/* Lightest First */
		one: 'hsl(215,0%,100%)',
		two: 'hsl(215,0%,80%)',
		three: 'hsl(215,10%,40%)',
		four: 'hsl(215,25%,15%)',
		five: 'hsl(215,35%,5%)',
		six: 'hsl(215,40%,0%)',
	},
	primary: {
		/* Clearest ON LIGHT First */
		darkest: 'hsl(240, 29%, 20%)',
		medium: 'hsl(240, 90%, 65%)',
		lightest: 'hsl(240, 100%, 85%)',
	},
	content: {
		/* Clearest ON LIGHT First */
		darkest: 'hsl(215,40%,0%)',
		medium: 'hsl(215,32%,5%)',
		lightest: 'hsl(215,16%,24%)',
	},
	utility: {
		red: {
			/* Clearest ON LIGHT First */
			darkest: 'hsl(350, 32%, 16%)',
			medium: 'hsl(350, 90%, 60%)',
			lightest: 'hsl(0, 100%, 88%)',
		},
		green: {
			/* Clearest ON LIGHT First */
			darkest: 'hsl(172, 100%, 12%)',
			medium: 'hsl(170, 100%, 32%)',
			lightest: 'hsl(165, 80%, 69%)',
		},
		blue: {
			/* Clearest ON LIGHT First */
			darkest: 'hsl(210, 32%, 20%)',
			medium: 'hsl(205, 90%, 65%)',
			lightest: 'hsl(200, 100%, 80%)',
		},
	},
};

export const darkMode = {
	mono: {
		/* Darkest First */
		one: 'hsl(215,40%,0%)',
		two: 'hsl(215,35%,5%)',
		three: 'hsl(215,25%,15%)',
		four: 'hsl(215,10%,40%)',
		five: 'hsl(215,0%,80%)',
		six: 'hsl(215,0%,100%)',
	},
	primary: [
		/* Clearest ON DARK First */
		'hsl(240, 100%, 85%)',
		'hsl(240, 100%, 75%)',
		'hsl(240, 50%, 40%)',
	],
	content: [
		/* Clearest ON DARK First */
		'hsl(215,0%,100%)',
		'hsl(215,8%,72%)',
		'hsl(215,8%,48%)',
	],
	utility: {
		red: [
			/* Clearest ON DARK First */
			'hsl(0, 100%, 88%)',
			'hsl(350, 90%, 60%)',
			'hsl(350, 32%, 16%)',
		],
		green: [
			/* Clearest ON DARK First */
			'hsl(165, 80%, 69%)',
			'hsl(170, 100%, 32%)',
			'hsl(172, 100%, 12%)',
		],
		blue: [
			/* Clearest ON DARK First */
			'hsl(200, 100%, 80%)',
			'hsl(205, 90%, 65%)',
			'hsl(210, 32%, 20%)',
		],
	},
};
