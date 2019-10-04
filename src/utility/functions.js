/* eslint-disable */
import PropTypes from "prop-types"
import { color, size, typescale } from "./theme"

export const IS_BROWSER = typeof window !== "undefined"

export function setThemeColor(s) {
	switch (s) {
		case "switch":
			return `
			--color-primary-050: ${color.secondary[0]};
			--color-primary-100: ${color.secondary[1]};
			--color-primary-200: ${color.secondary[2]};
			--color-primary-300: ${color.secondary[3]};
			--color-primary-400: ${color.secondary[4]};
			--color-primary-500: ${color.secondary[5]};
			--color-primary-600: ${color.secondary[6]};
			--color-primary-700: ${color.secondary[7]};
			--color-primary-800: ${color.secondary[8]};

			--color-secondary-050: ${color.primary[0]};
			--color-secondary-100: ${color.primary[1]};
			--color-secondary-200: ${color.primary[2]};
			--color-secondary-300: ${color.primary[3]};
			--color-secondary-400: ${color.primary[4]};
			--color-secondary-500: ${color.primary[5]};
			--color-secondary-600: ${color.primary[6]};
			--color-secondary-700: ${color.primary[7]};
			--color-secondary-800: ${color.primary[8]};

			--color-link-resting: ${color.secondary[2]};
			--color-link-hover: ${color.secondary[7]};
		`
		case "switch-invert":
			return `
			--color-primary-050: ${color.secondary[8]};
			--color-primary-100: ${color.secondary[7]};
			--color-primary-200: ${color.secondary[6]};
			--color-primary-300: ${color.secondary[5]};
			--color-primary-400: ${color.secondary[4]};
			--color-primary-500: ${color.secondary[3]};
			--color-primary-600: ${color.secondary[2]};
			--color-primary-700: ${color.secondary[1]};
			--color-primary-800: ${color.secondary[0]};

			--color-secondary-050: ${color.primary[8]};
			--color-secondary-100: ${color.primary[7]};
			--color-secondary-200: ${color.primary[6]};
			--color-secondary-300: ${color.primary[5]};
			--color-secondary-400: ${color.primary[4]};
			--color-secondary-500: ${color.primary[3]};
			--color-secondary-600: ${color.primary[2]};
			--color-secondary-700: ${color.primary[1]};
			--color-secondary-800: ${color.primary[0]};

			--color-page-background: ${color.level[0]};
			--color-text-content: ${color.level[8]};
			--color-text-title: ${color.level[10]};

			--color-link-resting: ${color.primary[7]};
			--color-link-hover: ${color.primary[2]};

			--color-level-000: ${color.level[10]};
			--color-level-050: ${color.level[9]};
			--color-level-100: ${color.level[8]};
			--color-level-200: ${color.level[7]};
			--color-level-300: ${color.level[6]};
			--color-level-400: ${color.level[5]};
			--color-level-500: ${color.level[4]};
			--color-level-600: ${color.level[3]};
			--color-level-700: ${color.level[2]};
			--color-level-800: ${color.level[1]};
			--color-level-900: ${color.level[0]};
			`
		case "invert":
			return `
			--color-primary-050: ${color.primary[8]};
			--color-primary-100: ${color.primary[7]};
			--color-primary-200: ${color.primary[6]};
			--color-primary-300: ${color.primary[5]};
			--color-primary-400: ${color.primary[4]};
			--color-primary-500: ${color.primary[3]};
			--color-primary-600: ${color.primary[2]};
			--color-primary-700: ${color.primary[1]};
	  		--color-primary-800: ${color.primary[0]};

			--color-secondary-050: ${color.secondary[8]};
			--color-secondary-100: ${color.secondary[7]};
			--color-secondary-200: ${color.secondary[6]};
			--color-secondary-300: ${color.secondary[5]};
			--color-secondary-400: ${color.secondary[4]};
			--color-secondary-500: ${color.secondary[3]};
			--color-secondary-600: ${color.secondary[2]};
			--color-secondary-700: ${color.secondary[1]};
			--color-secondary-800: ${color.secondary[0]};

			--color-page-background: ${color.level[0]};
			--color-text-content: ${color.level[8]};
			--color-text-title: ${color.level[10]};

			--color-link-resting: ${color.primary[7]};
			--color-link-hover: ${color.primary[2]};

			--color-level-000: ${color.level[10]};
			--color-level-050: ${color.level[9]};
			--color-level-100: ${color.level[8]};
			--color-level-200: ${color.level[7]};
			--color-level-300: ${color.level[6]};
			--color-level-400: ${color.level[5]};
			--color-level-500: ${color.level[4]};
			--color-level-600: ${color.level[3]};
			--color-level-700: ${color.level[2]};
			--color-level-800: ${color.level[1]};
			--color-level-900: ${color.level[0]};
		`
		case "default":
		default:
			return `
			--color-primary-050: ${color.primary[1]};
			--color-primary-100: ${color.primary[2]};
			--color-primary-200: ${color.primary[3]};
			--color-primary-300: ${color.primary[4]};
			--color-primary-400: ${color.primary[5]};
			--color-primary-500: ${color.primary[6]};
			--color-primary-600: ${color.primary[7]};
			--color-primary-700: ${color.primary[8]};
	  		--color-primary-800: ${color.primary[9]};

			--color-secondary-050: ${color.secondary[1]};
			--color-secondary-100: ${color.secondary[2]};
			--color-secondary-200: ${color.secondary[3]};
			--color-secondary-300: ${color.secondary[4]};
			--color-secondary-400: ${color.secondary[5]};
			--color-secondary-500: ${color.secondary[6]};
			--color-secondary-600: ${color.secondary[7]};
			--color-secondary-700: ${color.secondary[8]};
			--color-secondary-800: ${color.secondary[9]};
			--color-secondary-800: ${color.secondary[8]};

			--color-page-background: ${color.level[10]};
			--color-text-content: ${color.level[1]};
			--color-text-title: ${color.level[0]};

			--color-link-resting: ${color.primary[2]};
			--color-link-hover: ${color.primary[7]};

			--color-level-000: ${color.level[0]};
			--color-level-050: ${color.level[1]};
			--color-level-100: ${color.level[2]};
			--color-level-200: ${color.level[3]};
			--color-level-300: ${color.level[4]};
			--color-level-400: ${color.level[5]};
			--color-level-500: ${color.level[6]};
			--color-level-600: ${color.level[7]};
			--color-level-700: ${color.level[8]};
			--color-level-800: ${color.level[9]};
			--color-level-900: ${color.level[10]};
		`
	}
}
setThemeColor.propTypes = {
	s: PropTypes.string.isRequired,
}
setThemeColor.defaultProps = {
	s: PropTypes.oneOf(["switch", "switch-invert", "invert", "default"]),
}

