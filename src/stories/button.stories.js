import "@/components/_index.scss"

import button from "../pages/components/c-button.html?raw"
import scssButton from "../assets/scss/components/c-button.scss?raw"

export default {
  title: "Components/Button",
  tags: ["autodocs"],
};

export const Button = {
  render: (parameters) => {
    return button;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: button },
      { name: "SCSS", code: scssButton },
    ],
  },
};
