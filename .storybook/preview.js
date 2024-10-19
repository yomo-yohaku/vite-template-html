/** @type { import('@storybook/html').Preview } */
import "@/base/_index.scss";
import "@/globals/_index.scss";
import "/src/stories/stories.scss";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
