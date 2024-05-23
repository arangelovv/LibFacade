export interface AppBarOrganismConfig {
  color: string;
  position: "stick" | "absolute" | "fixed" | "relative" | "static" | "sticky";
  paddingLeft?: string;
  paddingRight?: string;
  title?: string;
  titleColor?: string;
  borderStyle: "sharp" | "rounded" | "extra-rounded";
  elevation: "none" | "low-elev" | "medium-elev" | "high-elev";
}
