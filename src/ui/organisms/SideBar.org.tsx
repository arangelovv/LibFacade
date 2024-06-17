import { Drawer } from "@mui/material";
import { sidebarOrganismConfig } from "../models/side-bar.config";

export default function SidebarOrganism({
  position = "left",
  drawerWidht = "240px",
  drawerColor = "#3f51b5",
  borderStyle = "sharp",
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

  return (
    <Drawer
      variant="permanent"
      anchor={position}
      sx={{
        width: "fit-content",
        boxSizing: "border-box",
        height: "100%",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          padding: "10px",
          position: "static",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: drawerWidht,
          backgroundColor: drawerColor,
          borderRadius: borderRadius,
        },
      }}
    >
      {children}
    </Drawer>
  );
}