export function setScaleSize(s) {
	switch (s) {
		case "small":
			return `
			--size-space-tiny: ${size.small[0]}rem;
			--size-space-small: ${size.small[1]}rem;
			--size-space-medium:${size.small[2]}rem;
			--size-space-large: ${size.small[3]}rem;
			--size-space-huge: ${size.small[4]}rem;

			--size-text-1: ${typescale.small[0].size}rem;
			--size-text-2: ${typescale.small[1].size}rem;
			--size-text-3: ${typescale.small[2].size}rem;
			--size-text-4: ${typescale.small[3].size}rem;
			--size-text-5: ${typescale.small[4].size}rem;
			--size-text-6: ${typescale.small[5].size}rem;

			--size-line-1: ${typescale.small[0].line}em;
			--size-line-2: ${typescale.small[1].line}em;
			--size-line-3: ${typescale.small[2].line}em;
			--size-line-4: ${typescale.small[3].line}em;
			--size-line-5: ${typescale.small[4].line}em;
			--size-line-6: ${typescale.small[5].line}em;
		`
		case "large":
			return `
			--size-space-tiny: ${size.large[0]}rem;
			--size-space-small: ${size.large[1]}rem;
			--size-space-medium:${size.large[2]}rem;
			--size-space-large: ${size.large[3]}rem;
			--size-space-huge: ${size.large[4]}rem;

			--size-text-1: ${typescale.large[0].size}rem;
			--size-text-2: ${typescale.large[1].size}rem;
			--size-text-3: ${typescale.large[2].size}rem;
			--size-text-4: ${typescale.large[3].size}rem;
			--size-text-5: ${typescale.large[4].size}rem;
			--size-text-6: ${typescale.large[5].size}rem;

			--size-line-1: ${typescale.large[0].line}em;
			--size-line-2: ${typescale.large[1].line}em;
			--size-line-3: ${typescale.large[2].line}em;
			--size-line-4: ${typescale.large[3].line}em;
			--size-line-5: ${typescale.large[4].line}em;
			--size-line-6: ${typescale.large[5].line}em;
			`
		case "medium":
		case "default":
		default:
			return `
			--size-space-tiny: ${size.medium[0]}rem;
			--size-space-small: ${size.medium[1]}rem;
			--size-space-medium:${size.medium[2]}rem;
			--size-space-large: ${size.medium[3]}rem;
			--size-space-huge: ${size.medium[4]}rem;

			--size-text-1: ${typescale.medium[0].size}rem;
			--size-text-2: ${typescale.medium[1].size}rem;
			--size-text-3: ${typescale.medium[2].size}rem;
			--size-text-4: ${typescale.medium[3].size}rem;
			--size-text-5: ${typescale.medium[4].size}rem;
			--size-text-6: ${typescale.medium[5].size}rem;

			--size-line-1: ${typescale.medium[0].line}em;
			--size-line-2: ${typescale.medium[1].line}em;
			--size-line-3: ${typescale.medium[2].line}em;
			--size-line-4: ${typescale.medium[3].line}em;
			--size-line-5: ${typescale.medium[4].line}em;
			--size-line-6: ${typescale.medium[5].line}em;
		`
	}
}
setScaleSize.propTypes = {
	s: PropTypes.string.isRequired,
}
setScaleSize.defaultProps = {
	s: PropTypes.oneOf(["small", "medium", "large", "default"]),
}

export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w\-]+/g, "") // Remove all non-word chars
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, "") // Trim - from end of text
}

export function getYoutubeID(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
	var match = url.match(regExp)
	return match && match[7].length == 11 ? match[7] : false
}

export function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}
