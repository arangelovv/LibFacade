import type { Meta, StoryObj } from "@storybook/react";
import SideBarOrganism from "../../ui/organisms/SideBar.org";
import { Box } from "@mui/material";

const meta: Meta<typeof SideBarOrganism> = {
  title: "Atomic Design Components/Organisms/Drawer",
  component: SideBarOrganism,
};

export default meta;
type Story = StoryObj<typeof SideBarOrganism>;

export const Sandbox: Story = {
  args: {
    position: "left",
    drawerWidht: "200px",
    drawerColor: "grey",
    title: "Default Title",
    titleAlignment: "center",
  },
  argTypes: {
    position: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    borderStyle: {
      options: [
        "sharp",
        "rounded",
        "extra-rounded",
        "rounded-left",
        "rounded-right",
        "extra-rounded-left",
        "extra-rounded-right",
      ],
      control: { type: "radio" },
    },
    titleAlignment: {
      options: ["left", "right", "center"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Box sx={{ height: "600px" }}>
      <SideBarOrganism {...args} />
    </Box>
  ),
};
