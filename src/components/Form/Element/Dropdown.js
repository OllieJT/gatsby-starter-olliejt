import React from "react"
import PropTypes from "prop-types"
//import styled from "styled-components"
//import { layout } from "../../../utility/theme"
import FormItem, { uniqueId } from "../FormItem"

const FormInput = ({ label, placeholder, options, key }) => {
	return (
		<FormItem id={uniqueId("dropdown", label, key)} label={label}>
			<select id={uniqueId("dropdown", label, key)} placeholder={placeholder || label}>
				<optgroup label="Option Group">
					{placeholder ? (
						<option disabled defaultValue>
							{placeholder}
						</option>
					) : null}
					{options.map(x => (
						<option key={uniqueId + x}>{x}</option>
					))}
				</optgroup>
			</select>
		</FormItem>
	)
}

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	placeholder: PropTypes.string,
	key: PropTypes.string,
	valid: PropTypes.bool,
}

FormInput.defaultProps = {
	label: null,
	options: [null],
	placeholder: null,
	key: null,
	valid: true,
}

export default FormInput
