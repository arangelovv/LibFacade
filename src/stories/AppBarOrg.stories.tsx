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
    //👇 The args you need here will depend on your component
    color: "#3f51b5",
    title: "Default Title",
    position: "sticky",
    borderStyle: "sharp",
  },
};
