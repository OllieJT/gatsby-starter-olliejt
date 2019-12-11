import React from "react"
import Menu from "./Menu"

import { addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withSmartKnobs } from "storybook-addon-smart-knobs"
addDecorator(withSmartKnobs(Menu))
addDecorator(withKnobs)


export default {
	title: "Menu",
	component: Menu
}

export const Main = () => <Menu/>
