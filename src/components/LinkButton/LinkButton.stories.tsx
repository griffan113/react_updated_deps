import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import LinkButton from "./index";

export default {
  title: "Components/LinkButton",
  component: LinkButton,
  argTypes: {
    children: {
      name: "text",
      defaultValue: "Button text",
      type: "string",
      description: "The text to display on the link button passed as children",
    },
    to: {
      defaultValue: "/",
      type: "string",
      description: "The path to the desired page",
    },
  },
  decorators: [
    (Story) => {
      return <BrowserRouter>{Story()}</BrowserRouter>;
    },
  ],
} as Meta;

export const Default: StoryObj = {};
