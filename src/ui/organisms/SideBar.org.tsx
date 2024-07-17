import { Drawer } from "@mui/material";
import { sidebarOrganismConfig } from "../models/side-bar.config";

export default function SidebarOrganism({
  position = "left",
  drawerWidht = "240px",
  drawerColor = "#3f51b5",
  borderStyle = "sharp",
  elevation = "none",
  children,
}: sidebarOrganismConfig & { children?: React.ReactNode }) {
  const borderRadiusMap = {
    sharp: "0px",
    rounded: "10px",
    "extra-rounded": "20px",
    "rounded-left": "10px 0 0 10px",
    "rounded-right": "0 10px 10px 0",
    "extra-rounded-left": "20px 0 0 20px",
    "extra-rounded-right": "0 20px 20px 0",
  };
  const borderRadius = borderRadiusMap[borderStyle] || "0px";

  const elevationValueMap = {
    none: "",
    "low-elev":
      "1px 0px 3px rgba(0, 0, 0, 0.2), 1px 0px 1px rgba(0, 0, 0, 0.14), 2px 0px 1px rgba(0, 0, 0, 0.12)",
    "medium-elev":
      "3px 0px 6px rgba(0, 0, 0, 0.16), 3px 0px 6px rgba(0, 0, 0, 0.23)",
    "high-elev":
      "10px 0px 20px rgba(0, 0, 0, 0.19), 6px 0px 6px rgba(0, 0, 0, 0.23)",
  };
  const elevationValue = elevationValueMap[elevation] || "none";
  return (
    <Drawer
      variant="permanent"
      anchor={position}
      sx={{
        width: "fit-content",
        boxSizing: "border-box",
        height: "100%",
        boxShadow: elevationValue,
        borderRadius: borderRadius,
        transition: "width 0.2s ease-in-out", // Add transition here

        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          position: "static",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: drawerWidht,
          backgroundColor: drawerColor,
          borderRadius: borderRadius,
          transition: "width 0.2s ease-in-out", // Add transition here
        },
      }}
    >
      {children}
    </Drawer>
  );
}
