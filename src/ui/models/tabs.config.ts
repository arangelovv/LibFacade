import { ReactNode } from "react";

export interface SingleTabConfig {
  label: string;
  index: string;
  icon?: any;
  iconPosition?: "start" | "end" | "bottom";
  children?: ReactNode;
}

export interface TabsOrganismConfig {
  tabsConfig: SingleTabConfig[];
}
