import React from "react"
import Header from "./Header"

import { addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withSmartKnobs } from "storybook-addon-smart-knobs"
addDecorator(withSmartKnobs(Header))
addDecorator(withKnobs)

export default {
	title: "Header",
	component: Header
}

export const Main = () => <Header />
