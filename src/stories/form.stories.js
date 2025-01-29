import "@/components/_index.scss"

import inputText from "../pages/components/c-input-text.html?raw"
import scssInputText from "../assets/scss/components/c-input-text.scss?raw"

import selectCtbox from "../pages/components/c-select-ctbox.html?raw"
import scssSelectCtbox from "../assets/scss/components/c-select-ctbox.scss?raw"

import textarea from "../pages/components/c-textarea.html?raw"
import scssTextarea from "../assets/scss/components/c-textarea.scss?raw"

export default {
  title: "Components/Form",
  tags: ["autodocs"],
};

export const InputText = {
  render: (parameters) => {
    return inputText;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: inputText },
      { name: "SCSS", code: scssInputText },
    ],
  },
};

export const SelectCtbox = {
  render: (parameters) => {
    return selectCtbox;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: selectCtbox },
      { name: "SCSS", code: scssSelectCtbox },
    ],
  },
};

export const Textarea = {
  render: (parameters) => {
    return textarea;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: textarea },
      { name: "SCSS", code: scssTextarea },
    ],
  },
};
