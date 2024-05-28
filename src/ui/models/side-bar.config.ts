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
  title?: string;
  titleAlignment: "left" | "right" | "center";
}
