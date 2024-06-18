import type { Meta, StoryObj } from "@storybook/react";
import SidebarButtonAtom from "../../ui/atoms/SidebarButtonAtom";

const meta: Meta<typeof SidebarButtonAtom> = {
  title: "Atomic Design Components/Atoms/SidebarButton",
  component: SidebarButtonAtom,
};

export default meta;
type Story = StoryObj<typeof SidebarButtonAtom>;

export const Sandbox: Story = {
  render: (args) => (
    <SidebarButtonAtom variant={"text"} buttonText={""}></SidebarButtonAtom>
  ),
};
