export interface sidebarOrganismConfig {
  position: "left" | "right";
  drawerWidht: string;
  drawerColor: string;
  borderStyle:
    | "sharp"
    | "rounded"
    | "extra-rounded"
    | "rounded-left"
    | "rounded-right"
    | "extra-rounded-left"
    | "extra-rounded-right";
  elevation: "none" | "low-elev" | "medium-elev" | "high-elev";
}
