import React from "react"
import YouTube from "./YouTube"

import { addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withSmartKnobs } from "storybook-addon-smart-knobs"
addDecorator(withSmartKnobs(YouTube))
addDecorator(withKnobs)

export default {
	title: "YouTube Video",
	component: YouTube
}

export const Main = () => <YouTube />
