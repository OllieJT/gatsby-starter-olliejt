import React from "react"
import PropTypes from "prop-types"
import { slugify } from "../../utility/functions"
//import styled from "styled-components"

export const uniqueId = (type, label, key) => slugify(type + "___" + label + (key ? "___" + key : ""))

export const FormItem = ({ id, label, children }) => (
	<p>
		<label htmlFor={id}>{label}</label>
		{children}
	</p>
)

FormItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
}

export default FormItem
