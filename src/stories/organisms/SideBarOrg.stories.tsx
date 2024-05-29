import type { Meta, StoryObj } from "@storybook/react";
import SidebarOrganism from "../../ui/organisms/Sidebar.org";
import { Box } from "@mui/material";

const meta: Meta<typeof SidebarOrganism> = {
  title: "Atomic Design Components/Organisms/Sidebar",
  component: SidebarOrganism,
};

export default meta;
type Story = StoryObj<typeof SidebarOrganism>;

export const Sandbox: Story = {
  args: {
    position: "left",
    drawerWidht: "200px",
    drawerColor: "#3f51b5",
    title: "Default Title",
    titleAlignment: "center",
    titleColor: "white",
    borderStyle: "sharp",
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
      <SidebarOrganism {...args}></SidebarOrganism>
    </Box>
  ),
};
