import React from "react"
import PropTypes from "prop-types"
//import styled from "styled-components"
//import { layout } from "../../../utility/theme"
import FormItem, { uniqueId } from "../FormItem"

const FormInput = ({ type, label, placeholder, key, valid, options }) => {
	switch (type) {
		case "color":
		case "number":
		case "range":
		case "date":
		case "month":
		case "week":
		case "datetime":
		case "datetime-local":
			return (
				<FormItem id={uniqueId(type, label, key)} label={label}>
					<input
						id={uniqueId(type, label, key)}
						type={type}
						defaultValue={placeholder || label}
						min={options && options.min}
						max={options && options.max}
					/>
				</FormItem>
			)
		case "textarea":
			return (
				<FormItem id={uniqueId(type, label, key)} label={label}>
					<textarea
						id={uniqueId(type, label, key)}
						rows="8"
						cols="48"
						placeholder={placeholder || label}
					></textarea>
				</FormItem>
			)
		default:
			return (
				<FormItem id={uniqueId(type, label, key)} label={label}>
					<input id={uniqueId(type, label, key)} type={type} placeholder={placeholder || label} />
				</FormItem>
			)
	}
}

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf([
		"text",
		"textarea",
		"password",
		"url",
		"email",
		"tel",
		"search",
		"number",
		"color",
		"number",
		"range",
		"date",
		"month",
		"week",
		"datetime",
		"datetime-local",
	]).isRequired,
	key: PropTypes.string,
	valid: PropTypes.bool,
	options: PropTypes.object,
}

FormInput.defaultProps = {
	label: null,
	placeholder: null,
	type: null,
	key: null,
	valid: true,
	options: null,
}

export default FormInput
