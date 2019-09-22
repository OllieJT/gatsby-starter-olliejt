import React from "react"
import PropTypes from "prop-types"
//import styled from "styled-components"
//import { layout } from "../../../utility/theme"
import FormItem, { uniqueId } from "../FormItem"

const FormOption = ({ type, group, label, selected, key }) => {
	return (
		<FormItem id={uniqueId(type, label, key)} label={label}>
			<input id={uniqueId(type, label, key)} name={group} type={type} defaultChecked={selected} />
		</FormItem>
	)
}

FormOption.propTypes = {
	group: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
	key: PropTypes.string,
	//valid: PropTypes.bool,
	selected: PropTypes.bool,
}
FormOption.defaultProps = {
	group: null,
	label: null,
	type: "checkbox",
	key: null,
	//valid: true,
	selected: false,
}

export default FormOption
