import type { Meta, StoryObj } from "@storybook/react";

import AppBarOrganism from "../ui/organisms/AppBar.org";
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AppBarOrganism> = {
  component: AppBarOrganism,
};

export default meta;
type Story = StoryObj<typeof AppBarOrganism>;

export const Sandbox: Story = {
  args: {
    color: "#3f51b5",
    position: "sticky",
    borderStyle: "sharp",
    elevation: "none",
    paddingLeft: "0px",
    paddingRight: "0px",
    title: "Default Title",
    titleColor: "white",
  },
  argTypes: {
    borderStyle: {
      options: ["sharp", "rounded", "extra-rounded"],
      control: { type: "radio" },
    },
    elevation: {
      options: ["none", "low-elev", "medium-elev", "high-elev"],
      control: { type: "radio" },
    },
  },
};
