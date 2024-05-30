import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import SidebarOrganism from "../../../ui/organisms/Sidebar.org";
import ButtonAtom from "../../../ui/atoms/ButtonAtom";
import Groups3Icon from "@mui/icons-material/Groups3";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const meta: Meta<typeof SidebarOrganism> = {
  title: "The Forge/Sidebar",
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
      <SidebarOrganism {...args}>
        <ButtonAtom
          borderStyle="rounded"
          buttonColor="#dddddd"
          buttonColorOnHover=""
          buttonIcon={<Groups3Icon fontSize="large" />}
          buttonText="Characters"
          outlineColor="gray"
          outlineColorOnHover="gray"
          textAlignment="left"
          textColor="#1a1414"
          variant="text"
          width="100%"
        />
        <ButtonAtom
          borderStyle="rounded"
          buttonColor="#dddddd"
          buttonColorOnHover=""
          buttonIcon={<LocalPoliceIcon fontSize="large" />}
          buttonText="Armor"
          outlineColor="gray"
          outlineColorOnHover="gray"
          textAlignment="left"
          textColor="#1a1414"
          variant="text"
          width="100%"
        />
        <ButtonAtom
          borderStyle="rounded"
          buttonColor="#dddddd"
          buttonColorOnHover=""
          buttonIcon={<SportsKabaddiIcon fontSize="large" />}
          buttonText="Offensive"
          outlineColor="gray"
          outlineColorOnHover="gray"
          textAlignment="left"
          textColor="#1a1414"
          variant="text"
          width="100%"
        />
        <ButtonAtom
          borderStyle="rounded"
          buttonColor="#dddddd"
          buttonColorOnHover=""
          buttonIcon={<LocalPoliceIcon fontSize="large" />}
          buttonText="Prismatic"
          outlineColor="gray"
          outlineColorOnHover="gray"
          textAlignment="left"
          textColor="#1a1414"
          variant="text"
          width="100%"
        />
        <ButtonAtom
          borderStyle="rounded"
          buttonColor="#dddddd"
          buttonColorOnHover=""
          buttonIcon={<LocalPoliceIcon fontSize="large" />}
          buttonText="Defensive"
          outlineColor="gray"
          outlineColorOnHover="gray"
          textAlignment="left"
          textColor="#1a1414"
          variant="text"
          width="100%"
        />
      </SidebarOrganism>
    </Box>
  ),
};
