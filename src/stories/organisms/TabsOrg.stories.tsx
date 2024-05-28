import type { Meta, StoryObj } from "@storybook/react";
import TabsOrganism from "../../ui/organisms/Tabs.org";
import { SingleTabConfig } from "../../ui/models/tabs.config";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TabsOrganism> = {
  title: "Atomic Design Components/Organisms/Tabs",
  component: TabsOrganism,
};

export default meta;

type Story = StoryObj<typeof TabsOrganism>;

const initialTabs: SingleTabConfig[] = [
  {
    label: "Tab #1",
    index: "1",
    iconPosition: "start",
  },
  {
    label: "Tab #2",
    index: "2",
    icon: <InsertEmoticonIcon fontSize="small" />,
    iconPosition: "start",
    children:
      "This is a tab panel in which you can include whatever you want. In this tab pane the text you are reading is included as a children. This is a tab with an icon at the start.",
  },
  {
    label: "Tab #3",
    index: "3",
    icon: <InsertEmoticonIcon fontSize="small" />,
    iconPosition: "end",
    children:
      "This is a tab panel in which you can include whatever you want. In this tab pane the text you are reading is included as a children. This is a tab with an icon at the end.",
  },
  {
    label: "Tab #4",
    index: "4",
    icon: <InsertEmoticonIcon fontSize="small" />,
    iconPosition: "bottom",
    children:
      "This is a tab panel in which you can include whatever you want. In this tab pane the text you are reading is included as a children. This is a tab with an icon at the bottom.",
  },
];

export const Default: Story = {
  args: {
    tabsConfig: initialTabs,
  },
};
