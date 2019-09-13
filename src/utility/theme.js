export const color = {
  primary: {
    "050": "var(--colour-primary-050)",
    "100": "var(--colour-primary-100)",
    "200": "var(--colour-primary-200)",
    "300": "var(--colour-primary-300)",
    "400": "var(--colour-primary-400)",
    "500": "var(--colour-primary-500)",
    "600": "var(--colour-primary-600)",
    "700": "var(--colour-primary-700)",
    "800": "var(--colour-primary-800)",
  },
  secondary: {
    "050": "var(--colour-secondary-050)",
    "100": "var(--colour-secondary-100)",
    "200": "var(--colour-secondary-200)",
    "300": "var(--colour-secondary-300)",
    "400": "var(--colour-secondary-400)",
    "500": "var(--colour-secondary-500)",
    "600": "var(--colour-secondary-600)",
    "700": "var(--colour-secondary-700)",
    "800": "var(--colour-secondary-800)",
  },
  level: {
    "000": "var(--colour-level-000)",
    "050": "var(--colour-level-050)",
    "100": "var(--colour-level-100)",
    "200": "var(--colour-level-200)",
    "300": "var(--colour-level-300)",
    "400": "var(--colour-level-400)",
    "500": "var(--colour-level-500)",
    "600": "var(--colour-level-600)",
    "700": "var(--colour-level-700)",
    "800": "var(--colour-level-800)",
    "900": "var(--colour-level-900)",
  },
}

export const size = {
  tiny: ".8rem",
  xsmall: "1.2rem",
  small: "1.6rem",
  medium: "2.4rem",
  large: "4rem",
  xlarge: "8rem",
  huge: "16rem",
  xhuge: "24rem",
}

export const layout = {
  width: {
    max: "1920px",
    content: "960px",
    gutter: size.medium,
    contentMinusGutter: `calc(960px - ${size.medium})`,
  },
  background: color.level["800"],
  text: {
    title: color.level["000"],
    content: color.level["050"],
  },
  link: {
    before: color.primary["400"],
    after: color.primary["200"],
  },
  radius: ".4rem",
}
