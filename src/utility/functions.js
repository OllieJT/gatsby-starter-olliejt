/* eslint-disable */
import PropTypes from 'prop-types';
import { color, size } from './theme';

// Checks if the window is defined
export const IS_BROWSER = typeof window !== 'undefined';

// Removes or alters characters in a string to make it URL safe
export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

// Takes a variety of YouTube URL types and outputs the Video ID
export function getYoutubeID(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);
	return match && match[7].length == 11 ? match[7] : false;
}

// Takes an array and returns it with the items in a random order
export function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// OLD

export function setThemeColor(s) {
	switch (s) {
		case 'light':
			return `
			--color-primary-light: ${color.primary.light};
			--color-primary-medium: ${color.primary.medium};
			--color-primary-dark: ${color.primary.dark};
			--color-primary-highlight: ${color.primary.highlight};
			--color-primary-subtle: ${color.primary.subtle};

			--color-secondary-light: ${color.secondary.light};
			--color-secondary-medium: ${color.secondary.medium};
			--color-secondary-dark: ${color.secondary.dark};
			--color-secondary-highlight: ${color.secondary.highlight};
			--color-secondary-subtle: ${color.secondary.subtle};

			--color-text-content: ${color.mono.dark};
			--color-text-title: ${color.mono.darkest};
			--color-link-resting:  ${color.primary.medium};
			--color-link-hover:  ${color.primary.light};

			--color-level-background: ${color.mono.lightest};
			--color-level-accent: ${color.mono.light};

			--color-level-0: white;
			--color-level-1: ${color.mono.lightest};
			--color-level-2: ${color.mono.lighter};
			--color-level-3: ${color.mono.light};
			--color-level-4: ${color.mono.dark};
			--color-level-5: ${color.mono.darker};
			--color-level-6: ${color.mono.darkest};
			--color-level-7: black;
		`;
		case 'dark':
		default:
			return `
			--color-primary-light: ${color.primary.light};
			--color-primary-medium: ${color.primary.medium};
			--color-primary-dark: ${color.primary.dark};
			--color-primary-highlight: ${color.primary.highlight};
			--color-primary-subtle: ${color.primary.subtle};

			--color-secondary-light: ${color.secondary.light};
			--color-secondary-medium: ${color.secondary.medium};
			--color-secondary-dark: ${color.secondary.dark};
			--color-secondary-highlight: ${color.secondary.highlight};
			--color-secondary-subtle: ${color.secondary.subtle};

			--color-text-content: ${color.mono.light};
			--color-text-title: ${color.mono.lightest};
			--color-link-resting:  ${color.primary.medium};
			--color-link-hover:  ${color.primary.light};

			--color-level-background: ${color.mono.darkest};
			--color-level-accent: ${color.mono.dark};

			--color-level-0: black;
			--color-level-1: ${color.mono.darkest};
			--color-level-2: ${color.mono.darker};
			--color-level-3: ${color.mono.dark};
			--color-level-4: ${color.mono.light};
			--color-level-5: ${color.mono.lighter};
			--color-level-6: ${color.mono.lightest};
			--color-level-7: white;
		`;
	}
}
setThemeColor.propTypes = {
	s: PropTypes.string.isRequired,
};
setThemeColor.defaultProps = {
	s: PropTypes.oneOf(['switch', 'switch-invert', 'invert', 'default']),
};

export function setScaleSize(s) {
	switch (s) {
		case 'small':
			return `
			--size-space-tiny: ${size.small[0]}rem;
			--size-space-small: ${size.small[1]}rem;
			--size-space-medium:${size.small[2]}rem;
			--size-space-large: ${size.small[3]}rem;
			--size-space-huge: ${size.small[4]}rem;
		`;
		case 'large':
			return `
			--size-space-tiny: ${size.large[0]}rem;
			--size-space-small: ${size.large[1]}rem;
			--size-space-medium:${size.large[2]}rem;
			--size-space-large: ${size.large[3]}rem;
			--size-space-huge: ${size.large[4]}rem;
			`;
		case 'medium':
		case 'default':
		default:
			return `
			--size-space-tiny: ${size.medium[0]}rem;
			--size-space-small: ${size.medium[1]}rem;
			--size-space-medium:${size.medium[2]}rem;
			--size-space-large: ${size.medium[3]}rem;
			--size-space-huge: ${size.medium[4]}rem;
		`;
	}
}
setScaleSize.propTypes = {
	s: PropTypes.string.isRequired,
};
setScaleSize.defaultProps = {
	s: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
};
