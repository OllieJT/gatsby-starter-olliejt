/* eslint-disable */
import PropTypes from "prop-types"
import { color } from "./theme"

export const IS_BROWSER = typeof window !== "undefined"

export function setThemeColor(s) {
	switch (s) {
		case "switch":
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

			--color-secondary-050: ${color.primary[0]};
			--color-secondary-100: ${color.primary[1]};
			--color-secondary-200: ${color.primary[2]};
			--color-secondary-300: ${color.primary[3]};
			--color-secondary-400: ${color.primary[4]};
			--color-secondary-500: ${color.primary[5]};
			--color-secondary-600: ${color.primary[6]};
			--color-secondary-700: ${color.primary[7]};
			--color-secondary-800: ${color.primary[8]};
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
		case "none":
		default:
			return `
			--color-primary-050: ${color.primary[0]};
			--color-primary-100: ${color.primary[1]};
			--color-primary-200: ${color.primary[2]};
			--color-primary-300: ${color.primary[3]};
			--color-primary-400: ${color.primary[4]};
			--color-primary-500: ${color.primary[5]};
			--color-primary-600: ${color.primary[6]};
			--color-primary-700: ${color.primary[7]};
	  		--color-primary-800: ${color.primary[8]};

			--color-secondary-050: ${color.secondary[0]};
			--color-secondary-100: ${color.secondary[1]};
			--color-secondary-200: ${color.secondary[2]};
			--color-secondary-300: ${color.secondary[3]};
			--color-secondary-400: ${color.secondary[4]};
			--color-secondary-500: ${color.secondary[5]};
			--color-secondary-600: ${color.secondary[6]};
			--color-secondary-700: ${color.secondary[7]};
			--color-secondary-800: ${color.secondary[8]};

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
	s: PropTypes.oneOf(["switch", "switch-invert", "invert", "none"]),
}
