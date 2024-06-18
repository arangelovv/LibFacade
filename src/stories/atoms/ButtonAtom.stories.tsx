import type { Meta, StoryObj } from "@storybook/react";
import ButtonAtom from "../../ui/atoms/ButtonAtom";
import { Mail } from "@mui/icons-material";

const meta: Meta<typeof ButtonAtom> = {
  title: "Atomic Design Components/Atoms/Button",
  component: ButtonAtom,
};

export default meta;
type Story = StoryObj<typeof ButtonAtom>;

export const Sandbox: Story = {
  args: {
    buttonIcon: <Mail></Mail>,
  },
  argTypes: {},
};
