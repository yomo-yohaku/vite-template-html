import "@/components/_index.scss"

import headingPrimary from "../pages/components/c-heading-primary.html?raw"
import scssHeadingPrimary from "../assets/scss/components/c-heading-primary.scss?raw"

import headingSecondary from "../pages/components/c-heading-secondary.html?raw"
import scssHeadingSecondary from "../assets/scss/components/c-heading-secondary.scss?raw"

export default {
  title: "Components/Heading",
  tags: ["autodocs"],
};

export const HeadingPrimary = {
  render: (parameters) => {
    return headingPrimary;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: headingPrimary },
      { name: "SCSS", code: scssHeadingPrimary },
    ],
  },
};

export const HeadingSecondary = {
  render: (parameters) => {
    return headingSecondary;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: headingSecondary },
      { name: "SCSS", code: scssHeadingSecondary },
    ],
  },
};
