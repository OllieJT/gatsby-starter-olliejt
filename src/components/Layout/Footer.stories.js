import React from "react"
import Footer from "./Footer"

import { addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withSmartKnobs } from "storybook-addon-smart-knobs"
addDecorator(withSmartKnobs(Footer))
addDecorator(withKnobs)


export default {
	title: "Footer",
	component: Footer
}

export const Main = () => <Footer/>
